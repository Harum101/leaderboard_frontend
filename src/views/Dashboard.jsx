import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// reactstrap components
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
  InputGroupText,
} from "reactstrap";
// Icons
import { Delete, Search, Update } from "@mui/icons-material";
import { CircularProgress, IconButton, TextField } from "@mui/material";

// Actions
import { listUsers } from "actions/adminActions/userActions";
import { listBadges } from "actions/adminActions/badgeActions";
import { listSkills } from "actions/adminActions/skillActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);
  const badgesList = useSelector((state) => state.badgesList);
  const skillsList = useSelector((state) => state.skillsList);
  const { loadingUsers, usersError, users } = usersList;
  const { loadingBadges, badgesError, badges } = badgesList;
  const { loadingSkills, skillsError, skills } = skillsList;
  const loading = loadingUsers && loadingBadges && loadingSkills;

  const userSearchHandler = () => {
    console.log("working");
  };
  const skillSearchHandler = () => {
    console.log("working");
  };
  const badgeSearchHandler = () => {
    console.log("working");
  };

  useEffect(() => {
    dispatch(listUsers());
    dispatch(listBadges());
    dispatch(listSkills());
  }, [dispatch]);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col md="4">
                    <CardTitle tag="h4">Users Table</CardTitle>
                  </Col>
                  <Col md="4"></Col>
                  <Col md="4" className="d-flex justify-content-end">
                    <InputGroup>
                      <Input placeholder="Search..." />
                      <InputGroupAddon addonType="append">
                        <Button
                          color="primary"
                          onClick={userSearchHandler}
                          className="m-0"
                        >
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
                      {users.map((user) => (
                        <tr key={user._id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.linkedin_url}</td>
                          <td>{user.profile_pic_url}</td>
                          <td>{user.years_of_experience}</td>
                          <td>TBC</td>
                          <td>TBC</td>
                          <td>
                            <Row className="px-2">
                              <div className="d-inline-flex">
                                <Button className=" m-1" color="danger">
                                  <Delete />
                                </Button>
                                <Button className=" m-1" color="success">
                                  <Update />
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
                    <CardTitle tag="h4">Skills Table</CardTitle>
                  </Col>
                  <Col md="7" className="d-flex justify-content-end">
                    <InputGroup>
                      <Input placeholder="Search..." />
                      <InputGroupAddon addonType="append">
                        <Button
                          color="primary"
                          onClick={skillSearchHandler}
                          className="m-0"
                        >
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
                      {skills.map((skill) => (
                        <tr key={skill._id}>
                          <td>{skill.skill_name}</td>
                          <td>{skill.skill_pic_url}</td>
                          <td>
                            <Row className="px-2">
                              <Button className=" m-1" color="danger">
                                <Delete />
                              </Button>
                              <Button className=" m-1" color="success">
                                <Update />
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
                    <CardTitle tag="h4">Badges Table</CardTitle>
                  </Col>
                  <Col md="7" className="d-flex justify-content-end">
                    <InputGroup>
                      <Input placeholder="Search..." />
                      <InputGroupAddon addonType="append">
                        <Button
                          color="primary"
                          onClick={badgeSearchHandler}
                          className="m-0"
                        >
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
                      {badges.map((badge) => (
                        <tr key={badge._id}>
                          <td>{badge.badge_name}</td>
                          <td>{badge.badge_pic_url}</td>
                          <td>
                            <Row>
                              <Button className=" m-1" color="danger">
                                <Delete />
                              </Button>
                              <Button className=" m-1" color="success">
                                <Update />
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
