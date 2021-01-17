import React from "react";
import { Button } from "./../index";
import styled from "styled-components";
import Action from "./action";

type Variant = "success" | "error";

const Card = styled.div`
  display: flex;
`;

const PatientCard = styled.div`
  width: 350px;
  height: 100px;
  padding: 5px 16px;
  border: solid lightgrey 1px;
  border-radius: 6px 0px 0px 6px;
  background-color: white;
  margin: 5px;
  display: flex;

  align-items: center;
`;

const Caption = styled.div`
  font-weight: bold;
  font-size: 10px;
  line-height: 14px;
  text-transform: uppercase;
  color: rgba(48, 59, 91, 0.3);
  margin: 0px 0px 5px 0px;
`;

const Info = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #303b5b;
`;

const Pic = styled.img`
  margin-right: 10px;
`;

const BigText = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #303b5b;
  padding-bottom: 5px;
`;

const TestInfo = styled.div<{ variant: string }>`
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => {
    switch (props.variant) {
      case "success":
        return "#1EAC79";
      case "error":
        return "#EF0C35";
      default:
        return;
    }
  }};
`;

const TestsCard = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  padding: 8px;
`;

const Amount = styled.div`
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  padding: 0px 10px;
`;

const Message = styled.div`
  padding: 0px 10px;
  font-size: 14px;
  line-height: 20px;
`;

const Actions = styled.div`
  padding: 15px;
`;

const Patient = ({
  image,
  name,
  tests,
  completed,
  pending,
  cancelled,
  variant,
}: {
  image: string;
  name: string;
  tests: string;
  completed: number;
  pending: number;
  cancelled: number;
  variant: Variant;
}) => (
  <Card>
    <PatientCard>
      <Pic src={image} />
      <Info>
        <BigText>{name}</BigText>
        <Caption>Diagnóstico</Caption>
        <TestInfo variant={variant}>{tests}</TestInfo>
      </Info>
    </PatientCard>
    <TestsCard color="limegreen">
      <Amount>{completed}</Amount>
      <Message>Testes realizados</Message>{" "}
    </TestsCard>
    <TestsCard color="red">
      <Amount>{cancelled}</Amount>
      <Message>Testes cancelados</Message>{" "}
    </TestsCard>
    <TestsCard color="orange">
      <Amount>{pending}</Amount>
      <Message>Testes pendentes</Message>{" "}
    </TestsCard>
    <Actions>
      <Button style={{ margin: "5px" }} variant="secondary">
        Enviar Novo Teste
      </Button>
      <Button style={{ margin: "5px" }} variant="primary">
        Alterar Cadastro
      </Button>
    </Actions>
  </Card>
);

Patient.Action = Action;

export default Patient;
