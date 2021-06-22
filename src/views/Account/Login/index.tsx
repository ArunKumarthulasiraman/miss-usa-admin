import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import AccountCard from "../../../components/AccountCard";
import FormTextField from "../../../components/FormTextField";

import { SubmitButton } from "../../../styles/styled/SubmitButton";

import { MainContainer, Title, Form, FieldWrap } from "./style";

interface Props {}

interface FormInput {
  email: string;
  password: string;
}

const Login: React.FC<{}> = (props: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>();

  const otherProps = { control, error: errors };

  console.log("error : ", errors);

  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    console.log("Submitted");
    console.log(data);
  };
  return (
    <MainContainer>
      <Title>SIGN IN</Title>
      <AccountCard>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldWrap>
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
              {...(errors.email && errors.email.message)}
              hasValidation
              {...otherProps}
            />
          </FieldWrap>
          <FieldWrap>
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
          </FieldWrap>
          <FieldWrap>
            <SubmitButton type="submit">Log In</SubmitButton>
          </FieldWrap>
        </form>
      </AccountCard>
    </MainContainer>
  );
};

export default Login;
