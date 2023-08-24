import { Alert, Divider } from "@mui/material";
import { addBadge } from "actions/adminActions/userActions";
import { ADD_BADGE_RESET } from "constants/adminConstants";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Col, Row, Form, ButtonGroup } from "reactstrap";

const UpdateUserBadgeForm = () => {
  const dispatch = useDispatch();
  const badgesList = useSelector((state) => state.badgesList);
  const badgeAdd = useSelector((state) => state.badgeAdd);
  const { badgeSuccess, badgeError } = badgeAdd;

  const [badgeImage, setBadgeImage] = useState("");
  const { id: userId } = useParams();

  const alertHandler = () => {
    dispatch({ type: ADD_BADGE_RESET });
    setBadgeImage("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const foundBadge = badgesList.badges.find(
      (i) => i.badge_image === badgeImage
    );
    const badgeId = foundBadge._id;
    dispatch(addBadge({ userId, badgeId }));
  };
  return (
    <div>
      {badgeSuccess && (
        <Alert onClose={alertHandler} severity="success" className="my-2">
          Badge Added Successfully!
        </Alert>
      )}
      {badgeError && (
        <Alert onClose={() => {}} severity="danger" className="my-2">
          Error: {badgeError}
        </Alert>
      )}
      <h5 className="d-flex justify-content-center">Update Badges</h5>
      <Divider />
      <Form onSubmit={submitHandler}>
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
                      src={`/images/badges/${badge.badge_image}`}
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
                src={`/images/badges/${badgeImage}`}
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
