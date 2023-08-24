import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBadge } from "actions/adminActions/badgeActions";
import { BADGE_CREATE_RESET } from "constants/adminConstants";

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
import { Alert } from "@mui/material";

const BadgeForm = () => {
  const [badgeName, setBadgeName] = useState();
  const [badgeImageLocal, setBadgeImageLocal] = useState();
  const [badgeImage, setBadgeImage] = useState();
  // FUNCTIONALITIES
  const dispatch = useDispatch();
  const badgeCreate = useSelector((state) => state.badgeCreate);
  const { badge, badgeSuccess, badgeError } = badgeCreate;

  const convertToBase64 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setBadgeImageLocal(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const alertHandler = () => {
    if (badge) {
      dispatch({ type: BADGE_CREATE_RESET });
      setBadgeName("");
      setBadgeImageLocal(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createBadge({ badgeName, badgeImage }));
  };

  return (
    <div>
      {badgeSuccess && (
        <Alert onClose={alertHandler} severity="success" className="my-2">
          Badge Created Successfully!
        </Alert>
      )}
      {badgeError && (
        <Alert severity="danger" className="my-2">
          {badgeError}
        </Alert>
      )}
      <Card className="card-user">
        <CardHeader>
          <CardTitle tag="h5">Badges Form</CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={submitHandler} encType="multipart/form-data">
            <Row>
              <Col className="pr-1" md="5">
                <FormGroup>
                  <label>Badge Name</label>
                  <Input
                    placeholder="Badge Name"
                    value={badgeName}
                    type="text"
                    onChange={(e) => setBadgeName(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col className="pl-1" md="7">
                <FormGroup>
                  <label>Badge Image</label>
                  <Input
                    type="file"
                    onChange={(e) => {
                      setBadgeImage(e.target.files[0]);
                      convertToBase64(e);
                    }}
                    className="border p-1 rounded"
                  />
                </FormGroup>
              </Col>
            </Row>
            {badgeImageLocal && (
              <Row>
                <div className="d-flex justify-content-center">
                  <img
                    src={badgeImageLocal}
                    alt="badge"
                    style={{ width: "100px" }}
                  />
                </div>
              </Row>
            )}
            <Row>
              <div className="update ml-auto mr-auto">
                <Button className="btn-round" color="primary" type="submit">
                  Add Badge
                </Button>
              </div>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default BadgeForm;
