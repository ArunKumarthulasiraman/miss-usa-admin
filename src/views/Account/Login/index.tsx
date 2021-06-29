import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";

import AccountCard from "../../../components/AccountCard";
import FormTextField from "../../../components/FormTextField";
import SnackBar from "../../../components/SnackBar";
import { Button } from "../../../styles/styled/Button";

import { CommonRoute } from "../../../config/routes";

import { MainContainer, Title, FieldWrap, StyledLink } from "../style";

interface Props {}

interface FormInput {
  email: string;
  password: string;
}

const Login: React.FC = (props: Props) => {
  const [response, setResponse] = useState<boolean>(false);
  const history = useHistory();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>();

  // console.log("error : ", errors);
  const validate = {
    email: "Invalid email",
    password: "password must be alphanumeric",
    passLength: "Required password length 6 to 15",
  };

  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    console.log(data);
    // alert(JSON.stringify(data));
    setResponse(true);
  };

  const gotoForgotPassword = () => history.push("/forgot_password");

  const handleDlgClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") return;
    history.push(CommonRoute.dashboard.main);
    setResponse(false);
  };

  return (
    <>
      <MainContainer>
        <Title>SIGN IN</Title>
        <AccountCard>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldWrap>
              <FormTextField
                name="email"
                label="Email"
                placeholder="admin123@gmail.com"
                rules={{
                  required: "please enter your email",
                  pattern: {
                    value: /$^|.+@.+../,
                    message: validate.email,
                  },
                }}
                control={control}
                error={errors}
              />
            </FieldWrap>
            <FieldWrap>
              <FormTextField
                name="password"
                label="Password"
                type="password"
                placeholder="*********"
                rules={{
                  required: "please enter your password",
                  minLength: {
                    value: 6,
                    message: validate.passLength,
                  },
                  maxLength: {
                    value: 15,
                    message: validate.passLength,
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/,
                    message: validate.password,
                  },
                }}
                control={control}
                error={errors}
              />
            </FieldWrap>

            <FieldWrap>
              <Button type="submit">Log In</Button>
            </FieldWrap>
            <FieldWrap>
              <StyledLink onClick={gotoForgotPassword}>
                Forgot Password ?
              </StyledLink>
            </FieldWrap>
          </form>
        </AccountCard>
      </MainContainer>
      {response && (
        <SnackBar
          open={response}
          severity="success"
          message="Login Successfull"
          onClose={handleDlgClose}
        />
      )}
    </>
  );
};

export default Login;
