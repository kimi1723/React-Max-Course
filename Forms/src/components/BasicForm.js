import InputBlock from "./Input";
import useInput from "../hooks/use-input";

const BasicForm = () => {
  let nameValue, surnameValue, emailValue;
  // const { reset } = useInput();

  const getNameValue = (e) => {
    console.log(e + "  ez");
    nameValue = e;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(nameValue);

    if (
      nameValue === undefined ||
      surnameValue === undefined ||
      emailValue === undefined
    )
      return;

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

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <InputBlock
          validationFunction={(nameValue) => nameValue.trim() !== ""}
          label="First name"
          type="text"
          id="name"
          errorText={"Name must not be empty."}
          getValue={getNameValue}
        />

        <InputBlock
          validationFunction={(surnameValue) => surnameValue.trim() !== ""}
          label="Surname"
          type="text"
          id="surname"
          errorText={"Surname must not be empty."}
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
      />

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
