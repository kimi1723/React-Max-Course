import { useState } from "react";
import Input from "./Input";

const EmailInput = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailInputIsInvalid, setEmailInputIsInvalid] = useState(false);
  const emailInputChangeHandler = (e) => {};

  const emailInputBlurHandler = () => {};

  return (
    <>
      <Input
        usetype="text"
        id="email"
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
