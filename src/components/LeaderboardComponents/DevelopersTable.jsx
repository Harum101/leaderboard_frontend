import React, { useEffect, useState } from "react";
import { Add, Search } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
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
import { useDispatch, useSelector } from "react-redux";

//Actions
// import { listUsers } from "actions/adminActions/userActions";
import { getAllUserSkills } from "actions/adminActions/userSkillActions";

const DevelopersTable = () => {
  const dispatch = useDispatch();

  const allUserSkills = useSelector((state) => state.getAllUserSkills);
  // const { loading, usersError, users } = usersList;
  const { loading, error, users } = allUserSkills;
  const [userSearch, setUserSearch] = useState("");
  const [searchedUser, setSearchedUser] = useState("");

  const userSearchHandler = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setUserSearch(searchQuery);

    console.log(users);

    const foundUsers = allUserSkills.users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery)
    );

    setSearchedUser(foundUsers);
  };

  const userTableData =
    searchedUser.length > 0 ? searchedUser : allUserSkills.users;

  useEffect(() => {
    dispatch(getAllUserSkills());
  }, [dispatch]);

  return (
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
              {userTableData.map((entry) => (
                <tr key={entry.user._id}>
                  <td>1</td>
                  <td>{entry.user.name}</td>
                  <td>{entry.score}</td>
                  <td>{entry.skill.skill_name}</td>
                  <td>{entry.user.years_of_experience} Years</td>
                  <td>{entry.skill_level}</td>
                  <td>
                    {entry.user.badge.map((bdg) => (
                      <img
                        src={`/images/${bdg.badge_image}`}
                        style={{ width: "40px" }}
                        alt={bdg.badge_image}
                      />
                    ))}
                  </td>
                  <td>
                    {/* <Row className="px-2"> */}
                    {/* <div className="d-inline-flex"> */}
                    <Button className="m-1 rounded-circle p-0">
                      <Add />
                    </Button>
                    {/* </div> */}
                    {/* </Row> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </CardBody>
    </Card>
  );
};

export default DevelopersTable;
