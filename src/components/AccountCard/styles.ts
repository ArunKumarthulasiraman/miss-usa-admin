import styled from "styled-components";

interface CardMainProps {
  margin?: string;
}

export const CardMain = styled.div<CardMainProps>`
  width: 400px;
  padding: 20px;
  /* margin: ${(props) => props.margin} auto; */
  background: rgba(225, 178, 172, 0.8);
  border-radius: 20px;
`;

export const Logo = styled.div`
  text-align: center;
  img {
    margin: 30px auto;
    width: 200px;
    height: 70px;
  }
`;
