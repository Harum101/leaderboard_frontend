import React, { useState } from "react";

import { useTimer } from "react-timer-hook";
import { Card, Col, Row } from "reactstrap";

const Timer = ({ hackathon }) => {
  const [timeExpired, setTimeExpired] = useState(false);
  const expiryTimestamp = new Date(hackathon.hackathonDate);
  console.log(expiryTimestamp);

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => setTimeExpired(true),
  });

  return (
    <>
      <h6 className="text-white mx-3 my-0 px-3">Time till next hackathon:</h6>
      <div style={{ textAlign: "center", marginRight: "1rem" }}>
        <div className="text-white" style={{ fontSize: "25px" }}>
          <Row>
            <Col className="p-0" style={{ maxWidth: "40px" }}>
              <Card style={{ width: "40px", marginBottom: "0px" }}>{days}</Card>
            </Col>
            <Col
              className="d-flex justify-content-center py-0 px-1"
              style={{ maxWidth: "5px" }}
            >
              :
            </Col>
            <Col className="p-0" style={{ maxWidth: "40px" }}>
              <Card style={{ width: "40px", marginBottom: "0px" }}>
                {hours}
              </Card>
            </Col>
            <Col
              className="d-flex justify-content-center py-0 px-1"
              style={{ maxWidth: "5px" }}
            >
              :
            </Col>
            <Col className="p-0" style={{ maxWidth: "40px" }}>
              <Card style={{ width: "40px", marginBottom: "0px" }}>
                <span>{minutes}</span>
              </Card>
            </Col>
            <Col
              className="d-flex justify-content-center py-0 px-1"
              style={{ maxWidth: "5px" }}
            >
              :
            </Col>
            <Col className="p-0" style={{ maxWidth: "40px" }}>
              <Card style={{ width: "40px", marginBottom: "0px" }}>
                {seconds}
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Timer;
