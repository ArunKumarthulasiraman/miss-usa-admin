import styled from "styled-components";
import AccountBg from "../../assets/images/AccountBg.png";

export const AccountMain = styled.div`
  background: url(${AccountBg}) no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const MainContainer = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  color: #ffffff;
`;

export const FieldWrap = styled.div`
  width: 70%;
  margin: 20px auto;
  padding: 10px 0px;
`;

export const StyledLink = styled.div`
  display: block;
  text-decoration: none;
  color: black;
  text-align: center;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;
