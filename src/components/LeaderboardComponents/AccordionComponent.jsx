import React from "react";
import { makeStyles } from "@mui/styles";
import { Circle, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: "20px",
    flexBasis: "33.33%",
    flexShrink: 0,
    color: "white",
  },
  secondaryHeading: {
    fontSize: "15px",
    color: "white",
  },
  background: {
    backgroundColor: "#4308a1",
    // backgroundColor: "#505e80",
  },
  body: {
    color: "white",
  },
}));

const AccordionComponent = ({ user }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {user.user.achievements.map((entry) => (
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className={`${classes.background} mt-3`}
        >
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: "white" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>
              {entry.mainTitle}
            </Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </AccordionSummary>
          <AccordionDetails className={`${classes.body} pt-0`}>
            {entry.subparts.map((subEntry) => (
              <Typography style={{ marginLeft: "1rem" }}>
                <Circle sx={{ fontSize: "10px" }} /> {subEntry.subTitle}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
      {/* <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Users</Typography>
          <Typography className={classes.secondaryHeading}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Advanced settings</Typography>
          <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
};

export default AccordionComponent;
