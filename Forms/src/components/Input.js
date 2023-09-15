import useInput from "../hooks/use-input";

const InputBlock = ({ validationFunction, label, type, id, errorText }) => {
  const {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  } = useInput(validationFunction);

  const inputClasses = hasError ? "form-control invalid" : "form-control";

  return (
    <>
      <div className={inputClasses}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          onBlur={inputBlurHandler}
          onChange={valueChangeHandler}
          value={enteredValue}
        />
        {hasError && <p className="error-text">{errorText}</p>}
      </div>
    </>
  );
};

export default InputBlock;
