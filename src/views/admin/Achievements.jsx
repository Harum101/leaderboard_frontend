import React, { useEffect, useState } from "react";
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
import { Alert, Divider } from "@mui/material";
import { listSkills } from "actions/adminActions/skillActions";
import {
  postMainTitle,
  fetchAchievements,
  postSubTitle,
} from "actions/adminActions/achievementActions";
import { TITLE_CREATE_RESET } from "constants/adminConstants";
import { SUBTITLE_CREATE_RESET } from "constants/adminConstants";

const Achievements = () => {
  const dispatch = useDispatch();
  const [skillId, setSkillId] = useState();
  const [skillName, setSkillName] = useState();
  const [subSkillId, setSubSkillId] = useState();
  const [mainTitle, setMainTitle] = useState("");
  const [mainTitleId, setMainTitleId] = useState();
  const [subTitle, setSubTitle] = useState("");
  const [result, setResult] = useState();

  const { skills } = useSelector((state) => state.skillsList);
  const { achievements } = useSelector((state) => state.achievementsGet);
  const { mainTitlePostSuccess, mainTitlePostMessage } = useSelector(
    (state) => state.mainTitleCreate
  );
  const { subTitlePostSuccess, subTitlePostMessage } = useSelector(
    (state) => state.subTitleCreate
  );

  const submitHandlerFirst = (e) => {
    e.preventDefault();
    dispatch(postMainTitle({ skillId, mainTitle }));
  };

  const submitHandlerSecond = (e) => {
    e.preventDefault();
    if (subSkillId && mainTitleId && subTitle) {
      dispatch(postSubTitle({ subSkillId, mainTitleId, subTitle }));
    }
  };

  const handleChange = (value) => {
    const result = achievements.find(
      (achievements) => achievements.skillId === value
    );
    const skill_name = skills.find((skills) => skills._id === value);
    setResult(result);
    setSkillName(skill_name);
    console.log(result);
  };

  const handleClose = () => {
    if (mainTitle) {
      dispatch({ type: TITLE_CREATE_RESET });
      setSkillId();
      setMainTitle("");
    }
    if (subTitle) {
      dispatch({ type: SUBTITLE_CREATE_RESET });
      setSubSkillId();
      setMainTitleId("");
      setSubTitle("");
    }
  };

  useEffect(() => {
    dispatch(listSkills());
    dispatch(fetchAchievements());
    if (subSkillId) {
      handleChange(subSkillId);
    }
  }, [dispatch, subSkillId]);

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card className="card-user">
            <CardHeader>
              <Row>
                <Col md={8}>
                  <CardTitle tag="h5">ACHIEVEMENTS</CardTitle>
                </Col>
                <Col md={4}>
                  <CardTitle tag="h5">DISPLAY</CardTitle>
                </Col>
              </Row>
            </CardHeader>
            <Divider />
            <CardBody>
              <Row>
                <Col md={8}>
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
                            value={skillId}
                            onChange={(e) => setSkillId(e.target.value)}
                          >
                            <option value="" selected hidden>
                              Select Skill
                            </option>
                            {skills.map((skill) => (
                              <option key={skill._id} value={skill._id}>
                                {skill.skill_name}
                              </option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={5}>
                        <FormGroup>
                          <label>Achievement Title</label>
                          <Input
                            placeholder="Main Title"
                            type="text"
                            value={mainTitle}
                            required
                            onChange={(e) => setMainTitle(e.target.value)}
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
                      <Col md={12}>
                        {mainTitlePostSuccess && (
                          <Alert
                            onClose={handleClose}
                            severity="success"
                            className="my-2"
                          >
                            {mainTitlePostMessage.message}
                          </Alert>
                        )}
                      </Col>
                    </Row>
                  </Form>

                  <Divider />
                  <h5>Add Sub Parts</h5>
                  <Form
                    onSubmit={submitHandlerSecond}
                    encType="multipart/form-data"
                  >
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <label>Select Skill</label>
                          <Input
                            type="select"
                            value={subSkillId}
                            onChange={(e) => setSubSkillId(e.target.value)}
                          >
                            <option value="" selected hidden>
                              Select Skill
                            </option>
                            {skills.map((skill) => (
                              <option key={skill._id} value={skill._id}>
                                {skill.skill_name}
                              </option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={5}>
                        <FormGroup>
                          <label>Select Achievement</label>
                          <Input
                            type="select"
                            value={mainTitleId}
                            required
                            onChange={(e) => setMainTitleId(e.target.value)}
                          >
                            <option value="" selected hidden>
                              Select Achievement
                            </option>
                            {result &&
                              result.achievements.map((entry) => (
                                <option key={entry._id} value={entry._id}>
                                  {entry.mainTitle}
                                </option>
                              ))}
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
                            value={subTitle}
                            required
                            onChange={(e) => setSubTitle(e.target.value)}
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
                    {subTitlePostSuccess && (
                      <Row>
                        <Alert
                          onClose={handleClose}
                          severity="success"
                          className="my-2"
                        >
                          {subTitlePostMessage.message}
                        </Alert>
                      </Row>
                    )}
                  </Form>
                </Col>
                <Col md={4}>
                  <Row>
                    <Col md={12}>
                      {skillName ? (
                        <>
                          <h5>{`${skillName.skill_name} Achievements`}</h5>
                          {result ? (
                            result.achievements.map((entry) => {
                              return (
                                <>
                                  <h6>{entry.mainTitle}</h6>
                                  {entry.subparts.map((subEntry) => {
                                    return <p>{subEntry.subTitle}</p>;
                                  })}
                                </>
                              );
                            })
                          ) : (
                            <p>NONE ADDED YET</p>
                          )}
                        </>
                      ) : (
                        <p>SELECT A SKILL FROM THE SUBPARTS SECTION</p>
                      )}
                    </Col>
                  </Row>
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
