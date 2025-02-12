import { Button, Container } from '~/components/styles';
import { useState } from 'react';

export const Notes = () => {
  const [notes, setNotes] = useState([{ id: 1, text: 'This is a note' }]);

  return (
    <Container>
      <Button onClick={() => setNotes([...notes, { id: notes.length + 1, text: `Note ${notes.length + 1}` }])}>
        Create a Note
      </Button>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {notes.map((note) => {
          return <li key={note.id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{note.text}</li>;
        })}
      </ul>
    </Container>
  );
}