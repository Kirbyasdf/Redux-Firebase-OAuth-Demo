import React, { useState } from "react";

import FormInput from "../form-component/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [info, setInfo] = useState({ displayName: "", email: "", password: "", confirmPassword: "" });
  const { displayName, email, password, confirmPassword } = info;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords Do Not Match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      setInfo({ displayName: "", email: "", password: "", confirmPassword: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          onChange={handleChange}
        ></FormInput>
        <FormInput type="text" name="email" label="Email" value={email} onChange={handleChange}></FormInput>
        <FormInput type="text" name="password" label="Password" value={password} onChange={handleChange}></FormInput>
        <FormInput
          type="text"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
        ></FormInput>
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
