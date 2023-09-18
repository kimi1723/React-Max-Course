import { useState } from "react";
import InputBlock from "./InputBlock";

const BasicForm = () => {
  const [resetBoolean, setResetBoolean] = useState(false);
  const [nameValue, setNameValue] = useState(undefined);
  const [emailValue, setEmailValue] = useState(undefined);
  const [surnameValue, setSurnameValue] = useState(undefined);

  let formIsInvalid =
    nameValue === undefined ||
    surnameValue === undefined ||
    emailValue === undefined;

  const getNameValue = (e) => {
    setNameValue(e);
  };

  const getSurnameValue = (e) => {
    setSurnameValue(e);
  };

  const getEmailValue = (e) => {
    setEmailValue(e);
  };

  const resetBooleanHandler = () => {
    setResetBoolean(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (formIsInvalid) return;

    const data = {
      name: nameValue,
      surname: surnameValue,
      email: emailValue,
    };

    console.log(`Form subbmited with this particular data:
      Name: ${data.name}
      Surname: ${data.surname}
      E-mail: ${data.email}`);

    setResetBoolean(true);
  };

  return (
    <form method="post" onSubmit={submitHandler}>
      <div className="control-group">
        <InputBlock
          validationFunction={(nameValue) => nameValue.trim() !== ""}
          label="First name"
          type="text"
          id="name"
          errorText={"Name must not be empty."}
          getValue={getNameValue}
          resetValue={resetBoolean}
          resetResetBoolean={resetBooleanHandler}
        />

        <InputBlock
          validationFunction={(surnameValue) => surnameValue.trim() !== ""}
          label="Surname"
          type="text"
          id="surname"
          errorText={"Surname must not be empty."}
          getValue={getSurnameValue}
          resetValue={resetBoolean}
          resetResetBoolean={resetBooleanHandler}
        />
      </div>
      <InputBlock
        validationFunction={(emailValue) => {
          const regEx = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi);

          const emailIsValid = regEx.test(emailValue);

          return emailIsValid;
        }}
        label="E-mail address"
        type="email"
        id="email"
        errorText={"Please enter a valid e-mail address."}
        getValue={getEmailValue}
        resetValue={resetBoolean}
        resetResetBoolean={resetBooleanHandler}
      />

      <div className="form-actions">
        <button type="submit" disabled={formIsInvalid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
