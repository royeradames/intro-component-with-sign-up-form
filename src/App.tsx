import React from "react";
import "./styles/main.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// interface
interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// app
function App() {
  // handle form data
  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <main className="sign-up-form">
      <h1 className="sign-up-form__heading">
        Learn to code by watching others
      </h1>
      <p className="sign-up-form__body">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
      <div className="sign-up-form__banner">
        Try it free 7 days then $20/mo. thereafter
      </div>
      <form className="sign-up-form__form">
        {
          // render the inputs
          // formInputs()
        }

        <button className="sign-up-form__btn">CLAIM YOUR FREE TRIAL</button>
        <p className="sign-up-form__terms">
          By clicking the button, you are agreeing to our{" "}
          <a href="#">
            <span className="sign-up-form__terms--link">
              Terms and Services
            </span>
          </a>
        </p>
      </form>
    </main>
  );
}

export default App;
