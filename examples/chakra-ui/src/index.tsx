import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './components/App';


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