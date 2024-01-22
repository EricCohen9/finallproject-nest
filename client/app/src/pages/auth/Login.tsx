// Login.js
import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Form = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
`;

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    // You can handle login logic here
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <ErrorMessage>{(errors.email as any).message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <ErrorMessage>{(errors.password as any).message}</ErrorMessage>}
        </FormGroup>

        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
