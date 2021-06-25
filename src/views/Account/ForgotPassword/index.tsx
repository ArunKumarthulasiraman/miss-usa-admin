import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";

import OTPBOX from "./OTP";

import AccountCard from "../../../components/AccountCard";
import FormTextField from "../../../components/FormTextField";
import { Button } from "../../../styles/styled/Button";

import { MainContainer, Title, FieldWrap, StyledLink } from "../style";

interface Props {}

interface FormInput {
  email: string;
}

const ForgotPassword: React.FC = (props: Props) => {
  const [isOTP, setIsOTP] = useState(false);
  const history = useHistory();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    console.log(data);
    setIsOTP(true);
  };

  const gotoLogin = () => history.push("/");

  return (
    <MainContainer>
      <Title>FORGOT PASSWORD</Title>
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
                  message: "Invalid email",
                },
              }}
              control={control}
              error={errors}
            />
          </FieldWrap>

          <FieldWrap>
            <Button type="submit">Send</Button>
          </FieldWrap>

          {isOTP && (
            <FieldWrap>
              <OTPBOX />
            </FieldWrap>
          )}
          
          <FieldWrap>
            <StyledLink onClick={gotoLogin}>Have an Account ?</StyledLink>
          </FieldWrap>
        </form>
      </AccountCard>
    </MainContainer>
  );
};

export default ForgotPassword;
