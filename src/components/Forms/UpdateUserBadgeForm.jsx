import { Divider } from "@mui/material";
import React from "react";
import { Button, Col, Input, Row } from "reactstrap";

const UpdateUserBadgeForm = () => {
  return (
    <div>
      <h5 className="d-flex justify-content-center">Update Badges</h5>
      <Divider />
      <Row>
        <Col md="6">
          <label>Badge Name: </label>
          <Input type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Input>
        </Col>
      </Row>
      <Row className="mt-3">
        <div className="update ml-auto mr-auto">
          <Button className="btn-round" color="primary" type="submit">
            Update Badge
          </Button>
        </div>
      </Row>
    </div>
  );
};

export default UpdateUserBadgeForm;
