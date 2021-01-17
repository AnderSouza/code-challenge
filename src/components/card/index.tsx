import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import Attendance from "./attendance";
import Patient from "./patient";
import Test from "./test";
import Tooltip from "./tooltip";

const StyledCard = styled.div`
  width: 215px;
  height: 135px;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  border-radius: 6px;
  padding: 16px;
  background-color: white;
  margin: 5px;
  flex-shrink: 0;
  position: relative;
  overflow: initial;
  z-index: 1;
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

const Card = ({
  icon,
  badge,
  amount,
  info,
  tooltip,
}: {
  icon: ReactElement;
  badge: ReactElement;
  amount: number;
  info: string;
  tooltip: { title: string; amount: string; variant: "success" | "error" };
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const toggleShowTooltip = () => setShowTooltip((showTooltip) => !showTooltip);

  const onMouseOverHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    toggleShowTooltip();
  };

  return (
    <StyledCard
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOverHandler}
    >
      <Tooltip
        show={showTooltip}
        title={tooltip.title}
        amount={tooltip.amount}
        variant={tooltip.variant}
      />
      <Top>
        {icon}
        <span className="float-right">{badge}</span>
      </Top>
      <Amount>{amount}</Amount>
      <Info>{info}</Info>
    </StyledCard>
  );
};

Card.Attendance = Attendance;
Card.Patient = Patient;
Card.Test = Test;

export default Card;
