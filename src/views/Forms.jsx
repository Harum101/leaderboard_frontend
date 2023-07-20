import React from "react";
// reactstrap components
import {
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Input,
  Form,
  FormGroup,
} from "reactstrap";
// COMPONENTS
import SkillForm from "components/Forms/SkillForm";
import UserForm from "components/Forms/UserForm";
import BadgeForm from "components/Forms/BadgeForm";

const Forms = () => {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <UserForm />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <SkillForm />
          </Col>
          <Col md="6">
            <BadgeForm />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Forms;
