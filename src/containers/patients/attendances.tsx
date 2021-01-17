import React from "react";
import { Card, Row, Section } from "./../../components";
import { Icon } from "@iconify/react";
import brainSvg from "@iconify-icons/uil/brain";
import hexagonsSvg from "@iconify-icons/mdi/hexagon-multiple-outline";

const BrainIcon = (
  <Icon
    style={{
      fontSize: "80px",
      color: "#0094FF",
      verticalAlign: "middle",
    }}
    icon={brainSvg}
  />
);

const HexagonIcon = (
  <Icon
    style={{
      fontSize: "80px",
      color: "#EB00FF",
      verticalAlign: "middle",
    }}
    icon={hexagonsSvg}
  />
);

const generateCards = (attendances: Attendance[]) =>
  attendances.map((attendance: Attendance, index: number) => (
    <Card.Attendance
      key={index + 1}
      icon={attendance.icon}
      name={attendance.name}
      test={attendance.test}
      date={attendance.date}
    />
  ));

type Attendance = {
  name: string;
  test: string;
  date: string;
  icon: JSX.Element;
};

const attendances = [
  {
    name: "Renata Augusto Ferreira",
    test: "TDAH CAB ADHD",
    date: "20/10/2023",
    icon: BrainIcon,
  },
  {
    name: "Renata Augusto Ferreira",
    test: "Autismo",
    date: "20/09/2023",
    icon: HexagonIcon,
  },
  {
    name: "Renata Augusto Ferreira",
    test: "TDAH CAB ADHD",
    date: "20/10/2023",
    icon: BrainIcon,
  },
  {
    name: "Renata Augusto Ferreira",
    test: "Autismo",
    date: "20/09/2023",
    icon: HexagonIcon,
  },
  {
    name: "Renata Augusto Ferreira",
    test: "TDAH CAB ADHD",
    date: "20/10/2023",
    icon: BrainIcon,
  },
  {
    name: "Renata Augusto Ferreira",
    test: "Autismo",
    date: "20/09/2023",
    icon: HexagonIcon,
  },
];

export default () => (
  <Section color="white">
    <Row>{generateCards(attendances)}</Row>
  </Section>
);
