import React from 'react';
import { ActionFunction, json, LoaderFunction, MetaFunction } from '@remix-run/node';
import { Form, useActionData, useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
  return json({ message: 'Hello, world!' })
}

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
    <main className="container">
      <div>
        <h1>About Us</h1>
        <p>{data.message}</p>
        <h2>Leave us a comment</h2>
        <Comment />
        {actionData && actionData.success && (
          <div>
            <p>Form Submission Successful for <b>{actionData.name}</b></p>
          </div>
        )}
      </div>
    </main>
  );
}

export const Comment: React.FC = () => {
  return (
    <>
      <Form method="post">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Name: <input type="text" name="name" required /></label>
          <label>Email: <input type="email" name="email" required /></label>
          <label>Message: <textarea name="message" required></textarea></label>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}