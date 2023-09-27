import React from "react";

const DateTime = ({ hackathon }) => {
  const formattedDatetime = new Date(hackathon);

  const formattedString = formattedDatetime.toLocaleString();
  return (
    <div className="mb-5">
      <h6
        className="d-flex justify-content-center text-primary"
        style={{ fontSize: "26px" }}
      >
        Date/Time:
      </h6>
      <h6
        className="d-flex justify-content-center text-primary"
        style={{ fontSize: "26px" }}
      >
        {formattedString}
      </h6>
    </div>
  );
};

export default DateTime;
