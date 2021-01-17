import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import background from "./assets/img/artboard.png";
import styled from "styled-components";
import { Bar, Sidebar } from "./components";
import {
  Config,
  Dashboard,
  Patients,
  Tests,
  Main,
  Content,
} from "./containers";

const Container = styled.div`
  height: 100%;
  width: 100%;
  min-width: 1000px;
  display: flex;
  background: linear-gradient(107.65deg, #1042dd 0.43%, #24b0a8 100%);
  mix-blend-mode: overlay;
`;

const Background = styled.div`
  background: url(${background});
  background-size: cover;
  min-height: 100vh;
  min-width: 1000px;
`;

function App() {
  return (
    <Background>
      <Container className="anderson">
        <Router>
          <Sidebar />
          <Main>
            <Bar />
            <Content>
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/patients" component={Patients} />
                <Route path="/tests" component={Tests} />
                <Route path="/config" component={Config} />
              </Switch>
            </Content>
          </Main>
        </Router>
      </Container>
    </Background>
  );
}

export default App;
