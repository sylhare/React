import React from 'react';
import { createRoot } from 'react-dom/client';
import { Card, CardBody, CardHeader, ChakraProvider, Container, Text } from '@chakra-ui/react';

function App(): React.JSX.Element {
  return (
    <ChakraProvider>
      <Container
        paddingTop={5}
        minHeight={'100vh'}
        bg={'lightgray'}
        {...{
          maxW: {
            base: 'container.xl',
            '4xl': 'container.4xl',
            '5xl': 'container.5xl',
            '6xl': 'container.6xl',
          },
        }}>
        <Card p={5}>
          <CardHeader
            borderBottom={'1px solid'}
            borderColor={'#f5f5f5'}
          >
            Chakra UI example
          </CardHeader>
          <CardBody>
            <Text>
              Welcome to Chakra UI
            </Text>
          </CardBody>
        </Card>
      </Container>
    </ChakraProvider>
  );
}

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <ChakraProvider>
        <App/>
      </ChakraProvider>
    </React.StrictMode>,
  );
} else {
  console.log('Root element not found');
}