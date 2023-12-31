import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "actions/adminActions/userActions";
import { USER_CREATE_RESET } from "constants/adminConstants";

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

import { Alert } from "@mui/material";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileImageLocal, setProfileImageLocal] = useState("");
  const [yearsOfExp, setYearsOfExp] = useState("");
  const [availability, setAvailability] = useState("");
  // FUNCTIONALITIES
  const dispatch = useDispatch();
  const userCreate = useSelector((state) => state.userCreate);

  const { user, userSuccess, userError } = userCreate;

  const convertToBase64 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setProfileImageLocal(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const alertHandler = () => {
    if (user) {
      dispatch({ type: USER_CREATE_RESET });
      setName("");
      setEmail("");
      setLinkedin("");
      setProfileImage("");
      setYearsOfExp("");
      setAvailability("");
      setProfileImageLocal(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createUser({
        name,
        email,
        linkedin,
        profileImage,
        yearsOfExp,
        availability,
      })
    );
  };

  return (
    <div>
      {userSuccess && (
        <Alert onClose={alertHandler} severity="success" className="my-2">
          User Created Successfully!
        </Alert>
      )}
      {userError && (
        <Alert severity="danger" className="my-2">
          {userError}
        </Alert>
      )}
      <Card className="card-user">
        <CardHeader>
          <Row>
            <Col md={6}>
              <CardTitle tag="h5">User Form</CardTitle>
            </Col>
            <Col md={6} className="d-flex flex-row-reverse">
              {profileImageLocal && (
                <div className="mx-4">
                  <img
                    src={profileImageLocal}
                    alt="developer"
                    style={{ width: "150px" }}
                  />
                </div>
              )}
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Form onSubmit={submitHandler} encType="multipart/form-data">
            <Row>
              <Col md="6">
                <FormGroup>
                  <label>Name</label>
                  <Input
                    placeholder="Name"
                    type="text"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Email</label>
                  <Input
                    placeholder="Email"
                    type="text"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label>LinkedIn URL</label>
                  <Input
                    placeholder="LinkedIn URL"
                    type="text"
                    value={linkedin}
                    required
                    onChange={(e) => setLinkedin(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                {/* <FormGroup>
                  <label>Profile Picture URL</label>
                  <Input
                    placeholder="Profile Picture URL"
                    type="text"
                    value={profileImage}
                    onChange={(e) => setProfileImage(e.target.value)}
                  />
                </FormGroup> */}
                <FormGroup>
                  <label>Profile Picture</label>
                  <Input
                    type="file"
                    onChange={(e) => {
                      setProfileImage(e.target.files[0]);
                      convertToBase64(e);
                    }}
                    className="border p-1 rounded"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label>Years of Experience</label>
                  <Input
                    type="select"
                    value={yearsOfExp}
                    onChange={(e) => setYearsOfExp(e.target.value)}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Availability</label>
                  <Input
                    type="select"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                  >
                    <option>Immediate</option>
                    <option>After 1 Week</option>
                    <option>After 2 Weeks</option>
                    <option>After 1 Month</option>
                    <option>After 2 Months</option>
                    <option>Other</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <div className="update ml-auto mr-auto">
                <Button className="btn-round" color="primary" type="submit">
                  Add User
                </Button>
              </div>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserForm;
