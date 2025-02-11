import React from 'react';
import { ActionFunction, json, LoaderFunction, MetaFunction } from '@remix-run/node';
import { Form, useActionData, useLoaderData } from '@remix-run/react';
import { Button, Container } from '~/components/styles';

export const loader: LoaderFunction = async () => {
  return json({ message: 'Hello, world!' });
};

export const meta: MetaFunction = () => {
  return [
    { title: 'About Us' },
    { name: 'description', content: 'Learn more about us' },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  return json({ success: true, name, email, message });
};

export default function AboutPage(): React.ReactElement {
  const data = useLoaderData<{ message: string }>();
  const actionData = useActionData<{ success: boolean; name: string; email: string; message: string }>();

  return (
    <main className="container" style={{ padding: '20px' }}>
      <Container>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>About Us</h1>
        <p>{data.message}</p>
        <h2 style={{ marginTop: '20px' }}>Leave us a comment</h2>
        <Comment />
        {actionData && actionData.success && (
          <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e0ffe0', borderRadius: '4px' }}>
            <p>Form Submission Successful for <b>{actionData.name}</b></p>
          </div>
        )}
      </Container>
    </main>
  );
}

export const Comment: React.FC = () => {
  return (
    <Form method="post" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <label>Name: <input type="text" name="name" required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} /></label>
      <label>Email: <input type="email" name="email" required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} /></label>
      <label>Message: <textarea name="message" required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea></label>
      <Button type="submit">Submit</Button>
    </Form>
  );
};