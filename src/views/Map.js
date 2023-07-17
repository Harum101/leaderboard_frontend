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
  Label,
} from "reactstrap";

const Map = () => {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">User Form</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Name</label>
                        <Input placeholder="Name" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Email</label>
                        <Input placeholder="Email" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>LinkedIn URL</label>
                        <Input placeholder="LinkedIn URL" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Profile Picture URL</label>
                        <Input placeholder="Profile Picture URL" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Years of Experience</label>
                        <Input type="select" name="yoe" id="yoe">
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
                        <Input type="select" name="yoe" id="yoe">
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
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Add User
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Skills Form</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Skill Name</label>
                        <Input placeholder="Skill Name" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="7">
                      <FormGroup>
                        <label>Skill Image Link</label>
                        <Input placeholder="Image URL" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Add Skill
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Badges Form</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Badge Name</label>
                        <Input placeholder="Skill Name" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="7">
                      <FormGroup>
                        <label>Badge Image Link</label>
                        <Input placeholder="Image URL" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Add Badge
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Map;
