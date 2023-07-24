import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps {
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  type: 'text' | 'email' | 'password';
  placeholder: string;
}

const Input = ({ label, register, error, type, placeholder }: IInputProps) => (
  <fieldset>
    <StyledTextField
      label={label}
      {...register}
      type={type}
      placeholder={placeholder}
    />
    {error ? (
      <StyledParagraph fontColor='red'>{error.message}</StyledParagraph>
    ) : null}
  </fieldset>
);

export default Input;
