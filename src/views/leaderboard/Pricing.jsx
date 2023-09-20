import { Check } from "@mui/icons-material";
import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import Appbar from "components/LeaderboardComponents/AppBar";
import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";

const Pricing = () => {
  return (
    <div
      style={{
        backgroundColor: "#191D2F",
        maxWidth: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Appbar />

      <Container>
        <div className="m-5">
          <Row>
            <Col md={3} className="px-1">
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    className="d-flex justify-content-center"
                  >
                    FREE
                  </Typography>
                  <Typography
                    variant="h4"
                    gutterBottom
                    className="d-flex justify-content-center mt-2 mb-1"
                  >
                    0$
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className="d-flex justify-content-center pt-0"
                    style={{ color: "rgb(108,117,125)" }}
                  >
                    per organization / month
                  </Typography>
                  <div className="d-flex justify-content-center mt-5 mb-4">
                    <Button variant="contained">Try Now</Button>
                  </div>
                  <Divider />
                  <ListGroup>
                    <ListGroupItem className="border-0">
                      <Check color="primary" style={{ width: "18px" }} />{" "}
                      Checking If its correct
                    </ListGroupItem>
                  </ListGroup>
                </CardContent>
              </Card>
            </Col>
            <Col md={3} className="px-1">
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    className="d-flex justify-content-center"
                  >
                    BASIC
                  </Typography>
                  <Typography
                    variant="h4"
                    gutterBottom
                    className="d-flex justify-content-center mt-2 mb-1"
                  >
                    39$
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className="d-flex justify-content-center pt-0"
                    style={{ color: "rgb(108,117,125)" }}
                  >
                    per organization / month
                  </Typography>
                  <div className="d-flex justify-content-center mt-5 mb-4">
                    <Button variant="contained">Try Now</Button>
                  </div>
                  <Divider />
                  <ListGroup>
                    <ListGroupItem className="border-0">
                      <Check color="primary" style={{ width: "18px" }} />{" "}
                      Checking If its correct
                    </ListGroupItem>
                  </ListGroup>
                </CardContent>
              </Card>
            </Col>
            <Col md={3} className="px-1">
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    className="d-flex justify-content-center"
                  >
                    STANDARD
                  </Typography>
                  <Typography
                    variant="h4"
                    gutterBottom
                    className="d-flex justify-content-center mt-2 mb-1"
                  >
                    79$
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className="d-flex justify-content-center pt-0"
                    style={{ color: "rgb(108,117,125)" }}
                  >
                    per organization / month
                  </Typography>
                  <div className="d-flex justify-content-center mt-5 mb-4">
                    <Button variant="contained">Try Now</Button>
                  </div>
                  <Divider />
                  <ListGroup>
                    <ListGroupItem className="border-0">
                      <Check color="primary" style={{ width: "18px" }} />{" "}
                      Checking If its correct
                    </ListGroupItem>
                  </ListGroup>
                </CardContent>
              </Card>
            </Col>
            <Col md={3} className="px-1">
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    className="d-flex justify-content-center"
                  >
                    PROFESSIONAL
                  </Typography>
                  <Typography
                    variant="h4"
                    gutterBottom
                    className="d-flex justify-content-center mt-2 mb-1"
                  >
                    199$
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className="d-flex justify-content-center pt-0"
                    style={{ color: "rgb(108,117,125)" }}
                  >
                    per organization / month
                  </Typography>
                  <div className="d-flex justify-content-center mt-5 mb-4">
                    <Button variant="contained">Try Now</Button>
                  </div>
                  <Divider />
                  <ListGroup>
                    <ListGroupItem className="border-0">
                      <Check color="primary" style={{ width: "18px" }} />{" "}
                      Checking If its correct
                    </ListGroupItem>
                  </ListGroup>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
