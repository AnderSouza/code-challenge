import React from "react";
import styled from "styled-components";

type Variant = "success" | "error";

const Tooltip = styled.div<{ show: boolean }>`
  min-width: 130px;
  height: 70px;
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: absolute;
  display: ${(props) => (props.show ? "block" : "none")};
  right: -5px;
  bottom: 110px;
  padding: 10px;
  z-index: 2;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  color: #303b5a;
`;

const Amount = styled.div<{ variant: Variant }>`
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  color: ${(props) => {
    switch (props.variant) {
      case "success":
        return "limegreen";
      case "error":
        return "red";
      default:
        return "limegreen";
    }
  }};
`;

export default ({
  title,
  amount,
  variant,
  show,
}: {
  title: string;
  amount: string;
  variant: Variant;
  show: boolean;
}) => (
  <Tooltip show={show}>
    <Title>{title}</Title>
    <Amount variant={variant}>{amount}</Amount>
  </Tooltip>
);
