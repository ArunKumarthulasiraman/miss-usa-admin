import React from "react";
import { useForm } from "react-hook-form";

import AccountCard from "../../../components/AccountCard";
import FormTextField from "../../../components/FormTextField";

interface Props {}

const Login = (props: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const otherProps = { control, errors };

  const onSubmit = () => {
    console.log("Submitted");
  };
  return (
    <div>
      <h1>Login</h1>
      <AccountCard>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormTextField
            name="email"
            label="Email"
            placeholder="abc@gmail.com"
            rules={{
              required: "Please enter your email",
              pattern: {
                value: /$^|.+@.+../,
                message: "Invalid email",
              },
            }}
            {...otherProps}
          />
          <FormTextField
            name="password"
            label="Password"
            type="password"
            placeholder="*********"
            rules={{
              required: "Please enter password",
              minLength: {
                value: 6,
                messaage: "Password must contain 6 to 10 characters",
              },
              maxLength: {
                value: 10,
                messaage: "Password must contain 6 to 10 characters",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/,
                message: "Invalid password",
              },
            }}
            {...otherProps}
          />
        </form>
      </AccountCard>
    </div>
  );
};

export default Login;
