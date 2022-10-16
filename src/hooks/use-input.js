import { useState } from 'react';

const useInput = (validate) => {
   const [enteredValue, setEnteredValue] = useState('');
   const [valueIsTouched, setValueIsTouched] = useState(false);

   const valueIsValid = validate(enteredValue);
   const hasError = !valueIsValid && valueIsTouched;

   const valueChangeHandler = (event) => {
      setEnteredValue(event.target.value);
   };
   const valueBlurHandler = (event) => {
      setValueIsTouched(true);
   };
   const reset = () => {
      setEnteredValue('');
      setValueIsTouched(false);
   };

   return {
      value: enteredValue,
      hasError,
      valueChangeHandler,
      valueBlurHandler,
      reset,
   };
};
export default useInput;
