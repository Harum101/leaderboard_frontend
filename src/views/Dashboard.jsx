import React from "react";
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
} from "reactstrap";
// core components

const Dashboard = () => {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Users Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table>
                  {/* add "responsive" for scrolls in table */}
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
                    <tr>
                      <td>Harry</td>
                      <td>harry@gmail.com</td>
                      <td>Link Here</td>
                      <td>Link Here</td>
                      <td>Link Here</td>
                      <td>Link Here</td>
                      <td>Link Here</td>
                      <td>
                        <Row className="px-2">
                          <Button className=" mx-1" color="danger">
                            Delete
                          </Button>
                          <Button className=" mx-1" color="success">
                            Update
                          </Button>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Skills Table</CardTitle>
              </CardHeader>
              <CardBody>
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
                    <tr>
                      <td>NodeJs</td>
                      <td>Image Here</td>
                      <td>
                        <Row className="px-2">
                          <Button className=" mx-1" color="danger">
                            Delete
                          </Button>
                          <Button className=" mx-1" color="success">
                            Update
                          </Button>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Badges Table</CardTitle>
              </CardHeader>
              <CardBody>
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
                    <tr>
                      <td>B1</td>
                      <td>Image Here</td>
                      <td>
                        <Row className="px-2">
                          <Button className=" mx-1" color="danger">
                            Delete
                          </Button>
                          <Button className=" mx-1" color="success">
                            Update
                          </Button>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
