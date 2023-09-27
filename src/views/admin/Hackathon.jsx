import React, { useEffect, useState } from "react";
import { HDATE_CREATE_RESET } from "constants/adminConstants";
// reactstrap components
import {
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Input,
  Form,
  FormGroup,
} from "reactstrap";
// COMPONENTS
import SkillForm from "components/Forms/SkillForm";
import UserForm from "components/Forms/UserForm";
import BadgeForm from "components/Forms/BadgeForm";
import { useDispatch, useSelector } from "react-redux";
import {
  createHackathon,
  getHackathon,
} from "actions/adminActions/hackathonActions";
import { Alert } from "@mui/material";
import DateTime from "components/AdminComponents/DateTime";

const Forms = () => {
  const [hackathonDate, setHackathonDate] = useState("");
  const { success, error } = useSelector((state) => state.hackathonCreate);
  const { hackathon, loading } = useSelector((state) => state.hackathonGet);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createHackathon({ hackathonDate }));
  };
  const alertHandler = () => {
    dispatch(getHackathon());
    dispatch({ type: HDATE_CREATE_RESET });
    setHackathonDate("");
  };
  useEffect(() => {
    dispatch(getHackathon());
  }, [dispatch]);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <Row>
                  <Col md={6}>
                    <CardTitle tag="h5">Date/Time of Next Hackathon</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitHandler} encType="multipart/form-data">
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <label>
                          Date/Time (Changing this will delete the current
                          hackathon time):
                        </label>
                        <Input
                          placeholder="Time"
                          type="datetime-local"
                          value={hackathonDate}
                          required
                          onChange={(e) => setHackathonDate(e.target.value)}
                        />
                      </FormGroup>
                      {success && (
                        <Alert
                          onClose={alertHandler}
                          severity="success"
                          className="my-2"
                        >
                          Hackathon Created Successfully!
                        </Alert>
                      )}
                      {error && (
                        <Alert
                          onClose={alertHandler}
                          severity="danger"
                          className="my-2"
                        >
                          {error}
                        </Alert>
                      )}

                      <div className="update ml-auto mr-auto d-flex justify-content-center">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Change
                        </Button>
                      </div>
                    </Col>
                    <Col
                      md={6}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <div className="d- flex justify-content-center">
                        {!loading ? (
                          <DateTime hackathon={hackathon?.hackathonDate} />
                        ) : (
                          <h5>Loading...</h5>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Forms;
