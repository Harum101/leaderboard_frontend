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
import { listUsers } from "actions/adminActions/userActions";

const DevelopersTable = () => {
  const dispatch = useDispatch();

  const usersList = useSelector((state) => state.usersList);
  const { loading, usersError, users } = usersList;
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

  const userTableData =
    searchedUser.length > 0 ? searchedUser : usersList.users;

  useEffect(() => {
    dispatch(listUsers());
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
                  <td>{user.profile_pic_url}</td>
                  <td>{user.years_of_experience}</td>
                  <td>TBC</td>
                  <td>TBC</td>
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
