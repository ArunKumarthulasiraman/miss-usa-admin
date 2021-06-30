import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";

import AccountCard from "../../../components/AccountCard";
import FormTextField from "../../../components/FormTextField";
import { Button } from "../../../styles/styled/Button";

import { MainContainer, Title, FieldWrap } from "../style";

interface Props {}

interface FormInput {
  email: string;
}

const ForgotPassword: React.FC = (props: Props) => {
  const history = useHistory();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    console.log(data);
    history.push("/otp_verification");
  };

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
              autoFocus
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
        </form>
      </AccountCard>
    </MainContainer>
  );
};

export default ForgotPassword;
