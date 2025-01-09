// This is the route for the file upload endpoint
import { json } from '@remix-run/node';

export const loader = async () => {
  return json({ message: 'Upload endpoint is working' }, { status: 200 });
};

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const file = formData.get('file');

  if (!file) {
    return json({ error: 'No file uploaded' }, { status: 400 });
  }

  // Handle the file upload logic here

  return json({ message: 'File uploaded successfully' }, { status: 200 });
};