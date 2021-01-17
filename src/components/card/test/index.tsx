import React, { ReactElement } from "react";
import styled from "styled-components";
import cardBackground from "./../../../assets/img/card-background.svg";
import { Button } from "./../../../components";

const Card = styled.div`
  width: 340px;
  height: 310px;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  border-radius: 6px;
  background-color: white;
  margin: 5px;
  flex-shrink: 0;
`;

const Image = styled.div`
  width: 100%;
  height: 180px;
  line-height: 180px;
  background-image: url(${cardBackground});
  background-size: cover;
  text-align: center;
  border-bottom: none;
  border-radius: 6px 6px 0px 0px;
`;

const Info = styled.div`
  padding: 15px;
  border-radius: 0px 0px 0px 0px;
`;

const BigText = styled.div`
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;
  color: #303b5b;
`;

const Caption = styled.div`
  font-weight: bold;
  font-size: 10px;
  line-height: 14px;
  text-transform: uppercase;
  color: rgba(48, 59, 91, 0.3);
  margin: 10px 0px;
`;

const Options = styled.div``;

const Amount = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #303b5b;
  padding-top: 10px;
  vertical-align: sub;
`;

export default ({
  icon,
  name,
  amount,
}: {
  icon: ReactElement;
  name: string;
  amount: number;
}) => (
  <Card>
    <Image>{icon}</Image>
    <Info>
      <BigText>{name}</BigText>
      <Caption>Licenças disponíveis:</Caption>
      <Options>
        <Amount>{amount}</Amount>
        <Button variant="primary">Comprar mais</Button>
      </Options>
    </Info>
  </Card>
);
