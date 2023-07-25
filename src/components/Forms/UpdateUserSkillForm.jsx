import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Input, Row, Form } from "reactstrap";
import { Divider } from "@mui/material";
import { useParams } from "react-router-dom";

const UpdateUserSkillForm = () => {
  // userId, skillId, skillLevel, avatarLink, score
  const skillsList = useSelector((state) => state.skillsList);
  //COMPONENT LEVEL STATES
  const { id: userId } = useParams();
  const [skillId, setSkillId] = useState("");
  const [skillLevel, setSkillLevel] = useState("beginner");
  const [avatarLink, setAvatarLink] = useState("");
  const [score, setScore] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(userId, skillId, skillLevel, avatarLink, score);
  };

  return (
    <div>
      <h5 className="d-flex justify-content-center">Update Skills</h5>
      <Divider />
      <Form onSubmit={submitHandler}>
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
            <label>Avatar Link: </label>
            <Input
              type="text"
              placeholder="Avatar Link"
              value={avatarLink}
              onChange={(e) => setAvatarLink(e.target.value)}
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
            <Button className="btn-round" color="primary" type="submit">
              Update Skill
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default UpdateUserSkillForm;
