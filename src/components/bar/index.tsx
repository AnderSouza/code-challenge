import React from "react";
import styled from "styled-components";
import Search from "../search";
import Options from "./options";

const Bar = styled.div`
  height: 70px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 30px 30px 0px 0px;
  padding: 15px 32px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
`;

export default () => (
  <Bar>
    <Search placeholder="Busca..." />
    <Options />
  </Bar>
);
