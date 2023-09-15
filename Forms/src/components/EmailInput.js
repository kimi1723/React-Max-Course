import { useState, useEffect } from "react";

const EmailInput = ({ type, id, isInvalid }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const regEx = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi);

  const enteredEmailIsValid = regEx.test(enteredEmail);
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  useEffect(() => {
    isInvalid(emailInputIsInvalid);
  });

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    setEnteredEmailTouched(true);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
    isInvalid(emailInputIsInvalid);
  };

  return (
    <>
      <input
        type={type}
        id={id}
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail}
      />
      {emailInputIsInvalid && (
        <p className="error-text">E-mail must be valid.</p>
      )}
    </>
  );
};

export default EmailInput;
