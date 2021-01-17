import React from "react";
import { PatientsSearch, Patient, Row, Section } from "./../../components";
import patient1Pic from "./../../assets/img/patient-4.png";
import patient2Pic from "./../../assets/img/patient-5.png";
import patient3Pic from "./../../assets/img/patient-6.png";

export default () => (
  <Section color="white">
    <Row style={{ width: "100%" }} className="row">
      <PatientsSearch total={36}>
        <Patient
          key={1}
          image={patient1Pic}
          name="Renata Augusto Ferreira"
          tests="TDAH CAB ADHD"
          completed={15}
          cancelled={25}
          pending={40}
          variant="success"
        />
        <Patient
          key={2}
          image={patient2Pic}
          name="Carlos Nobrega Baccio"
          tests="TDAH CAB ADHD"
          completed={15}
          cancelled={25}
          pending={40}
          variant="error"
        />
        <Patient
          key={3}
          image={patient3Pic}
          name="Suelton A. Mellis"
          tests="TDAH CAB ADHD"
          completed={15}
          cancelled={25}
          pending={40}
          variant="error"
        />
      </PatientsSearch>
    </Row>
  </Section>
);
