import React from "react";
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
import logixos_logo_white from "assets/img/logixos_logo_white.png";
import { Link } from "react-router-dom";

const Login = () => {
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
            <CardTitle tag="h3">LOG IN</CardTitle>
          </CardHeader>
          <CardBody className="d-flex justify-content-center">
            <Form className="w-50">
              <FormGroup>
                <label>Email</label>
                <Input placeholder="Email" type="text" />
              </FormGroup>
              <FormGroup>
                <label>Password</label>
                <Input placeholder="Password" type="password" />
              </FormGroup>
              <p>
                Not Registered?{" "}
                <Link className="text-secondary" to="/register">
                  Register Here
                </Link>
              </p>

              <Row className="mt-4">
                <div className="update ml-auto mr-auto">
                  <Button className="btn-round" color="secondary" type="submit">
                    LOG IN
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

export default Login;
