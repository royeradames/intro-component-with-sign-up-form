import React from "react";
import "./styles/main.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// images
import errorIcon from "./images/icon-error.svg";

// interface
interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// schema
const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

// data for form
const formData = [
  {
    name: "First Name",
    register: "firstName",
    errorMessage: "First Name cannot be empty",
  },
  {
    name: "Last Name",
    register: "lastName",
    errorMessage: "Last Name cannot be empty",
  },
  {
    name: "Email",
    register: "email",
    errorMessage: "Looks like this is not an email",
  },
  {
    name: "Password",
    register: "password",
    errorMessage: "Password cannot be empty",
  },
];

// app
function App() {
  // apply schema to form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // generate inputs
  const formInputs = () => {
    return formData.map((data) => {
      return (
        <div className="sign-up-form__form-input-container">
          <input
            className={`sign-up-form__form-input ${
              errors[data.register]?.message
                ? "sign-up-form__form-input--error"
                : ""
            }`}
            aria-label={data.name}
            {...register(data.register)}
            placeholder={data.name}
          />
          {errors[data.register]?.message ? (
            <>
              <p className="sign-up-form__form-error-icon">
                <img src={errorIcon} alt="Red error icon" />
              </p>
              <p className="sign-up-form__form-error-message">
                {data.errorMessage}
              </p>
            </>
          ) : (
            ""
          )}
        </div>
      );
    });
  };

  // handle form data
  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <main className="sign-up-form">
      <div className="sign-up-form__call-to-action">
        <h1 className="sign-up-form__heading" id="heading">
          Learn to code by watching others
        </h1>
        <p className="sign-up-form__body">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="sign-up-form__listing">
        <p className="sign-up-form__banner">
          Try it free 7 days then $20/mo. thereafter
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form__form">
          {
            // render the inputs
            formInputs()
          }
          <button className="sign-up-form__btn">CLAIM YOUR FREE TRIAL</button>
          <p className="sign-up-form__terms">
            By clicking the button, you are agreeing to our
            <a href="heading" className="sign-up-form__terms--link">
              <span> Terms and Services</span>
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}

export default App;
