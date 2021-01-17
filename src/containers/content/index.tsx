import React, { ReactElement } from "react";
import styled from "styled-components";

const Content = styled.div`
  border-radius: 30px;
  background-color: #eff2f9;
  border-radius: 30px;
  padding: 10px 18px;
  
`;

export default ({ children }: { children: ReactElement | ReactElement[] }) => (
  <Content>{children}</Content>
);
