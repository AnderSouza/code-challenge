import React from "react";
import { Icon } from "@iconify/react";
import userSvg from "@iconify-icons/clarity/user-line";
import tubeSvg from "@iconify-icons/bx/bx-test-tube";

import { Card, Row, Badge, Section } from "../../components";

const UserIcon = () => (
  <Icon style={{ fontSize: "28px", color: "blue" }} icon={userSvg} />
);

const TubeIcon = ({ color }: { color: string }) => (
  <Icon style={{ fontSize: "28px", color: color }} icon={tubeSvg} />
);

export default () => (
  <Section color="transparent">
    <Row style={{ overflow: "visible" }} scroll>
      <Card
        key={1}
        icon={<UserIcon />}
        badge={<Badge color="limegreen">+30%</Badge>}
        info="Pacientes Ativos"
        amount={26}
        tooltip={{
          title: "Pacientes Totais",
          amount: "268",
          variant: "success",
        }}
      />
      <Card
        key={2}
        icon={<TubeIcon color="blue" />}
        badge={<Badge color="red">-10%</Badge>}
        info="Testes Realizados"
        amount={306}
        tooltip={{
          title: "Testes Totais",
          amount: "1.265",
          variant: "success",
        }}
      />
      <Card
        key={3}
        icon={<TubeIcon color="red" />}
        badge={<Badge color="limegreen">+30%</Badge>}
        info="Testes Concluídos"
        amount={139}
        tooltip={{
          title: "Testes Totais Concluídos",
          amount: "10.550",
          variant: "success",
        }}
      />
      <Card
        key={4}
        icon={<TubeIcon color="limegreen" />}
        badge={<Badge color="red">-3%</Badge>}
        info="Testes Cancelados"
        amount={11}
        tooltip={{
          title: "Testes Totais Cancelados",
          amount: "618",
          variant: "error",
        }}
      />
    </Row>
  </Section>
);
