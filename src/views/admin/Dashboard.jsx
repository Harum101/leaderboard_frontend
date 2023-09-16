import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// Reactstrap Components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
} from "reactstrap";

// Icons
import { Delete, Search, Edit } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

// Actions
import { listUsers } from "actions/adminActions/userActions";
import { listBadges } from "actions/adminActions/badgeActions";
import { listSkills } from "actions/adminActions/skillActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersList = useSelector((state) => state.usersList);
  const badgesList = useSelector((state) => state.badgesList);
  const skillsList = useSelector((state) => state.skillsList);
  const { companyInfo } = useSelector((state) => state.companyLogin);
  const { loadingUsers, usersError, users } = usersList;
  const { loadingBadges, badgesError, badges } = badgesList;
  const { loadingSkills, skillsError, skills } = skillsList;
  const loading = loadingUsers && loadingBadges && loadingSkills;

  //USER SEARCH HANDLING
  const [userSearch, setUserSearch] = useState("");
  const [searchedUser, setSearchedUser] = useState("");

  const userSearchHandler = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setUserSearch(searchQuery);

    const foundUsers = usersList.users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery)
    );
    setSearchedUser(foundUsers);
  };

  const userEditHandler = (id) => {
    navigate(`/admin/updateuser/${id}`);
  };

  const userTableData =
    searchedUser.length > 0 ? searchedUser : usersList.users;

  //BADGE SEARCH HANDLING
  const [badgeSearch, setBadgeSearch] = useState("");
  const [searchedBadges, setSearchedBadges] = useState([]);

  const badgeSearchHandler = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setBadgeSearch(searchQuery);

    const foundBadges = badgesList.badges.filter((badge) =>
      badge.badge_name.toLowerCase().includes(searchQuery)
    );
    setSearchedBadges(foundBadges);
  };

  const badgeTableData =
    searchedBadges.length > 0 ? searchedBadges : badgesList.badges;

  //SKILL SEARCH HANDLING
  const [skillSearch, setSkillSearch] = useState("");
  const [searchedSkills, setSearchedSkills] = useState([]);

  const skillSearchHandler = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setSkillSearch(searchQuery);

    const foundSkills = skillsList.skills.filter((skill) =>
      skill.skill_name.toLowerCase().includes(searchQuery)
    );
    setSearchedSkills(foundSkills);
  };

  const skillTableData =
    searchedSkills.length > 0 ? searchedSkills : skillsList.skills;

  /*----------USE EFFECT-----------*/
  useEffect(() => {
    if (companyInfo && companyInfo.isAdmin) {
      dispatch(listUsers());
      dispatch(listBadges());
      dispatch(listSkills());
    } else {
      navigate("/login");
    }
  }, [companyInfo, dispatch, navigate]);

  /*----------DASHBOARD RENDER-----------*/
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col md="4">
                    <CardTitle tag="h4">Users</CardTitle>
                  </Col>
                  <Col md="4"></Col>
                  <Col md="4" className="d-flex justify-content-end">
                    <InputGroup>
                      <Input
                        placeholder="Search..."
                        value={userSearch}
                        onChange={userSearchHandler}
                      />
                      <InputGroupAddon addonType="append">
                        <Button color="primary" className="m-0">
                          <Search />
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                {loading ? (
                  <div className="d-flex align-items-center">
                    <CircularProgress className="mb-2" />
                  </div>
                ) : (
                  <Table>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>LinkedIn</th>
                        <th>Profile Pic</th>
                        <th>Skill</th>
                        <th>Skill Level</th>
                        <th>Badge</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userTableData.map((user) => (
                        <tr key={user._id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.linkedin_url}</td>
                          <td>
                            <img
                              src={`/images/profilePictures/${user.profile_image}`}
                              alt={user.name}
                              style={{ width: "50px" }}
                              rounded
                            />
                          </td>
                          <td>{user.years_of_experience}</td>
                          <td>TBC</td>
                          <td>TBC</td>
                          <td>
                            <Row className="px-2">
                              <div className="d-inline-flex">
                                <Button className=" m-1" color="danger">
                                  <Delete />
                                </Button>
                                <Button
                                  className=" m-1"
                                  color="success"
                                  onClick={() => userEditHandler(user._id)}
                                >
                                  <Edit />
                                </Button>
                              </div>
                            </Row>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <Row>
                  <Col md="5">
                    <CardTitle tag="h4">Skills</CardTitle>
                  </Col>
                  <Col md="7" className="d-flex justify-content-end">
                    <InputGroup>
                      <Input
                        placeholder="Search..."
                        value={skillSearch}
                        onChange={skillSearchHandler}
                      />
                      <InputGroupAddon addonType="append">
                        <Button color="primary" className="m-0">
                          <Search />
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                {loading ? (
                  <CircularProgress className="mb-2" />
                ) : (
                  <Table>
                    {/* add "responsive" for scrolls in table */}
                    <thead className="text-primary">
                      <tr>
                        <th>Skill Name</th>
                        <th>Skill Image</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {skillTableData.map((skill) => (
                        <tr key={skill._id}>
                          <td>{skill.skill_name}</td>
                          <td>
                            <img
                              src={`/images/skills/${skill.skill_image}`}
                              alt={skill.skill_name}
                              style={{ width: "50px" }}
                              rounded
                            />
                          </td>
                          <td>
                            <Row className="px-2">
                              <Button className=" m-1" color="danger">
                                <Delete />
                              </Button>
                              <Button className=" m-1" color="success">
                                <Edit />
                              </Button>
                            </Row>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <Row>
                  <Col md="5">
                    <CardTitle tag="h4">Badges</CardTitle>
                  </Col>
                  <Col md="7" className="d-flex justify-content-end">
                    <InputGroup>
                      <Input
                        placeholder="Search..."
                        value={badgeSearch}
                        onChange={badgeSearchHandler}
                      />
                      <InputGroupAddon addonType="append">
                        <Button color="primary" className="m-0">
                          <Search />
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                {loading ? (
                  <CircularProgress className="mb-2" />
                ) : (
                  <Table>
                    {/* add "responsive" for scrolls in table */}
                    <thead className="text-primary">
                      <tr>
                        <th>Badge Name</th>
                        <th>Badge Image</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {badgeTableData.map((badge) => (
                        <tr key={badge._id}>
                          <td>{badge.badge_name}</td>
                          <td>
                            <img
                              src={`/images/badges/${badge.badge_image}`}
                              alt={badge.badge_name}
                              style={{ width: "50px" }}
                              rounded
                            />
                          </td>
                          <td>
                            <Row>
                              <Button className=" m-1" color="danger">
                                <Delete />
                              </Button>
                              <Button className=" m-1" color="success">
                                <Edit />
                              </Button>
                            </Row>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
