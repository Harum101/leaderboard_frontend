import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { Card } from "reactstrap";
import styles from "assets/css/styles.module.css";
import empty from "assets/img/empty.png";

// Components
import Appbar from "components/LeaderboardComponents/AppBar";
import { getAllUserSkills } from "actions/adminActions/userSkillActions";
import { listSkills } from "actions/adminActions/skillActions";
import { Add, HighlightOffOutlined, Refresh } from "@mui/icons-material";
import {
  Divider,
  IconButton,
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
  const skillsList = useSelector((state) => state.skillsList);
  const { companyInfo } = useSelector((state) => state.companyLogin);
  //   const users = allUserSkills.users.sort((a, b) => b.score - a.score);

  // COMPONENT LEVEL STATES
  const [userList, setUserList] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  // COMPONENT LEVEL STATES FOR FILTERS
  const [skillFilter, setSkillFilter] = useState("Skill");
  const [levelFilter, setLevelFilter] = useState("Level");
  const [experienceFilter, setExperienceFilter] = useState("Experience");

  const clearUserList = (event) => {
    event.stopPropagation();
    setUserList([]);
  };

  useEffect(() => {
    dispatch(getAllUserSkills());
    dispatch(listSkills());
    console.log(skillFilter, levelFilter, experienceFilter);
  }, [dispatch, experienceFilter, levelFilter, skillFilter]);

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
            <Row className="my-2 mt-4" style={{ marginRight: "1rem" }}>
              <Col md={6}>
                <h4 className="my-0 text-white">Our Developers</h4>
              </Col>
              <Col md={6} className="d-flex justify-content-end me-1">
                {/* SKILL INPUT */}
                <Input
                  type="select"
                  id="filter"
                  style={{
                    width: "7rem",
                    backgroundColor: "transparent",
                    color: "white",
                    marginRight: "7px",
                  }}
                  value={skillFilter}
                  onChange={(e) => setSkillFilter(e.target.value)}
                >
                  <option value="" selected hidden>
                    {skillFilter}
                  </option>
                  {skillsList.skills.map((skill) => (
                    <option
                      key={skill.skill_name}
                      value={skill.skill_name}
                      style={{
                        color: "black",
                      }}
                    >
                      {skill.skill_name}
                    </option>
                  ))}
                </Input>
                {/* SKILL LEVEL INPUT */}
                <Input
                  type="select"
                  id="filter"
                  style={{
                    width: "8.5rem",
                    backgroundColor: "transparent",
                    color: "white",
                    marginRight: "7px",
                  }}
                  value={levelFilter}
                  onChange={(e) => setLevelFilter(e.target.value)}
                >
                  <option value="" selected hidden>
                    {levelFilter}
                  </option>
                  <option style={{ color: "black" }}>Beginner</option>
                  <option style={{ color: "black" }}>Intermediate</option>
                  <option style={{ color: "black" }}>Experienced</option>
                </Input>
                {/* EXPERIENCE INPUT */}
                <Input
                  type="select"
                  id="filter"
                  style={{
                    width: "8rem",
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                  value={experienceFilter}
                  onChange={(e) => setExperienceFilter(e.target.value)}
                >
                  <option value="" selected hidden>
                    {experienceFilter}
                  </option>
                  <option value={1} style={{ color: "black" }}>
                    1 Year
                  </option>
                  <option value={2} style={{ color: "black" }}>
                    2 Years
                  </option>
                  <option value={3} style={{ color: "black" }}>
                    3 Years
                  </option>
                </Input>
                <div className="d-flex justify-content-center align-items-center">
                  <IconButton
                    onClick={() => {
                      setSkillFilter("Skill");
                      setExperienceFilter("Experience");
                      setLevelFilter("Level");
                    }}
                  >
                    <Refresh
                      sx={{ width: "30px", marginLeft: "5px" }}
                      className="text-white"
                    />
                  </IconButton>
                </div>
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
                    <Card className={`mt-3 mb-0 ${styles.neonBorder}`}>
                      <Row className="m-1">
                        <Col md={4} className="d-flex align-items-center">
                          <img
                            src={`/images/profilePictures/${entry.user.profile_image}`}
                            style={{
                              width: "80px",
                              height: "65px",
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
              <List className="mx-2">
                {userList.map((entry) => (
                  <>
                    <ListItem
                      key={entry.user._id}
                      disablePadding
                      className="my-2"
                    >
                      <Row>
                        <Col
                          md={4}
                          className="d-flex justify-content-center align-items-center p-0"
                        >
                          <img
                            src={`/images/profilePictures/${entry.user.profile_image}`}
                            alt={entry.user.name}
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Col>
                        <Col
                          md={6}
                          style={{ paddingLeft: "5px", paddingRight: "0px" }}
                        >
                          <h6 style={{ color: "white" }} className="mb-0">
                            {entry.user.name}
                          </h6>
                          <p className="text-white mb-0">
                            {entry.skill.skill_name}
                          </p>
                        </Col>
                        <Col md={2} className="d-flex align-items-center px-0">
                          <IconButton
                            onClick={() => {
                              setUserList(
                                userList.filter(
                                  (user) => user._id !== entry._id
                                )
                              );
                            }}
                          >
                            <HighlightOffOutlined className="text-white" />
                          </IconButton>
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
              <div>
                <img src={empty} style={{ width: "10rem" }} alt="empty" />
                <h6 className="d-flex justify-content-center text-secondary mt-3">
                  YOUR LIST IS EMPTY
                </h6>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DevShowcase;
