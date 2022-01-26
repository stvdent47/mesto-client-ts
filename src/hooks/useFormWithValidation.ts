import { useState, useCallback } from 'react';

type TextInputState = {
  [key: string]: string;
}; // <Record>?

export const useFormWithValidation = () => {
  const [values, setValues] = useState<TextInputState>({});
  const [errors, setErrors] = useState<TextInputState>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = evt;
    const { name, value } = target;
    const form = target.closest('form');

    setValues((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevState) => ({ ...prevState, [name]: target.validationMessage }));
    form && setIsFormValid(form.checkValidity());
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsFormValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsFormValid(newIsFormValid);
  }, []);

  return { values, setValues, errors, isFormValid, handleChange, resetForm };
};
