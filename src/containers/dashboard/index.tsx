import React from "react";
import styled from "styled-components";
import { Button } from "./../../components";
import TestsSection from "./tests-section";
import AttendancesSection from "./attendances-section";
import PatientsSection from "./patients-section";

const Dashboard = styled.div``;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  margin: 10px 0px 5px 0px;
  display: inline-block;
`;

export default () => (
  <Dashboard>
    <Title>Informações Gerais</Title>
    <TestsSection />

    <Title>Histórico de Atendimentos</Title>
    <Button variant="primary">Ver todos</Button>
    <AttendancesSection />

    <Title>Atualizações Importantes</Title>
    <PatientsSection />
  </Dashboard>
);
