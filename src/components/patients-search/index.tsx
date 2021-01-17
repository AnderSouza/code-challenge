import React, { ReactElement } from "react";
import { Search } from "./../index";
import styled from "styled-components";

const PatientsSearch = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: white;
  padding: 10px 20px;
`;

const Top = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  background-color: white;
  padding: 10px 0px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: rgba(86, 84, 104, 0.6);
  margin-right: 8px;
`;

export default ({
  total,
  children,
}: {
  total: number;
  children: ReactElement | ReactElement[];
}) => (
  <PatientsSearch>
    <Top>
      <Title>Lista de Pacientes ({total})</Title>
      <Search placeholder="Buscar paciente..."></Search>
    </Top>
    <Body>{children}</Body>
  </PatientsSearch>
);
