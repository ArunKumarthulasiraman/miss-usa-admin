import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

interface Props {
  data: {
    name: string;
    props: {
      icon: string;
      path: string;
      component: React.FC<{}>;
      exact?: boolean;
    };
  }[];
}

const NavigationRouter = (props: Props) => {
  const { data } = props;
  const currentPath = useLocation().pathname;

  return (
    <div>
      {data.map((item, index) => (
        <NavItemWrapper isSelected={item.props.path === currentPath}>
          <SvgIcon
            key={item.name}
            src={require(`../assets/svg/${item.props.icon}.svg`).default}
            alt="icon"
            isSelected={item.props.path === currentPath}
          />
          <NavLink
            key={index}
            to={item.props.path}
            isSelected={item.props.path === currentPath}
          >
            {item.name}
          </NavLink>
        </NavItemWrapper>
      ))}
    </div>
  );
};

export default NavigationRouter;

// styles

interface SelectedType {
  isSelected?: boolean;
}
export const NavItemWrapper = styled.div<SelectedType>`
  /* border: 1px solid white; */
  height: 35px;
  /* padding: 5px; */
  margin: 15px;
  display: flex;
  align-items: center;

  ${({ isSelected }) =>
    isSelected &&
    css`
      width: 100%;
      height: 40px;
      background: white;
      color: #e1b2ac;
      border-radius: 50px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `}

  &:hover {
    cursor: pointer;
  }
`;

export const NavLink = styled(Link)<SelectedType>`
  text-decoration: none;
  color: ${(props) => (props.isSelected ? "#E48585" : "white")};
`;

export const SvgIcon = styled.img<SelectedType>`
  width: 18px;
  height: 15px;
  margin-right: 10px;
  /* color: ${(props) => (props.isSelected ? "#e1b2ac" : "white")}; */
`;
