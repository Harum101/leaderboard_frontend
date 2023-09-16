import React, { useEffect, useState } from "react";
import { Add, Search } from "@mui/icons-material";
import { CircularProgress, Tooltip } from "@mui/material";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Table,
} from "reactstrap";
import { useSelector } from "react-redux";
import RightDrawer from "./RightDrawer";
import DevList from "./DevList";

const DevelopersTable = () => {
  // const dispatch = useDispatch();

  const allUserSkills = useSelector((state) => state.getAllUserSkills);
  const { companyInfo } = useSelector((state) => state.companyLogin);

  // const { loading, usersError, users } = usersList;
  const { loading } = allUserSkills;
  const [userSearch, setUserSearch] = useState("");
  const [searchedUser, setSearchedUser] = useState("");
  const [userList, setUserList] = useState([]);

  const userSearchHandler = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setUserSearch(searchQuery);

    const foundUsers = allUserSkills.users.filter((entry) =>
      entry.user.name.toLowerCase().includes(searchQuery)
    );

    setSearchedUser(foundUsers);
  };

  const userTableData =
    searchedUser.length > 0
      ? searchedUser
      : allUserSkills.users.sort((a, b) => b.score - a.score);

  useEffect(() => {
    console.log(userList);
  }, [userList]);

  return (
    <Row>
      <Col md={8}>
        <Card>
          <CardHeader>
            <Row>
              <Col md="4">
                <CardTitle tag="h4">Top Developers</CardTitle>
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
                    <th>Rank</th>
                    <th>Devloper</th>
                    <th>Score</th>
                    <th>Skill</th>
                    <th>Experience</th>
                    <th>Skill Level</th>
                    <th>Badges</th>
                  </tr>
                </thead>
                <tbody>
                  {userTableData.map((entry, index) => (
                    <tr key={entry.user._id}>
                      <td>{index + 1}</td>
                      <td>{entry.user.name}</td>
                      <td>{entry.score}</td>
                      <td>{entry.skill.skill_name}</td>
                      <td>{entry.user.years_of_experience} Years</td>
                      <td>{entry.skill_level}</td>
                      <td>
                        {entry.user.badge.map((bdg) => (
                          <img
                            key={bdg._id}
                            src={`/images/badges/${bdg.badge_image}`}
                            style={{ width: "40px" }}
                            alt={bdg.badge_image}
                          />
                        ))}
                      </td>
                      <td className="d-flex justify-content-center">
                        <Tooltip
                          title={companyInfo ? "Add To List" : "Login First"}
                        >
                          {/* userList */}
                          <span>
                            <Button
                              className="m-1 rounded-circle p-0"
                              disabled={
                                !companyInfo ||
                                userList.some(
                                  (list) => list.user._id === entry.user._id
                                )
                              }
                              onClick={() => setUserList([...userList, entry])}
                            >
                              <Add />
                            </Button>
                          </span>
                        </Tooltip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </CardBody>
        </Card>
      </Col>
      <Col md={4}>
        <DevList userList={userList} setUserList={setUserList} />
      </Col>
    </Row>
  );
};

export default DevelopersTable;
