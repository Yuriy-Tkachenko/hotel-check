import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.whiteColor};
  padding: 15px;
  width: 100%;
  border: none;
  background: linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  &:hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%);
  }

  &:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%);
  }
`;