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
import { useDispatch, useSelector } from "react-redux";
import {
  createHackathon,
  getHackathon,
} from "actions/adminActions/hackathonActions";
import { Alert } from "@mui/material";
import DateTime from "components/AdminComponents/DateTime";

const Forms = () => {
  //FORM ENTRY DATA
  const [hackathonDate, setHackathonDate] = useState("");
  const [hackathonTitle, setHackathonTitle] = useState("");
  const [hackathonDescription, setHackathonDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [hackathonPrize, setHackathonPrize] = useState("");

  const { success, error } = useSelector((state) => state.hackathonCreate);
  const { hackathon, loading } = useSelector((state) => state.hackathonGet);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createHackathon({
        hackathonTitle,
        hackathonDate,
        hackathonDescription,
        targetAudience,
        hackathonPrize,
      })
    );
  };
  const alertHandler = () => {
    dispatch(getHackathon());
    dispatch({ type: HDATE_CREATE_RESET });
    setHackathonTitle("");
    setHackathonDate("");
    setHackathonDescription("");
    setHackathonPrize("");
    setTargetAudience("");
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
                        <label>Title</label>
                        <Input
                          placeholder="Title"
                          type="text"
                          value={hackathonTitle}
                          required
                          onChange={(e) => setHackathonTitle(e.target.value)}
                        />
                      </FormGroup>
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
                      <FormGroup>
                        <label>Description</label>
                        <Input
                          placeholder="Description"
                          type="textarea"
                          value={hackathonDescription}
                          required
                          onChange={(e) =>
                            setHackathonDescription(e.target.value)
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>Target Audience</label>
                        <Input
                          placeholder="Target Audience"
                          type="text"
                          value={targetAudience}
                          required
                          onChange={(e) => setTargetAudience(e.target.value)}
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>Prize</label>
                        <Input
                          placeholder="Prize"
                          type="text"
                          value={hackathonPrize}
                          required
                          onChange={(e) => setHackathonPrize(e.target.value)}
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
                          <DateTime
                            hackathonTitle={hackathon?.hackathonTitle}
                            hackathonDate={hackathon?.hackathonDate}
                            hackathonDescription={
                              hackathon?.hackathonDescription
                            }
                            targetAudience={hackathon?.targetAudience}
                            hackathonPrize={hackathon?.hackathonPrize}
                          />
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
