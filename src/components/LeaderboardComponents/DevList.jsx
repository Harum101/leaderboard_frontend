import { Divider, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import { Button, Card, Col, Row } from "reactstrap";

const DevList = ({ userList, setUserList }) => {
  const clearUserList = (event) => {
    event.stopPropagation();
    setUserList([]);
  };
  return (
    <Card className="p-3">
      <Row>
        <Col md={12}>
          <Row className="d-flex justify-content-center mb-2">
            <h6 className="text-secondary">Your List</h6>
          </Row>
          <Row className="d-flex justify-content-center mb-3">
            {userList.length !== 0 ? (
              <List>
                {userList.map((entry) => (
                  <>
                    <ListItem key={entry.user._id} disablePadding>
                      <ListItemButton>
                        <Row>
                          <Col md={4}>
                            <img
                              src={`/images/profilePictures/${entry.user.profile_image}`}
                              alt={entry.user.name}
                              style={{ width: "100px" }}
                              rounded
                            />
                          </Col>
                          <Col md={8}>
                            <h6
                              style={{ color: "rgb(108,117,125)" }}
                              className="mb-0"
                            >
                              {entry.user.name}
                            </h6>
                            <Row className="pt-0">
                              <Col md={6} className="pr-0">
                                {entry.skill.skill_name}
                              </Col>
                              <Col md={6}>
                                {entry.user.years_of_experience} Years
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </>
                ))}
                <Row>
                  <Col md={12} className="d-flex justify-content-center mt-3">
                    <Button onClick={clearUserList}>Clear List</Button>
                  </Col>
                </Row>
              </List>
            ) : (
              <h6 className="text-secondary">( EMPTY )</h6>
            )}
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default DevList;
