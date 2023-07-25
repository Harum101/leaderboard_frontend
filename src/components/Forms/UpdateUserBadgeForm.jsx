import { Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Button, Col, Input, Row, Form } from "reactstrap";

const UpdateUserBadgeForm = () => {
  const badgesList = useSelector((state) => state.badgesList);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <div>
      <h5 className="d-flex justify-content-center">Update Badges</h5>
      <Divider />
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md="6">
            <label>Badge Name: </label>
            <Input type="select">
              {badgesList.badges.map((badge) => (
                <option key={badge._id}>{badge.badge_name}</option>
              ))}
            </Input>
          </Col>
        </Row>
        <Row className="mt-3">
          <div className="update ml-auto mr-auto">
            <Button className="btn-round" color="primary" type="submit">
              Add Badge
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default UpdateUserBadgeForm;
