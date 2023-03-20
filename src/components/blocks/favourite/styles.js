import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 300px;
  padding: ${(props) => props.theme.padding};
  box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
`;

export const RatingButton = styled.button`
  border: 1px solid #41522E;
  border-radius: 4px;
  padding: 4px 30px 4px 8px;
`;