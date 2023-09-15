import { useState, useEffect } from "react";

const NameInput = ({
  type,
  id,
  isInvalid,
  value,
  resetBooleanValueHandler,
  resetBoolean,
}) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  useEffect(() => {
    if (enteredNameIsValid && enteredNameTouched) {
      value(enteredName);
    }

    if (resetBoolean === true) {
      setEnteredName("");
      setEnteredNameTouched(false);
      resetBooleanValueHandler(false);
    }
  });

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    setEnteredNameTouched(true);
    isInvalid(e.target.value.trim() === "");
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
    isInvalid(!enteredNameIsValid);
  };

  return (
    <>
      <input
        type={type}
        id={id}
        onBlur={nameInputBlurHandler}
        onChange={nameInputChangeHandler}
        value={enteredName}
      />
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty.</p>
      )}
    </>
  );
};

export default NameInput;
