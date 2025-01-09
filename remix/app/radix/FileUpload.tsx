import React, { useState } from 'react';
import { Button, Flex, Text } from '@radix-ui/themes';

export function FileUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      // Replace with your file upload URL
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

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" align="center" gap="3">
        <Text> Select a file to upload:</Text>
        <input type="file" onChange={handleFileChange} data-testid="file-input"/>
        <Button type="submit">Upload</Button>
      </Flex>
    </form>
  );
}