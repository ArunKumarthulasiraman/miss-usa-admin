import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Button } from "../../../styles/styled/Button";
import SnackBar from "../../../components/SnackBar";

interface Props {}

const OTPBOX = (props: Props) => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [isVerified, setIsVerified] = useState(false);
  const history = useHistory();

  const handleChange = (element: any, index: number) => {
    console.log(element);
    if (isNaN(element.value)) return false;
    // set target element value
    setOtp([...otp.map((item, idx) => (index === idx ? element.value : item))]);
    // focus next box
    if (element.nextSibling) element.nextSibling.focus();
  };

  const handleClear = () => {
    setOtp([...otp.map((item) => (item = ""))]);
  };

  const handleVerify = () => {
    // alert(`Entered OTP : ${otp.join("")}`);
    setIsVerified(true);
  };

  const handleClose = (reason?: string) => {
    if (reason === "clickaway") return;
    history.push("/reset_password");
    setIsVerified(false);
  };

  return (
    <BoxMainContainer>
      <Title>Enter OTP:</Title>
      <BoxWrap>
        {otp.map((item, index) => (
          <Input
            key={index}
            name="otp"
            type="text"
            maxLength={1}
            value={item}
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()}
            autoComplete="off"
            autoFocus={index === 0 ? true : false}
          />
        ))}
      </BoxWrap>
      <ButtonWrap>
        <OtpButton onClick={handleClear}>Clear</OtpButton>
        <OtpButton primary={true} onClick={handleVerify}>
          Verify
        </OtpButton>
      </ButtonWrap>
      {isVerified && (
        <SnackBar
          open={isVerified}
          severity="success"
          message="OTP successfully verified !!"
          onClose={handleClose}
        />
      )}
    </BoxMainContainer>
  );
};

export default OTPBOX;

const BoxMainContainer = styled.div`
  /* border: 1px solid blue; */
`;
const Title = styled.h4`
  color: black;
  font-weight: bold;
`;
const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;
const BoxWrap = FlexCenter;
const ButtonWrap = FlexCenter;
const Input = styled.input`
  width: 20px;
  height: 25px;
  margin: 5px;
  padding: 5px;
  outline: none;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

interface OTPProps {
  primary?: boolean;
}

const OtpButton = styled(Button)<OTPProps>`
  width: 72px;
  padding: 5px;
  margin: 0px 10px;
  font-size: 0.9rem;
  border-radius: 2px;
  background-color: ${(props) => (props.primary ? "#2c2c2c" : "#665959")};
`;
