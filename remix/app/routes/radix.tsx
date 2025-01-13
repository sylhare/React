import React from 'react';
import { Box, Container, Flex, Theme } from '@radix-ui/themes';
import { CompanyCard } from '~/radix/CompanyCard';
import { FileUpload } from '~/radix/FileUpload';
import { FormDemo } from '~/radix/FormDemo';
import { SelectDemo } from '~/radix/SelectDemo';
import { PrimitivesDemo } from '~/radix/PrimitivesDemo';
import { ContextMenuDemo } from '~/radix/ContextMenuDemo';

export default function RadixPage(): React.JSX.Element {
  return (
    <div>
      <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
        <Container style={{ backgroundColor: 'var(--gray-1)', marginTop: '20px' }}>
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
      </Theme>
    </div>
  );
}