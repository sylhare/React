import React from 'react';
import { Box, Flex, Text } from '@radix-ui/themes';
import { RocketIcon } from '@radix-ui/react-icons';
import { MenuLink } from '~/radix/Menu/MenuLink';

export const LeftSideMenu: React.FC = () => (
  <Flex direction="column"
        style={{
          width: '250px',
          height: '100vh',
          background: 'linear-gradient(to bottom left, var(--accent-3), var(--accent-4))',
          padding: '20px'
        }}>
    <Box style={{ marginBottom: '30px' }}>
      <Text size="4" weight="bold" mb="4">Radix</Text>
      <Text weight="bold">
        <RocketIcon style={{ marginLeft: '8px' }} />
      </Text>
    </Box>
    <MenuLink to="/about">About</MenuLink>
    <MenuLink to="/form">Form</MenuLink>
    <MenuLink to="/">Home</MenuLink>
    <Text style={{ marginTop: 'auto' }}>Experimentation with Radix</Text>
  </Flex>
);