import { useState } from "react";
import EmailInput from "./EmailInput";
import NameInput from "./NameInput";

const BasicForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    // setEnteredName("");
    // setEnteredNameTouched(false);
  };
  const [nameInputIsInvalid, setNameInputIsInvalid] = useState(false);
  const [emailInputIsInvalid, setEmailInputIsInvalid] = useState(false);

  const checkNameValidation = (isInvalid) => {
    setNameInputIsInvalid(isInvalid);
  };

  const checkEmailValidation = (isInvalid) => {
    setEmailInputIsInvalid(isInvalid);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <NameInput type="text" id="name" isInvalid={checkNameValidation} />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <EmailInput type="email" id="email" isInvalid={checkEmailValidation} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
