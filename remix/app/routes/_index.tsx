import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Container, StyledLink } from '~/components/styles';

export async function loader() {
  return {
    message: 'hello from loader',
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

// Needs the export default or the page won't render
export default function HomePage() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <Container className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Welcome to Remix</h1>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
        <StyledLink to="/about">about</StyledLink>
        <StyledLink to="/form">form</StyledLink>
        <StyledLink to="/radix">radix</StyledLink>
      </div>
      <p>{loaderData.message}</p>
    </Container>
  );
}