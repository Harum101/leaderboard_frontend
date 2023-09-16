import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Col, Row } from "reactstrap";

export default function RightDrawer({ userList, setUserList }) {
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);

  const toggleRightDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setRightDrawerOpen(open);
  };

  const clearUserList = (event) => {
    event.stopPropagation();
    setUserList([]);
  };

  return (
    <div>
      <Button onClick={toggleRightDrawer(true)}>
        <strong>Show List</strong>
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={rightDrawerOpen}
        onClose={toggleRightDrawer(false)}
        onOpen={toggleRightDrawer(true)}
      >
        <Box
          sx={{ width: 300, height: "100vh" }}
          role="presentation"
          onClick={toggleRightDrawer(false)}
          onKeyDown={toggleRightDrawer(false)}
          className="d-flex justify-content-center align-items-center"
        >
          <Row>
            <Col md={12}>
              <Row className="d-flex justify-content-center mb-3">
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
                      <Col
                        md={12}
                        className="d-flex justify-content-center mt-3"
                      >
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
        </Box>
      </SwipeableDrawer>
    </div>
  );
}
