import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verification } from "actions/leaderboardActions/authActions";

const Verfication = () => {
  const { id } = useParams();
  const { token } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verification({ id, token }));
  }, [dispatch, id, token]);

  return (
    <Container>
      <div className="d-flex justify-content-center mt-5">
        <Row>
          <Col md={12} className="d-flex justify-content-center ">
            <h4>Verification Successful</h4>
          </Col>
          <Col md={12} className="d-flex justify-content-center">
            <CheckCircleOutlineRoundedIcon
              className="text-success"
              fontSize="large"
            />
          </Col>
          <Col md={12} className="d-flex justify-content-center mt-3">
            <Link to='/login'>
              <h5>Go to LOGIN Page</h5>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Verfication;
