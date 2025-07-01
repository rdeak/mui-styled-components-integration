import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 100%;
  min-height: 500px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.patterns.checker};
`;
