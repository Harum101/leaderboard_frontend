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
  const [skillImage, setSkillImage] = useState();
  const [skillImageLocal, setSkillImageLocal] = useState();
  // FUNCTIONALITIES
  const dispatch = useDispatch();
  const skillCreate = useSelector((state) => state.skillCreate);
  const { skill, skillSuccess, skillError } = skillCreate;

  const convertToBase64 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setSkillImageLocal(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const alertHandler = () => {
    if (skill) {
      dispatch({ type: SKILL_CREATE_RESET });
      setSkillName("");
      setSkillImageLocal(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createSkill({ skillName, skillImage }));
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
          <Form onSubmit={submitHandler} encType="multipart/form-data">
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
                  <label>Skill Image</label>
                  <Input
                    type="file"
                    onChange={(e) => {
                      setSkillImage(e.target.files[0]);
                      convertToBase64(e);
                    }}
                    className="border p-1 rounded"
                  />
                </FormGroup>
              </Col>
            </Row>
            {skillImageLocal && (
              <Row>
                <div className="d-flex justify-content-center mx-3">
                  <img
                    src={skillImageLocal}
                    alt="badge"
                    style={{ width: "100px" }}
                  />
                </div>
              </Row>
            )}
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
