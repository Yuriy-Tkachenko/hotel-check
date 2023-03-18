import styled from "styled-components";
import { Label } from "../../styled/styled";
import { Input } from "../../styled/styled";
import backgroundImage1x from "../../../assets/main-bg@1x.jpg";
import backgroundImage2x from "../../../assets/main-bg@2x.jpg";

export const Wrapper = styled.div`
  background-image: url(${backgroundImage1x});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(min-resolution: 2dppx) {
    background-image: url(${backgroundImage2x});
  }
`;

export const UserForm = styled.form`
  background-color: ${(props) => props.theme.whiteColor};
  border-radius: 16px;
  box-sizing: border-box;
  padding: 32px;
  width: 409px;
  height: 382px;
`;

export const StyledLabel = styled(Label)`
  box-sizing: border-box;
  min-width: 345px;
  min-width: 300px;
  margin-bottom: 7px;
  display: inline-block;
`;

export const StyledInput = styled(Input)`
  box-sizing: border-box;
  min-width: 345px;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.lightgreyColor};
  border-radius: 4px;
  padding: 15px;
`;
