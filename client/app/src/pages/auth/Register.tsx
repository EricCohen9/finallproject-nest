import React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler,FieldValues  } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-dom-confetti';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
const SuccessMessage = styled.p`
  color: green;
  text-align: center;
`;

const Register = () => {
  const [isConfetti, setIsConfetti] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate(); 
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsConfetti(true)
    setTimeout(() => {
        navigate('/home');
    }, 2000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
      {isConfetti && <SuccessMessage>Success! Redirecting...</SuccessMessage>}
        <Confetti active={isConfetti} />
        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            {...register('firstName', { required: 'First Name is required' })}
          />
          {errors.firstName && <p>{(errors.firstName as any).message}</p>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            {...register('lastName', { required: 'Last Name is required' })}
          />
          {errors.lastName && <p>{(errors.lastName as any).message}</p>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <p>{(errors.email as any).message}</p>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p>{(errors.password as any).message}</p>}
        </FormGroup>

        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default Register;
