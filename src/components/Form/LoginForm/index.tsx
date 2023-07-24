import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginValues } from '../../../provides/@types';
import { UserContext } from '../../../provides/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginValues>();

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginValues> = (formData) => {
    userLogin(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='email'
        placeholder='Digite seu Email'
        type='email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='senha'
        placeholder='Digite sua Senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
