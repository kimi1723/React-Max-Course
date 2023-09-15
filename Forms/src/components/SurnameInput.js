import { useState, useEffect } from "react";

const SurnameInput = ({ type, id, isInvalid, value }) => {
  const [enteredSurname, setEnteredSurname] = useState("");
  const [enteredSurnameTouched, setEnteredSurnameTouched] = useState(false);

  const enteredSurnameIsValid = enteredSurname.trim() !== "";
  const surnameInputIsInvalid = !enteredSurnameIsValid && enteredSurnameTouched;

  useEffect(() => {
    if (enteredSurnameIsValid && enteredSurnameTouched) {
      value(enteredSurname);
    }
  });

  const surnameInputChangeHandler = (e) => {
    setEnteredSurname(e.target.value);
    setEnteredSurnameTouched(true);
    isInvalid(e.target.value.trim() === "");
  };

  const surnameInputBlurHandler = () => {
    setEnteredSurnameTouched(true);
    isInvalid(!enteredSurnameIsValid);
  };

  return (
    <>
      <input
        type={type}
        id={id}
        onBlur={surnameInputBlurHandler}
        onChange={surnameInputChangeHandler}
        value={enteredSurname}
      />
      {surnameInputIsInvalid && (
        <p className="error-text">Surname must not be empty.</p>
      )}
    </>
  );
};

export default SurnameInput;
