import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

// Components
import Appbar from "components/LeaderboardComponents/AppBar";
import { Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserSkills } from "actions/adminActions/userSkillActions";

//ACTIONS IMPORTS

// COPYRIGHT FUNCTION
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        LOGIXOS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Landing = () => {
  const dispatch = useDispatch();
  const allUserSkills = useSelector((state) => state.getAllUserSkills);
  const users = allUserSkills.users.sort((a, b) => b.score - a.score);

  console.log(users[1]?.user?.name);

  useEffect(() => {
    dispatch(getAllUserSkills());
  }, [dispatch]);

  return (
    // <ThemeProvider theme={defaultTheme}>
    <div
      style={{
        backgroundColor: "#191D2F",
        maxWidth: "100%",
        height: "100vh",
      }}
    >
      <Appbar />
    </div>
  );
};

export default Landing;
