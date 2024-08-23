import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Input } from '@chakra-ui/input';
import { Button, FormControl, FormErrorMessage, FormLabel, HStack, VStack } from '@chakra-ui/react';

interface ExampleFromValues {
  name: string;
  description: string;
  password: string;
  hash: string;
}

export const ExampleForm = (): React.JSX.Element => {
  const {
    control,
    register,
    reset,
    formState: { isValid, errors },
    watch,
    getValues,
    setValue,
    handleSubmit,
  } = useForm<ExampleFromValues>({
    mode: 'all',
    defaultValues: {
      name: '',
      description: '',
      password: '',
      hash: '',
    },
  });

  const onSubmit = (data: ExampleFromValues) => console.log(data);
  const passwordWatcher = watch("password");

  useEffect(() => {
    setValue('hash', btoa(getValues("password")))
    console.log(getValues());
  }, [passwordWatcher]);

  return (
    <VStack gap={5}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired={true} isInvalid={!!errors.name}>
          <FormLabel>Name</FormLabel>
          <Input {...register('name', { required: 'Name is required' })} placeholder={'Name'} isRequired/>
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input {...register('description')} placeholder={'Description'} />
        </FormControl>
        <FormControl isRequired={true} isInvalid={!!errors.password}>
          <FormLabel>Password</FormLabel>
          <Controller
            name={'password'}
            control={control}
            rules={{
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
              validate: {
                containsNumber: (v) => /\d/.test(v) || 'Password must contain a number',
                containsSpecialChar: (v) => /[^A-Za-z0-9]/.test(v) || 'Password must contain a special character',
              },
            }}
            render={
              ({ field }) => (<>
                <Input placeholder={'Password'} isRequired {...field} />
              </>)
            }
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <HStack pt={10}>
          <Button variant={'outline'} onClick={() => reset()}>Reset</Button>
          <Button type={'submit'} disabled={!isValid}>Submit</Button>
        </HStack>
      </form>
    </VStack>
  );
};