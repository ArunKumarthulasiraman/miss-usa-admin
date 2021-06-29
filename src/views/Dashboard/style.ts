import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const MainContainer = styled(Grid)`
  background: #e1b2ac;
  height: 100vh;
  overflow: hidden;
`;

export const SideMenu = styled(Grid)`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  && {
    margin: 2% auto;
  }
`;

export const Logo = styled.div`
  /* border: 1px solid red; */
  align-self: center;
  img {
    max-width: 170px;
    max-height: 100px;
  }
`;

export const NavItems = styled.div`
  /* border: 1px solid black; */
  flex: 1;
  margin-top: 40px;
`;

export const LogoutSec = styled.div`
  margin-bottom: 20px;
  color: white;
`;

export const MainContent = styled(Grid)`
  border: 10px solid #e1b2ac;
  background: white;
  border-radius: 20px;
  && {
    padding: 20px;
  }
`;

export const AppHeader = styled(Grid)`
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
`;

export const AppMain = styled(Grid)`
  /* border: 1px solid black; */
`;
