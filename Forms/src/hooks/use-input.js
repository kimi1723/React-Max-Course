import { useState } from "react";

const useInput = (validateValue, getValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
    setIsTouched(true);
    //  isInvalid(e.target.value.trim() === "");
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
    //  isInvalid(!enteredNameIsValid);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  getValue = enteredValue;

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
