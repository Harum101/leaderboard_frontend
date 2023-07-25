import { Divider } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";

import { listUsers } from "actions/adminActions/userActions";
import { listBadges } from "actions/adminActions/badgeActions";
import { listSkills } from "actions/adminActions/skillActions";

import UpdateUserSkillForm from "components/Forms/UpdateUserSkillForm";
import UpdateUserBadgeForm from "components/Forms/UpdateUserBadgeForm";

const UpdateUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
    dispatch(listBadges());
    dispatch(listSkills());
  }, [dispatch]);
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
              <UpdateUserSkillForm />
            </Col>
            {/* --------------- BADGES FORM --------------- */}
            <Col md="6">
              <UpdateUserBadgeForm />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default UpdateUser;
