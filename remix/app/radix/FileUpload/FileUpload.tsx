import React, { useCallback, useRef, useState } from 'react';
import { Button, Flex, Text } from '@radix-ui/themes';
import './FileUpload.css';
import { DownloadIcon } from '@radix-ui/react-icons';

export function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    if (event.dataTransfer.files) {
      setFile(event.dataTransfer.files[0]);
    }
  }, []);

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('File uploaded successfully:', data);
        })
        .catch(error => {
          console.error('Error uploading file:', error);
        });
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" align="center" gap="3">
        <Text>Select a file to upload:</Text>
        <Flex
          className={`drop-zone ${isDragging ? 'dragging' : ''}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={handleClick}
          direction={'column'}
          gap={'4'}
        >
          <input
            type="file"
            onChange={handleFileChange}
            data-testid="file-input"
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <DownloadIcon />
          <Text>{file ? `${file.name}` : 'Drag & drop a file here, or click to select one'}</Text>

          {file && (
            <Button variant="ghost" size="2" onClick={handleRemoveFile}>
                Remove
            </Button>
          )}
        </Flex>
        <Button type="submit">Upload</Button>
      </Flex>
    </form>
  );
}