import React from "react";
import { Patient, Row, Section } from "../../components";
import patientPic1 from "./../../assets/img/patient-1.png";
import patientPic2 from "./../../assets/img/patient-2.png";
import patientPic3 from "./../../assets/img/patient-3.png";

export default () => (
  <Row scroll>
    <Section color="transparent">
      <Patient.Action
        key={1}
        image={patientPic1}
        name="Renata Augusto Ferreira"
        test="TDAH CAB ADHD"
        date="20/10/2023"
        variant="success"
      />
      <Patient.Action
        key={2}
        image={patientPic2}
        name="Carlos Nobrega Baccio"
        test="TDAH CAB ADHD"
        date="20/10/2023"
        variant="error"
      />
      <Patient.Action
        key={3}
        image={patientPic3}
        name="Suelton A. Mellis"
        test="TDAH CAB ADHD"
        date="20/10/2023"
        variant="error"
      />
    </Section>
  </Row>
);
