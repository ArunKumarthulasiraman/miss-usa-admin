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
    margin: 20px auto;
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
export const MainContent = styled(Grid)`
  /* border: 1px solid black; */
  background: white;
  border-radius: 30px;
  && {
    /* margin: 10px; */
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
