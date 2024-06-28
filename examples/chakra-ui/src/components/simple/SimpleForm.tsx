import React from 'react';
import { useForm } from 'react-hook-form';

interface ExampleValues {
  example: string
}

export const SimpleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ExampleValues>();
  const onSubmit = (data: ExampleValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('example', { required: true })} />
      {errors.example && <span>This field is required</span>}

      <input type="submit"/>
    </form>
  );
};