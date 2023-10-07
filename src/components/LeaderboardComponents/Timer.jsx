import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useTimer } from "react-timer-hook";
import { Card, Col, Row } from "reactstrap";
import HackathonDialog from "./HackathonDialog";

const Timer = ({ hackathon }) => {
  const [timeExpired, setTimeExpired] = useState(false);
  const [open, setOpen] = useState(false);
  const expiryTimestamp = new Date(hackathon.hackathonDate);

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => setTimeExpired(true),
  });

  const handleDialog = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      {" "}
      {open && (
        <HackathonDialog open={open} setOpen={setOpen} hackathon={hackathon} />
      )}
      <Link onClick={handleDialog}>
        <h6 className="text-white mx-3 my-0 px-3">
          {hackathon.hackathonTitle} (Countdown) :
        </h6>
      </Link>
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
