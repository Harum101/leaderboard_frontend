import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Input, Row, Form } from "reactstrap";
import { Divider } from "@mui/material";
import { useParams } from "react-router-dom";

import { updateUserSkill } from "actions/adminActions/userSkillActions";

const UpdateUserSkillForm = () => {
  const dispatch = useDispatch();
  // userId, skillId, skillLevel, nftLink, score
  const skillsList = useSelector((state) => state.skillsList);
  //COMPONENT LEVEL STATES
  const { id: userId } = useParams();
  const [skillId, setSkillId] = useState("");
  const [skillLevel, setSkillLevel] = useState("beginner");
  const [nftLink, setNFTLink] = useState("");
  const [score, setScore] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUserSkill({
        userId,
        skillId,
        skillLevel,
        nftLink,
        score,
      })
    );
    // console.log(userId, skillId, skillLevel, nftLink, score);
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
            <Button className="btn-round" color="primary" type="submit">
              Add Skill
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default UpdateUserSkillForm;
