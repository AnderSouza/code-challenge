import React from "react";
import { Row } from "./../../components";

import Attendances from "./attendances";
import Patients from "./patients";
import styled from "styled-components";

const Wrapper = styled.div``;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  margin: 10px 0px 5px 0px;
  display: inline-block;
`;

export default () => (
  <Wrapper>
    <Title>Atualizações de Pacientes</Title>
    <Row scroll>
      <Attendances />
    </Row>
    <Title>Todos os pacientes</Title>
    <Row scroll>
      <Patients />
    </Row>
  </Wrapper>
);
