import React from 'react';
import { Card, CardBody, CardHeader, ChakraProvider, Container, Spacer, Text } from '@chakra-ui/react';
import { ExampleAligned } from './tutorial/ExampleAligned';
import { ExampleForm } from './forms/ExampleForm';
import { ParentComponent } from './tutorial/ParentComponent';

export function App(): React.JSX.Element {
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
            <ParentComponent/>
            <Spacer/>
            <ExampleAligned/>
            <ExampleForm/>
          </CardBody>
        </Card>
      </Container>
    </ChakraProvider>
  );
}