import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import { Alert } from "@mui/material";
import logixos_logo_white from "assets/img/logixos_logo_white.png";
import { Link } from "react-router-dom";
import { registerCompany } from "actions/leaderboardActions/authActions";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const dispatch = useDispatch("");
  const { success, error } = useSelector((state) => state.companyRegister);
  if (error) {
    console.log(error);
  }
  //Company Data
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [noOfEmployees, setNoOfEmployees] = useState();
  const [industry, setIndustry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //ALERT
  const [alert, setAlert] = useState("");
  const alertHandler = () => {
    setName("");
    setContact("");
    setEmail("");
    setCompanyName("");
    setCompanyWebsite(""); 
    setNoOfEmployees(null);
    setIndustry("");
    setPassword("");
    setConfirmPassword("");
  };
  //SUBMIT HANDLER
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert("The passwords you entered do not match.");
    } else {
      dispatch(
        registerCompany({
          name,
          contact,
          email,
          companyName,
          companyWebsite,
          noOfEmployees,
          industry,
          password,
        })
      );
    }
  };
  return (
    <Row>
      <Col
        md={4}
        style={{ height: "100vh", backgroundColor: "#262626" }}
        className="d-flex align-items-center justify-content-center"
      >
        <img
          src={logixos_logo_white}
          style={{ width: "350px" }}
          alt="logixos"
        />
      </Col>
      <Col
        md={8}
        style={{ height: "100vh" }}
        className="d-flex align-items-center justify-content-center"
      >
        <Card
          className="card-user w-75"
          style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
        >
          <CardHeader className="d-flex justify-content-center">
            <CardTitle tag="h3">SIGN UP</CardTitle>
          </CardHeader>
          <CardBody className="d-flex justify-content-center">
            <Form className="w-100 mx-4" onSubmit={submitHandler}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <label>Name</label>
                    <Input
                      placeholder="Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <label>Contact Number</label>
                    <Input
                      placeholder="Contact Number"
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <label>Email</label>
                    <Input
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <label>Company Name</label>
                    <Input
                      placeholder="Company Name"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <label>Company Website</label>
                    <Input
                      placeholder="Company Website"
                      type="text"
                      value={companyWebsite}
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <label>Number of Employees</label>
                    <Input
                      placeholder="Number of Employees"
                      type="number"
                      value={noOfEmployees}
                      onChange={(e) => setNoOfEmployees(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <label>Industry</label>
                    <Input
                      placeholder="Industry"
                      type="text"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <label>Password</label>
                    <Input
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <label>Confirm Password</label>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              {alert && (
                <Alert
                  onClose={() => setAlert("")}
                  severity="error"
                  className="my-2"
                >
                  {alert}
                </Alert>
              )}
              {success && (
                <Alert onClose={alertHandler} severity="success" className="my-2">
                  Registration Successful!
                </Alert>
              )}
              {error && (
                <Alert severity="error" className="my-2">
                  {error}
                </Alert>
              )}
              <p>
                Already Registered?{" "}
                <Link className="text-secondary" to="/login">
                  Log In
                </Link>
              </p>

              <Row className="mt-4">
                <div className="update ml-auto mr-auto">
                  <Button className="btn-round" color="secondary" type="submit">
                    SIGN UP
                  </Button>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
