import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { MainContainer, Title, FieldWrap } from "../style";
import { Button } from "../../../styles/styled/Button";
import SnackBar from "../../../components/SnackBar";
import AccountCard from "../../../components/AccountCard";

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

  // const handleClear = () => {
  //   setOtp([...otp.map((item) => (item = ""))]);
  // };

  const handleVerify = () => {
    // alert(`Entered OTP : ${otp.join("")}`);
    if (otp.join("") !== "") {
      setIsVerified(true);
    } else {
      alert("Please enter OTP");
    }
  };

  const handleClose = (reason?: string) => {
    if (reason === "clickaway") return;
    history.push("/reset_password");
    setIsVerified(false);
  };

  return (
    <>
      <MainContainer>
        <Title>OTP VERIFICATION</Title>
        <AccountCard>
          <FieldWrap>
            <Heading>OTP</Heading>
          </FieldWrap>
          <HelperText>Verify OTP with your registered mail</HelperText>
          <FieldWrap>
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
          </FieldWrap>
          <FieldWrap>
            <Button type="submit" onClick={handleVerify}>
              Submit
            </Button>
          </FieldWrap>
        </AccountCard>
      </MainContainer>
      {isVerified && (
        <SnackBar
          open={isVerified}
          severity="success"
          message="OTP successfully verified !!"
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default OTPBOX;

// styles
const Heading = styled.h3`
  color: white;
  font-weight: bold;
`;
const FlexCenter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BoxWrap = FlexCenter;

const HelperText = styled.p`
  color: white;
  text-align: center;
  font-size: 0.9rem;
`;
const Input = styled.input`
  width: 50px;
  margin: 5px;
  padding: 5px 0px;
  outline: none;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
`;
