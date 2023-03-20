import styled from "styled-components";

const Input = styled.input`
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.lightgreyColor};
  border-radius: 4px;
  padding: 15px;
  box-sizing: border-box;
`;

export default Input;