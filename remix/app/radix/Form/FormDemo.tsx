import * as React from 'react';
import { FormEvent } from 'react';
import * as Form from '@radix-ui/react-form';
import { Box, Button, Flex, Text } from '@radix-ui/themes';

export function FormDemo() {
  const [serverErrors, setServerErrors] = React.useState({
    email: false,
    password: false,
  });

  const onSubmit = (event: FormEvent) => {
    if (event.currentTarget instanceof HTMLFormElement) {
      const data = Object.fromEntries(new FormData(event.currentTarget));
      console.log(data);
      event.preventDefault();
    }
  };

  return (
    <Form.Root
      onSubmit={onSubmit}
      onClearServerErrors={() =>
        setServerErrors({ email: false, password: false })
      }
    >
      <Form.Field name="email" serverInvalid={serverErrors.email}>
        <Flex gap={'1'} direction={'column'}>
          <Form.Label><Text weight={'bold'}>Email Address</Text></Form.Label>
          <Flex>
            <Form.Control type="email" required />
            <Form.Message match="valueMissing">
              Please enter your email.
            </Form.Message>
            <Form.Message match="typeMismatch" forceMatch={serverErrors.email}>
              Please provide a valid email.
            </Form.Message>
          </Flex>
        </Flex>
      </Form.Field>
      <Box mt="4" />
      <Form.Field name="password" serverInvalid={serverErrors.password}>
        <Flex gap={'1'} direction={'column'}>
          <Form.Label>
            <Text weight={'bold'}>Password</Text>
          </Form.Label>
          <Flex>
            <Form.Control type="password" required />
            <Form.Message match="valueMissing">
              Please enter a password.
            </Form.Message>
            {serverErrors.password && (
              <Form.Message>
                Please provide a valid password. It should contain at least 1 number
                and 1 special character.
              </Form.Message>
            )}
          </Flex>
        </Flex>
      </Form.Field>
      <Box mt="4" />
      <Form.Submit asChild>
        <Button>Submit</Button>
      </Form.Submit>
    </Form.Root>
  );
}
