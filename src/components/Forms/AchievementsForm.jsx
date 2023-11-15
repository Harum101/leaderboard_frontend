import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
//ACTIONS
import { fetchAchievements } from "actions/adminActions/achievementActions";
import { getUserSkill } from "actions/adminActions/userSkillActions";
import { addAchievements } from "actions/adminActions/achievementActions";

const AchievementsForm = () => {
  const { id: userId } = useParams();
  const { user } = useSelector((state) => state.getSingleUserSkill);
  const { achievements } = useSelector((state) => state.achievementsGet);
  const dispatch = useDispatch();

  const [mainTitle, setMainTitle] = useState();
  const [subTitle, setSubTitle] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addAchievements({ userId, mainTitle, subTitle }));
  };

  // Funtion to get achievements for a specific skill

  useEffect(() => {
    dispatch(fetchAchievements());
    dispatch(getUserSkill({ userId }));
  }, [dispatch, userId]);

  if (user) {
    const skillId = user[0].skill._id;
    const result = achievements.find(
      (achievements) => achievements.skillId === skillId
    );
    const achievement = result.achievements;
    // console.log(achievement);
    const isMainTitle = achievement.find(
      (entry) => entry.mainTitle === mainTitle
    );
    const subparts = isMainTitle?.subparts;

    /* ------------------------------------------ */

    return (
      <Card className="card-user">
        <CardHeader>
          <Row>
            <Col md={8} className="d-flex justify-content-center">
              <CardTitle tag="h3">User Achievements Form</CardTitle>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <CardTitle tag="h3">User Achievements</CardTitle>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md={8}>
              <Divider />
              <h5>Add Achievements</h5>
              <Form encType="multipart/form-data" onSubmit={submitHandler}>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <label>Select Main Title</label>
                      <Input
                        type="select"
                        value={mainTitle}
                        onChange={(e) => setMainTitle(e.target.value)}
                      >
                        <option value="" selected hidden>
                          Select Main Title
                        </option>
                        {achievement.map((entry) => (
                          <option key={entry._id}>{entry.mainTitle}</option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={5}>
                    <FormGroup>
                      <label>Select Sub Title</label>
                      <Input
                        type="select"
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}
                      >
                        <option value="" selected hidden>
                          Select Sub Title
                        </option>
                        {subparts &&
                          subparts.map((entry) => (
                            <option key={entry._id}>{entry.subTitle}</option>
                          ))}
                      </Input>
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
                {/* <Row>
                  <Col md={9}>
                    <FormGroup>
                      <label>Subtitle</label>
                      <Input
                        placeholder="Add Subtitle"
                        type="text"
                        //   value={subTitle}
                        required
                        //   onChange={(e) => setSubTitle(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  
                </Row> */}
              </Form>
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
    );
  }
};

export default AchievementsForm;
