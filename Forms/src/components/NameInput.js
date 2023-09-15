import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

const NameInput = ({
  type,
  id,
  isInvalid,
  value,
  resetBooleanValueHandler,
  resetBoolean,
}) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim !== "");

  // useEffect(() => {
  //   if (enteredNameIsValid && enteredNameTouched) {
  //     value(enteredName);
  //   }

  //   if (resetBoolean === true) {
  //     setEnteredName("");
  //     setEnteredNameTouched(false);
  //     resetBooleanValueHandler(false);
  //   }
  // });

  return (
    <>
      <input
        type={type}
        id={id}
        onBlur={nameBlurHandler}
        onChange={nameChangedHandler}
        value={enteredName}
      />
      {nameInputHasError && (
        <p className="error-text">Name must not be empty.</p>
      )}
    </>
  );
};

export default NameInput;
