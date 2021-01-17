import React from "react";
import { Card, Row, Section } from "../../components";
import { Icon } from "@iconify/react";
import brainSvg from "@iconify-icons/uil/brain";
import hexagonsSvg from "@iconify-icons/mdi/hexagon-multiple-outline";

const BrainIcon = () => (
  <Icon
    style={{
      fontSize: "80px",
      color: "#0094FF",
      verticalAlign: "middle",
    }}
    icon={brainSvg}
  />
);

const HexagonIcon = ({ big }: { big?: boolean }) => (
  <Icon
    style={{
      fontSize: big ? "100px" : "80px",
      color: "#EB00FF",
      verticalAlign: "middle",
    }}
    icon={hexagonsSvg}
  />
);

export default () => (
  <Row scroll>
    <Section color="white">
      <Card.Attendance
        key={1}
        icon={<BrainIcon />}
        name="Renata Augusto Ferreira"
        test="TDAH CAB ADHD"
        date="20/10/2023"
      />
      <Card.Attendance
        key={2}
        icon={<HexagonIcon />}
        name="Renata Augusto Ferreira"
        test="Autismo"
        date="20/09/2023"
      />
      <Card.Attendance
        key={3}
        icon={<BrainIcon />}
        name="Renata Augusto Ferreira"
        test="TDAH CAB ADHD"
        date="20/10/2023"
      />
      <Card.Attendance
        key={4}
        icon={<HexagonIcon />}
        name="Renata Augusto Ferreira"
        test="Autismo"
        date="20/09/2023"
      />
    </Section>
    <Section color="white">
      <Card.Test icon={<HexagonIcon big />} name="Autismo" amount={13} />
    </Section>
  </Row>
);
