import React from 'react';
import { Box, Container, Flex, Theme } from '@radix-ui/themes';
import { CompanyCard } from '~/radix/CompanyCard';
import { FileUpload } from '~/radix/FileUpload/FileUpload';
import { FormDemo } from '~/radix/Form/FormDemo';
import { SelectDemo } from '~/radix/SelectDemo';
import { PrimitivesDemo } from '~/radix/PrimitivesDemo';
import { ContextMenuDemo } from '~/radix/ContextMenuDemo';
import { LeftSideMenu } from '~/radix/Menu/LeftSideMenu';

const MainContent = () => (
  <Box style={{ flex: 1, padding: '8px', overflow: 'hidden' }}>
    <Container style={{
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      height: '100%',
      overflowY: 'auto'
    }}>
      <Flex direction="column" align="center" gap="9">
        <PrimitivesDemo />
        <ContextMenuDemo />
        <SelectDemo />
        <CompanyCard />
        <FileUpload />
        <FormDemo />
        <Box mt={'9'} />
      </Flex>
    </Container>
  </Box>
);

export default function RadixPage(): React.JSX.Element {
  return (
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
      <Box style={{ height: '100vh', backgroundColor: 'var(--gray-3)' }}>
        <Flex style={{ height: '100%' }}>
          <LeftSideMenu />
          <MainContent />
        </Flex>
      </Box>
    </Theme>
  );
}