import { useState } from "react";
import EmailInput from "./EmailInput";
import NameInput from "./NameInput";
import SurnameInput from "./SurnameInput";

const BasicForm = (props) => {
  let nameValue, surnameValue, emailValue;

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name: nameValue,
      surname: surnameValue,
      email: emailValue,
    };

    console.log(`Form subbmited with this particular data: 
    Name: ${data.name}
    Surname: ${data.surname}
    E-mail: ${data.email}`);
  };

  const [nameInputIsInvalid, setNameInputIsInvalid] = useState(false);
  const [emailInputIsInvalid, setEmailInputIsInvalid] = useState(false);
  const [surnameInputIsInvalid, setSurnameInputIsInvalid] = useState(false);

  const checkNameValidation = (isInvalid) => {
    setNameInputIsInvalid(isInvalid);
  };

  const checkSurnameValidation = (isInvalid) => {
    setSurnameInputIsInvalid(isInvalid);
  };

  const checkEmailValidation = (isInvalid) => {
    setEmailInputIsInvalid(isInvalid);
  };

  const getNameValue = (value) => {
    nameValue = value;
  };

  const getSurnameValue = (value) => {
    surnameValue = value;
  };

  const getEmailValue = (value) => {
    emailValue = value;
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const surnameInputClasses = surnameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <NameInput
            type="text"
            id="name"
            isInvalid={checkNameValidation}
            value={getNameValue}
          />
        </div>
        <div className={surnameInputClasses}>
          <label htmlFor="surname">Last Name</label>
          <SurnameInput
            type="text"
            id="surname"
            isInvalid={checkSurnameValidation}
            value={getSurnameValue}
          />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <EmailInput
          type="email"
          id="email"
          isInvalid={checkEmailValidation}
          value={getEmailValue}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
