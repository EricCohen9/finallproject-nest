import React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-dom-confetti';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
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

const Buy = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [isConfetti, setIsConfetti] = React.useState(false);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsSuccess(true);
        setIsConfetti(true);
        setTimeout(() => {
          setIsSuccess(false);
          setIsConfetti(false);
            navigate('/home');
        }, 2000);

        console.log(data);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {isSuccess && <SuccessMessage>Success! Redirecting...</SuccessMessage>}
                <Confetti active={isConfetti} />
                <FormGroup>
                    <Label htmlFor="amount">amount</Label>
                    <Input type="number" {...register('amount', { required: 'Amount is required' })} />
                    {errors.amount && <p>{errors.amount.message}</p>}
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="limitOrder">limit order</Label>
                    <Input
                        type="number" placeholder="curent price 67.54 $"
                        {...register('limitOrder', { required: 'Limit order is required' })}
                    />
                    {errors.limitOrder && <p>{errors.limitOrder.message}</p>}
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" {...register('password', { required: 'Password is required' })} />
                    {errors.password && <p>{errors.password.message}</p>}
                </FormGroup>

                <Button type="submit">buy</Button>
            </Form>
        </Container>
    );
};

export default Buy;
