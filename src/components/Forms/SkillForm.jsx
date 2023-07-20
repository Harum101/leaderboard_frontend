import { Alert } from "@mui/material";
import { createSkill } from "actions/adminActions/skillActions";
import { SKILL_CREATE_RESET } from "constants/adminConstants";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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

const SkillForm = () => {
  const [skillName, setSkillName] = useState();
  const [skillImageLink, setSkillImageLink] = useState();
  // FUNCTIONALITIES
  const dispatch = useDispatch();
  const skillCreate = useSelector((state) => state.skillCreate);
  const { skill, skillSuccess, skillError } = skillCreate;

  const alertHandler = () => {
    if (skill) {
      dispatch({ type: SKILL_CREATE_RESET });
      setSkillName("");
      setSkillImageLink("");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createSkill({ skillName, skillImageLink }));
  };
  return (
    <div>
      {skillSuccess && (
        <Alert onClose={alertHandler} severity="success" className="my-2">
          Skill Created Successfully!
        </Alert>
      )}
      {skillError && (
        <Alert severity="danger" className="my-2">
          {skillError}
        </Alert>
      )}
      <Card className="card-user">
        <CardHeader>
          <CardTitle tag="h5">Skills Form</CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={submitHandler}>
            <Row>
              <Col className="pr-1" md="5">
                <FormGroup>
                  <label>Skill Name</label>
                  <Input
                    placeholder="Skill Name"
                    value={skillName}
                    type="text"
                    onChange={(e) => setSkillName(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col className="pl-1" md="7">
                <FormGroup>
                  <label>Skill Image Link</label>
                  <Input
                    placeholder="Image URL"
                    value={skillImageLink}
                    type="text"
                    onChange={(e) => setSkillImageLink(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <div className="update ml-auto mr-auto">
                <Button className="btn-round" color="primary" type="submit">
                  Add Skill
                </Button>
              </div>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default SkillForm;
