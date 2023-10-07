import React from "react";

const DateTime = ({
  hackathonTitle,
  hackathonDate,
  hackathonDescription,
  targetAudience,
  hackathonPrize,
}) => {
  console.log(hackathonDate);
  const formattedDatetime = new Date(hackathonDate);

  const formattedString = formattedDatetime.toLocaleString();
  return (
    <div className="mb-5">
      <span>
        <h6
          className="d-flex justify-content-center text-primary"
          style={{ fontSize: "20px" }}
        >
          Title:
        </h6>
        <p
          className="d-flex justify-content-center text-primary"
          style={{ fontSize: "26px" }}
        >
          {hackathonTitle}
        </p>
      </span>
      <span>
        <h6
          className="d-flex justify-content-center text-primary"
          style={{ fontSize: "20px" }}
        >
          Date/Time:
        </h6>
        <p
          className="d-flex justify-content-center text-primary"
          style={{ fontSize: "26px" }}
        >
          {formattedString}
        </p>
      </span>
      <span>
        <h6
          className="d-flex justify-content-center text-primary"
          style={{ fontSize: "20px" }}
        >
          Target Audience:
        </h6>
        <p
          className="d-flex justify-content-center text-primary"
          style={{ fontSize: "26px" }}
        >
          {targetAudience}
        </p>
      </span>
      <span>
        <h6
          className="d-flex justify-content-center text-primary"
          style={{ fontSize: "20px" }}
        >
          Prize:
        </h6>
        <p
          className="d-flex justify-content-center text-primary"
          style={{ fontSize: "26px" }}
        >
          {hackathonPrize}
        </p>
      </span>
      <span>
        <h6
          className="d-flex justify-content-center text-primary"
          style={{ fontSize: "20px" }}
        >
          Description:
        </h6>
        <p
          className="d-flex justify-content-center text-primary"
          style={{ fontSize: "16px" }}
        >
          {hackathonDescription}
        </p>
      </span>
    </div>
  );
};

export default DateTime;
