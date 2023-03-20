import styled from "styled-components";

export const Wrapper = styled.section`
  height: 100%;
  background-color: ${(props) => props.theme.whiteGreyColor};
  margin-bottom: 200px;
`;

export const Container = styled.div`
  width: 1048px;
  margin: 0 auto;
  padding-bottom: 100px;
  display: flex;
`;

export const LeftColumn = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => props.theme.indent};
`;

export const RightColumn = styled.div`

`;