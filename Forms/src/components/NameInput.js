import { useState } from "react";

const NameInput = ({ type, id, isInvalid }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

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
