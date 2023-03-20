import styled from "styled-components";
import out from "../../../assets/log-out.svg";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 92px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 32px;
`;

export const ExitLink = styled.a`
  color: ${(props) => props.theme.darkGreenColor};
  font-weight: 400;
  line-height: 20px;
  display: block;
  padding-right: 36px;
  text-decoration: none;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    background-image: url(${out});
    background-repeat: no-repeat;
    top: -1px;
    right: 0;
  }
`;