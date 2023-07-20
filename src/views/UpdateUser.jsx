import { Divider } from "@mui/material";
import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";

import UpdateUserSkillForm from "components/Forms/UpdateUserSkillForm";
import UpdateUserBadgeForm from "components/Forms/UpdateUserBadgeForm";

const UpdateUser = () => {
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
