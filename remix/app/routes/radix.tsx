import React from 'react';
import { Button, Checkbox, Container, Flex, Switch, Text, Theme } from '@radix-ui/themes';
import { CompanyCard } from '~/radix/CompanyCard';
import { FileUpload } from '~/radix/FileUpload';

export default function RadixPage(): React.JSX.Element {
  return (
    <div>
      <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
        <Container style={{ backgroundColor: 'var(--gray-1)', marginTop: '20px' }}>
          <Flex direction="column" align="center" gap="9">
            <CompanyCard/>
            <FileUpload/>
            <PrimitivesDemo />
          </Flex>
        </Container>
      </Theme>
    </div>
  );
}