import React, {Component} from 'react';
import SubmitFormWithStore from './components/SubmitFormWithStore';
import SubmissionTable from "./components/SubmissionTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { view } from "react-easy-state";

class App extends Component {
  render() {
    return (
      <Container>
          <Row><h1>Bug-Tracker</h1></Row>
          <Row>
              <Col>
                  <h3>Existing Issues</h3>
                  <SubmissionTable/>
              </Col>
              <Col>
                  <h3>Submit New Issue</h3>
                  <SubmitFormWithStore/>
              </Col>
          </Row>
       </Container>
    );
  }
}
export default view(App);