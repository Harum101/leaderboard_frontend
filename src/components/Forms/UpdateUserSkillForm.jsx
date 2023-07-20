import { Divider } from "@mui/material";
import React from "react";
import { Button, Col, Input, Row } from "reactstrap";

const UpdateUserSkillForm = () => {
  return (
    <div>
      <h5 className="d-flex justify-content-center">Update Skills</h5>
      <Divider />
      <Row>
        <Col md="6">
          <label>Skill Name: </label>
          <Input type="select">
            <option disabled>Select Skill</option>
            <option>NodeJs</option>
            <option>React</option>
            <option>Flutter</option>
            <option>Laravel</option>
          </Input>
        </Col>
        <Col md="6">
          <label>Skill Level: </label>
          <Input type="select">
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Experienced</option>
          </Input>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md="6">
          <label>Avatar Link: </label>
          <Input type="text" placeholder="Avatar Link" />
        </Col>
        <Col md="6">
          <label>Score: </label>
          <Input type="text" placeholder="Enter Score"></Input>
        </Col>
      </Row>
      <Row className="mt-3">
        <div className="update ml-auto mr-auto">
          <Button className="btn-round" color="primary" type="submit">
            Update Skill
          </Button>
        </div>
      </Row>
    </div>
  );
};

export default UpdateUserSkillForm;
