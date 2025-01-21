import * as React from 'react';
import { FormEvent } from 'react';
import * as Form from '@radix-ui/react-form';
import { Box, Button, Flex, TextField } from '@radix-ui/themes';
import './styles.css';

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

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isInvalid = !/[!@#$%^&*(),.?":{}|<>]/.test(value) || !/\d/.test(value);
    setServerErrors((prev) => ({ ...prev, password: isInvalid }));
  };

  return (
    <Form.Root
      className="FormRoot"
      onSubmit={onSubmit}
      onClearServerErrors={() =>
        setServerErrors({ email: false, password: false })
      }
    >
      <Form.Field className="FormField" name="email" serverInvalid={serverErrors.email}>
        <Flex gap={'1'} direction={'column'}>
          <Form.Label className="FormLabel">Email Address</Form.Label>
          <Flex direction={'column'}>
            <Form.Control asChild>
              <input className="Input" type="email" required />
            </Form.Control>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your email.
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch" forceMatch={serverErrors.email}>
              Please provide a valid email.
            </Form.Message>
          </Flex>
        </Flex>
      </Form.Field>
      <Box mt="4" />
      <Form.Field className="FormField" name="password" serverInvalid={serverErrors.password}>
        <Flex gap={'1'} direction={'column'}>
          <Form.Label className="FormLabel">Password</Form.Label>
          <Flex direction={'column'}>
            <Form.Control asChild>
              <TextField.Root type="password" required onChange={handlePasswordChange} />
            </Form.Control>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter a password.
            </Form.Message>
            <Form.Message className="FormMessage" match={() => serverErrors.password} forceMatch={serverErrors.password}>
              Please provide a valid password. It should contain at least 1 number and 1 special character.
            </Form.Message>
          </Flex>
        </Flex>
      </Form.Field>
      <Box mt="4" />
      <Form.Submit asChild>
        <Button disabled={serverErrors.password}>Submit</Button>
      </Form.Submit>
    </Form.Root>
  );
}
