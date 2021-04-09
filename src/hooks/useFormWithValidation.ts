import { useState, useCallback } from 'react';

interface ITextInputState {
  [key: string]: string;
}

interface IUseForm {
  values: ITextInputState;
  errors: ITextInputState;
  isFormValid: boolean;
  handleChange: () => void;
}

const useFormWithValidation = () => {
  const [values, setValues] = useState<ITextInputState>({});
  const [errors, setErrors] = useState<ITextInputState>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = evt;
    const { name, value } = target;

    setValues((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevState) => ({ ...prevState, [name]: target.validationMessage }));
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsFormValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsFormValid(newIsFormValid);
  }, []);

  return { values, setValues, errors, isFormValid, handleChange, resetForm };
};

export default useFormWithValidation;
