import React, { ReactElement } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 275px;
  height: 135px;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  border-radius: 6px;
  padding: 16px;
  background-color: white;
  margin: 5px;
  flex-shrink: 0;
`;

const Top = styled.div``;

const Amount = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #303b5b;
  padding-top: 10px;
`;

const Info = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #303b5b;
`;

export default ({
  icon,
  badge,
  amount,
  info,
}: {
  icon: ReactElement;
  badge: ReactElement;
  amount: number;
  info: string;
}) => (
  <Card>
    <Top>
      {icon}
      <span className="float-right">{badge}</span>
    </Top>
    <Amount>{amount}</Amount>
    <Info>{info}</Info>
  </Card>
);
