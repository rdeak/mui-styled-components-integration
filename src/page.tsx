import styled from "styled-components";
import Box from "@mui/material/Box";

export const Page = styled(Box)`
  margin: 16px 0;
  color: ${({ theme }) => theme.patterns.checker};
  background-image: url("/images/rocket.jpg");
  background-repeat: no-repeat;
  background-position: center;
`;
