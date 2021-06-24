import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";

import AccountCard from "../../../components/AccountCard";
import FormTextField from "../../../components/FormTextField";
import { Button } from "../../../styles/styled/Button";

import { MainContainer, Title, FieldWrap, StyledLink } from "../style";

interface Props {}

interface FormInput {
  newPassword: string;
  confirmPassword: string;
}

const ResetPassword: React.FC = (props: Props) => {
  const history = useHistory();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>();

  const validate = {
    password: "password must be alphanumeric",
    passLength: "Required password length 6 to 15",
  };

  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    if (data.newPassword === data.confirmPassword) {
      console.log(data);
    } else {
      alert("Password must be same");
    }
  };
  
  const gotoLogin = () => history.push("/");

  return (
    <MainContainer>
      <Title>CHANGE PASSWORD</Title>
      <AccountCard>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldWrap>
            <FormTextField
              name="newPassword"
              label="New Password"
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
            <FormTextField
              name="confirmPassword"
              label="Confirm Password"
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
            <Button type="submit">Submit</Button>
          </FieldWrap>

          <FieldWrap>
            <StyledLink onClick={gotoLogin}>Have an Account ?</StyledLink>
          </FieldWrap>
        </form>
      </AccountCard>
    </MainContainer>
  );
};

export default ResetPassword;
