import { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader() {
  return { message: 'About us' };
}

export const meta: MetaFunction = () => {
  return [
    { title: 'About Us' },
    { name: 'description', content: 'Learn more about us' },
  ];
};

export default function AboutPage() {
  const data = useLoaderData<typeof loader>();
  return (
    <main className="container">
      <div>
        <h1>About Us</h1>
        <p>{data.message}</p>
      </div>
    </main>
  );
}