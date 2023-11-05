import { Divider } from "@mui/material";
import React from "react";
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

const Achievements = () => {
  const submitHandlerFirst = () => {};
  const submitHandlerSecond = () => {};

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card className="card-user">
            <CardHeader>
              <Row>
                <Col md={6}>
                  <CardTitle tag="h5">ACHIEVEMENTS</CardTitle>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={8}>
                  <Divider />
                  <h5>Add Title</h5>
                  <Form
                    onSubmit={submitHandlerFirst}
                    encType="multipart/form-data"
                  >
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <label>Select Skill</label>
                          <Input
                            type="select"
                            // value={skillId}
                            // onChange={(e) => setSkillId(e.target.value)}
                          >
                            <option value="" selected hidden>
                              Select Skill
                            </option>
                            {/* {skillsList.skills.map((skill) => (
                              <option key={skill._id} value={skill._id}>
                                {skill.skill_name}
                              </option>
                            ))} */}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={5}>
                        <FormGroup>
                          <label>Achievement Title</label>
                          <Input
                            placeholder="Main Title"
                            type="text"
                            // value={hackathonDescription}
                            required
                            // onChange={(e) =>
                            //   setHackathonDescription(e.target.value)
                            // }
                          />
                        </FormGroup>
                      </Col>
                      <Col md={3} className="d-flex align-items-center">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Add
                        </Button>
                      </Col>
                    </Row>
                  </Form>

                  <Divider />
                  <h5>Add Sub Parts</h5>
                  {/* <Form onSubmit={submitHandlerFirst} encType="multipart/form-data"> */}
                  <Row>
                    <Col md={4}>
                      <FormGroup>
                        <label>Select Skill</label>
                        <Input
                          type="select"
                          // value={skillId}
                          // onChange={(e) => setSkillId(e.target.value)}
                        >
                          <option value="" selected hidden>
                            Select Skill
                          </option>
                          {/* {skillsList.skills.map((skill) => (
                              <option key={skill._id} value={skill._id}>
                                {skill.skill_name}
                              </option>
                            ))} */}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={5}>
                      <FormGroup>
                        <label>Select Achievement</label>
                        <Input
                          type="select"
                          // value={skillId}
                          // onChange={(e) => setSkillId(e.target.value)}
                        >
                          <option value="" selected hidden>
                            Select Achievement
                          </option>
                          {/* {skillsList.skills.map((skill) => (
                              <option key={skill._id} value={skill._id}>
                                {skill.skill_name}
                              </option>
                            ))} */}
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={9}>
                      <FormGroup>
                        <label>Subtitle</label>
                        <Input
                          placeholder="Add Subtitle"
                          type="text"
                          // value={hackathonPrize}
                          required
                          // onChange={(e) => setHackathonPrize(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={3} className="d-flex align-items-center">
                      <Button
                        className="btn-round mb-0"
                        color="primary"
                        type="submit"
                      >
                        Add
                      </Button>
                    </Col>
                  </Row>
                  {/* {success && (
                        <Alert
                          onClose={alertHandler}
                          severity="success"
                          className="my-2"
                        >
                          Hackathon Created Successfully!
                        </Alert>
                      )}
                      {error && (
                        <Alert
                          onClose={alertHandler}
                          severity="danger"
                          className="my-2"
                        >
                          {error}
                        </Alert>
                      )} */}

                </Col>
                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  {/* <div className="d- flex justify-content-center">
                        {!loading ? (
                          <DateTime
                            hackathonTitle={hackathon?.hackathonTitle}
                            hackathonDate={hackathon?.hackathonDate}
                            hackathonDescription={
                              hackathon?.hackathonDescription
                            }
                            targetAudience={hackathon?.targetAudience}
                            hackathonPrize={hackathon?.hackathonPrize}
                          />
                        ) : (
                          <h5>Loading...</h5>
                        )}
                      </div> */}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Achievements;
