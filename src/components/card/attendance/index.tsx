import React, { ReactElement } from "react";
import styled from "styled-components";
import cardBackground from "./../../../assets/img/card-background.svg";

const Card = styled.div`
  width: 240px;
  height: 290px;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  border-radius: 6px;
  background-color: white;
  margin: 15px 5px;
  flex-shrink: 0;
`;

const Image = styled.div`
  width: 100%;
  height: 130px;
  line-height: 130px;
  background-image: url(${cardBackground});
  text-align: center;
  border: solid #ddd 1px;
  border-bottom: none;
  border-radius: 6px 6px 0px 0px;
`;

const Info = styled.div`
  padding: 15px;
  border: solid #ddd 1px;
  border-radius: 0px 0px 0px 0px;
`;

const Caption = styled.div`
  font-weight: bold;
  font-size: 10px;
  line-height: 14px;
  text-transform: uppercase;
  color: rgba(48, 59, 91, 0.3);
  margin: 10px 0px;
`;

const BigText = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #303b5b;
`;

const SmallText = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #303b5b;
`;

export default ({
  icon,
  name,
  test,
  date,
}: {
  icon: ReactElement;
  name: string;
  test: string;
  date: string;
}) => (
  <Card>
    <Image>{icon}</Image>
    <Info>
      <BigText>{name}</BigText>
      <Caption>Teste realizado</Caption>
      <SmallText>{test}</SmallText>
      <Caption>Realizado em:</Caption>
      <SmallText>{date}</SmallText>
    </Info>
  </Card>
);
