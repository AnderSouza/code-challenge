import React, { ReactElement } from "react";
import styled from "styled-components";

const Main = styled.div`
  border-radius: 30px;
  background-color: #eff2f9;
  flex: 0 0 82%;
  max-width: calc(82% - 40px);
  min-height: calc(100vh - 60px);
  margin: 30px 20px 30px 0px;
`;

export default ({ children }: { children: ReactElement | ReactElement[] }) => (
  <Main>{children}</Main>
);
