import React, { useState } from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-component/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [info, setInfo] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = info;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setInfo({ email: "", password: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput name="email" handleChange={handleChange} type="email" value={info.email} required label="email" />
        <FormInput
          name="password"
          handleChange={handleChange}
          type="password"
          value={info.password}
          required
          label="password"
        />
        <div className="buttons">
          {" "}
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
