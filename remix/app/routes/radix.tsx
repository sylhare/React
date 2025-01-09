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
            <Flex direction="column" gap="2" align="center">
              <Text>Hello from Radix Themes</Text>
              <Button variant="soft" size="2">Click</Button>
            </Flex>
            <Flex align="center" gap="4" wrap="wrap">
              <Flex align="center" gap="3" wrap="wrap">
                <Button radius="full">Button</Button>
                <Button asChild>
                </Button>
                <Button disabled>Disabled</Button>
              </Flex>
              <Button variant="ghost">Ghost button</Button>
              <Checkbox defaultChecked/>
              <Switch defaultChecked/>
              <Switch defaultChecked disabled/>
            </Flex>
            <CompanyCard/>
            <FileUpload/>
          </Flex>
        </Container>
      </Theme>
    </div>
  );
}