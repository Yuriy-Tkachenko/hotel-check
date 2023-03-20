import styled from "styled-components";
import { Title } from "../../styled/styled";
import arrow from "../../../assets/arrow.svg";

export const Wrapper = styled.div`
  width: 664px;
  height: 100%;
  padding: 48px 32px;
  box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  box-sizing: border-box;
`;

export const StyledTitle = styled(Title)`
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  padding-right: 30px;
  margin-right: 20px;
  display: inline-block;

  &:before {
    content: '';
    position: absolute;
    width: 11px;
    height: 20px;
    top: 9px;
    right: 0;
    background-image: url(${arrow});
  }
`;

export const Location = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
`;

export const Date = styled.span`
  display: inline-block;
  font-weight: 400;
  font-size: 24px;
  color: ${(props) => props.theme.darkGreenColor};
`;

export const FavouriteValue = styled.span`
  font-weight: 300;
  font-size: 17px;
  line-height: 22px;
  display: block;
  margin: 21px 0 12px 0;
`;