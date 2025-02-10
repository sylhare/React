import React from 'react';
import { Button, Checkbox, Flex, Heading, Switch, Text, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon, ThickArrowUpIcon } from '@radix-ui/react-icons';

// Primitives: https://www.radix-ui.com/themes/docs/components/
export const PrimitivesDemo = (): React.JSX.Element => {
  return (
    <>
      <Flex direction="column" gap="2" align="center" style={{ marginTop: '20px' }}>
        <Text>Hello from Radix Themes</Text>

      </Flex>
      <Flex direction="column" align="center" gap="4" wrap="wrap">
        <Flex align="center" gap="3" wrap="wrap">
          <Button radius="full">Button</Button>
          <Button variant="soft" size="2">Click</Button>
          <Button disabled>Disabled</Button>
          <Button variant="ghost">Ghost button</Button>
        </Flex>
        <Flex gap="3">
          <Checkbox defaultChecked />
          <Switch defaultChecked />
          <Switch defaultChecked disabled />
        </Flex>
      </Flex>
      <Flex direction="column" gap="4" mt="4" align="center">
        <Heading as="h1">Radix UI <Text color="amber">Colorful</Text> Example</Heading>
        <Text size="3" color="gray" weight="medium">This is a line of text</Text>
        <TextField.Root placeholder="Search the docs…">
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
        <Button size="2" style={{ cursor: 'pointer' }}>Submit<ThickArrowUpIcon /></Button>
      </Flex>
    </>
  );
};