import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IRegisterFormValues } from '../../../provides/@types';
import { UserContext } from '../../../provides/UserContext';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>();

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    userRegister(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='name'
        placeholder='Digite seu Nome'
        type='text'
        register={register('name')}
        error={errors.name}
      />
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
      <Input
        label='Confirme a Senha'
        placeholder='Confirme Sua Senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />
      <StyledButton
        onSubmit={handleSubmit(submit)}
        $buttonSize='default'
        $buttonStyle='gray'
      >
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
