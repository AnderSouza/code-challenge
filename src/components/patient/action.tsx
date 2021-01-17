import React from "react";
import styled from "styled-components";

type Variant = "success" | "error";

const StyledCard = styled.div`
  width: 400px;
  height: 135px;
  padding: 16px;
  display: flex;
  border-radius: 6px;
  background-color: white;
  margin: 5px;
  flex-shrink: 0;
  
`;

const Caption = styled.div`
  font-weight: bold;
  font-size: 10px;
  line-height: 14px;
  text-transform: uppercase;
  color: rgba(48, 59, 91, 0.3);
  margin: 10px 0px;
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

const getTestInfo = (test: string, variant: string) => {
  switch (variant) {
    case "success":
      return `COMPLETOU O TESTE: ${test}`;
    case "error":
      return `CANCELOU O TESTE: ${test}`;
    default:
      return;
  }
};

const Patient = ({
  image,
  name,
  test,
  date,
  variant,
}: {
  image: string;
  name: string;
  test: string;
  date: string;
  variant: Variant;
}) => (
  <StyledCard>
    <Pic src={image} />
    <Info>
      <Caption>Paciente:</Caption>
      <BigText>{name}</BigText>
      <TestInfo variant={variant}>{getTestInfo(test, variant)}</TestInfo>
      <Caption>Realizado em: {date}</Caption>
    </Info>
  </StyledCard>
);

export default Patient;
