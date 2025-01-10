import React from 'react';
import { Button, Checkbox, Flex, Switch, Text, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

// Primitives: https://www.radix-ui.com/themes/docs/components/
export const PrimitivesDemo = (): React.JSX.Element => {
  return (
    <>
      <Flex direction="column" gap="2" align="center">
        <Text>Hello from Radix Themes</Text>
        <Button variant="soft" size="2">Click</Button>
        <TextField.Root placeholder="Search the docs…">
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>

      </Flex>
      <Flex align="center" gap="4" wrap="wrap">
        <Flex align="center" gap="3" wrap="wrap">
          <Button radius="full">Button</Button>
          <Button asChild>
          </Button>
          <Button disabled>Disabled</Button>
        </Flex>
        <Button variant="ghost">Ghost button</Button>
        <Checkbox defaultChecked />
        <Switch defaultChecked />
        <Switch defaultChecked disabled />
      </Flex>
    </>
  );
};