import { useState, useEffect } from "react";

const useInput = (validateValue, getValue, resetValue, resetResetBoolean) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
    setIsTouched(true);
  };

  useEffect(() => {
    if (valueIsValid) {
      getValue(enteredValue);
    } else {
      getValue(undefined);
    }

    if (resetValue && valueIsValid) {
      resetResetBoolean();
      reset();
    }
  }, [valueIsValid, enteredValue, resetValue]);

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

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
