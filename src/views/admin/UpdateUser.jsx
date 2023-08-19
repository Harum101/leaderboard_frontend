import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Form,
  Input,
} from "reactstrap";

import { listUsers } from "actions/adminActions/userActions";
import { listBadges } from "actions/adminActions/badgeActions";
import { listSkills } from "actions/adminActions/skillActions";

// import UpdateUserSkillForm from "components/Forms/UpdateUserSkillForm";
// import UpdateUserBadgeForm from "components/Forms/UpdateUserBadgeForm";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const { id: userId } = useParams();
  const badgesList = useSelector((state) => state.badgesList);
  const skillsList = useSelector((state) => state.skillsList);
  const [badgeImage, setBadgeImage] = useState("");
  const [skillId, setSkillId] = useState("");
  const [skillLevel, setSkillLevel] = useState("beginner");
  const [nftLink, setNFTLink] = useState("");
  const [score, setScore] = useState("");

  //SUBMIT HANDLER
  const skillSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userId, skillId, skillLevel, nftLink, score);
  };

  const badgeSubmitHandler = (e) => {
    e.preventDefault();
    console.log(badgeImage);
  };

  //USE EFFECT HOOK
  useEffect(() => {
    dispatch(listUsers());
    dispatch(listBadges());
    dispatch(listSkills());
  }, [dispatch]);

  //RENDERING PART
  return (
    <div className="content">
      <Card className="card-user">
        <CardHeader className="d-flex justify-content-center">
          <CardTitle tag="h3">Update User Form</CardTitle>
        </CardHeader>
        <Divider />
        <CardBody>
          <Row>
            {/* --------------- SKILLS FORM --------------- */}
            <Col md="6">
              <div>
                <h5 className="d-flex justify-content-center">Update Skills</h5>
                <Divider />
                <Form onSubmit={skillSubmitHandler}>
                  <Row>
                    <Col md="6">
                      <label>Skill Name: </label>
                      <Input
                        type="select"
                        value={skillId}
                        onChange={(e) => setSkillId(e.target.value)}
                      >
                        <option value="" selected hidden>
                          Select Skill
                        </option>
                        {skillsList.skills.map((skill) => (
                          <option key={skill._id} value={skill._id}>
                            {skill.skill_name}
                          </option>
                        ))}
                      </Input>
                    </Col>
                    <Col md="6">
                      <label>Skill Level: </label>
                      <Input
                        type="select"
                        value={skillLevel}
                        onChange={(e) => setSkillLevel(e.target.value)}
                      >
                        <option value="" selected hidden>
                          Select Skill Level
                        </option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Experienced">Experienced</option>
                      </Input>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col md="6">
                      <label>NFT Link: </label>
                      <Input
                        type="text"
                        placeholder="NFT Link"
                        value={nftLink}
                        onChange={(e) => setNFTLink(e.target.value)}
                      />
                    </Col>
                    <Col md="6">
                      <label>Score: </label>
                      <Input
                        type="text"
                        placeholder="Enter Score"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
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
              </div>
            </Col>
            {/* --------------- BADGES FORM --------------- */}
            <Col md="6">
              <div>
                <h5 className="d-flex justify-content-center">Update Badges</h5>
                <Divider />
                <Form onSubmit={badgeSubmitHandler}>
                  <Row className="mx-2">
                    <Col md={8}>
                      <Row>
                        <ButtonGroup>
                          {badgesList.badges.map((badge) => (
                            <Button
                              className="p-0 mx-2 rounded"
                              style={{
                                padding: "10px 20px",
                                backgroundColor: "#007bff",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Customize the shadow here
                                transition: "box-shadow 0.3s ease",
                              }}
                              key={badge._id}
                              onClick={() => setBadgeImage(badge.badge_image)}
                            >
                              <img
                                src={`/images/${badge.badge_image}`}
                                alt={badge.badge_name}
                                style={{ width: "50px" }}
                              />
                            </Button>
                          ))}
                        </ButtonGroup>
                      </Row>
                    </Col>
                    <Col md={4}>
                      {badgeImage && (
                        <img
                          src={`/images/${badgeImage}`}
                          style={{
                            width: "250px",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Customize the shadow here
                            transition: "box-shadow 0.3s ease",
                          }}
                          alt="badge"
                        />
                      )}
                    </Col>
                  </Row>
                  <Row className="mt-3">
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
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default UpdateUser;
