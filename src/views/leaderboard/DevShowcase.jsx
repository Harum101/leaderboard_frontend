import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Button, Col, Container, Row } from "reactstrap";
import { Card } from "reactstrap";

// Components
import Appbar from "components/LeaderboardComponents/AppBar";
import { getAllUserSkills } from "actions/adminActions/userSkillActions";
import { Add } from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  Tooltip,
} from "@mui/material";

//ACTIONS IMPORTS

// COPYRIGHT FUNCTION
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        LOGIXOS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const DevShowcase = () => {
  const dispatch = useDispatch();
  const allUserSkills = useSelector((state) => state.getAllUserSkills);
  const { companyInfo } = useSelector((state) => state.companyLogin);
  //   const users = allUserSkills.users.sort((a, b) => b.score - a.score);
  const [userList, setUserList] = useState([]);

  const clearUserList = (event) => {
    event.stopPropagation();
    setUserList([]);
  };

  useEffect(() => {
    dispatch(getAllUserSkills());
  }, [dispatch]);

  return (
    <div
      style={{
        backgroundColor: "#191D2F",
        maxWidth: "100%",
        height: "100vh",
      }}
    >
      <Appbar />
      <Container fluid>
        <Row style={{ height: "90vh", marginLeft: "1.8rem" }}>
          <Col md={10}>
            <Row className="my-2 mt-4" style={{ marginRight: "1.3rem" }}>
              <Col md={6}>
                <h4 className="my-0 text-white">Our Developers</h4>
              </Col>
              <Col md={6} className="d-flex justify-content-end me-1">
                <h4 className="my-0 mx-3 text-white">Dropdown</h4>
              </Col>
            </Row>
            <div
              className="mb-2"
              style={{
                backgroundColor: "#2D3044",
                borderRadius: "2px",
                height: "75vh",
                marginRight: "1.5rem",
              }}
            >
            {/* CODE FOR DEVELOPER CARDS */}
              <Row className="m-3">
                {allUserSkills.users.map((entry, index) => (
                  <Col md={4} key={entry.user._id}>
                    <Card className="mt-3 mb-0">
                      <Row className="m-1">
                        <Col md={4}>
                          <img
                            src={`/images/profilePictures/${entry.user.profile_image}`}
                            style={{
                              width: "80px",
                              height: "70px",
                              borderRadius: "100%",
                              objectFit: "cover",
                            }}
                            alt="profile"
                          />
                        </Col>
                        <Col md={7} className="px-0">
                          <p style={{ fontWeight: "bold" }} className="mb-0">
                            {entry.user.name}
                          </p>
                          <p className="mb-0">
                            <span style={{ fontWeight: "bold" }}>Skill:</span>{" "}
                            {entry.skill.skill_name}
                          </p>
                          <p className="mb-0">
                            <span style={{ fontWeight: "bold" }}>Level:</span>{" "}
                            {entry.skill_level}
                          </p>
                          <p className="mb-0">
                            <span style={{ fontWeight: "bold" }}>Score:</span>{" "}
                            {entry.score}
                          </p>
                        </Col>
                        <Col md={1} className="px-0">
                          <Tooltip
                            title={companyInfo ? "Add To List" : "Login First"}
                          >
                            <span>
                              <Button
                                className="rounded-circle p-0 m-0"
                                disabled={
                                  !companyInfo ||
                                  userList.some(
                                    (list) => list.user._id === entry.user._id
                                  )
                                }
                                onClick={() =>
                                  setUserList([...userList, entry])
                                }
                              >
                                <Add style={{ fontSize: "20px" }} />
                              </Button>
                            </span>
                          </Tooltip>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          {/* CODE FOR LIST ITEM */}
          <Col
            md={2}
            style={{ backgroundColor: "#3B3F53" }}
            className="d-flex justify-content-center align-items-center"
          >
            {userList.length !== 0 ? (
              <List>
                {userList.map((entry) => (
                  <>
                    <ListItem key={entry.user._id} disablePadding>
                      <ListItemButton>
                        <Row>
                          <Col md={4} className="p-0">
                            <img
                              src={`/images/profilePictures/${entry.user.profile_image}`}
                              alt={entry.user.name}
                              style={{ width: "100px" }}
                              rounded
                            />
                          </Col>
                          <Col md={8}>
                            <h6 style={{ color: "white" }} className="mb-0">
                              {entry.user.name}
                            </h6>
                          </Col>
                        </Row>
                        {/* <Row className="pt-0">
                          <Col md={6} className="pr-0">
                            {entry.skill.skill_name}
                          </Col>
                          <Col md={6}>
                            {entry.user.years_of_experience} Years
                          </Col>
                        </Row> */}
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </>
                ))}
                <Row>
                  <Col md={12} className="d-flex justify-content-center mt-3">
                    <Button onClick={clearUserList} color="primary">
                      Clear List
                    </Button>
                  </Col>
                </Row>
              </List>
            ) : (
              <h6 className="text-secondary">( EMPTY )</h6>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DevShowcase;
