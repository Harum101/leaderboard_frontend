import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import xforce from "assets/img/xforce.png";

// Components
import Appbar from "components/LeaderboardComponents/AppBar";
import { CardMedia, Chip } from "@mui/material";
import { Col, Row } from "reactstrap";
import { AutoGraph, Psychology, Stars } from "@mui/icons-material";
import DevelopersTable from "components/LeaderboardComponents/DevelopersTable";
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

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

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
        backgroundImage: `url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?w=740&t=st=1692168929~exp=1692169529~hmac=d522bc7d3f93579f87d44a5a46c06cecdd0a67c3b73cace4cf7fcc396cd4cc4a")`,
        maxWidth: "100%",
        height: "100%", // Set height to cover the browser screen
        // maxHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Appbar />
      {/* Hero unit */}
      
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 8, pb: 6 }}
        >
          <div className="d-flex justify-content-center mb-">
            <img src={xforce} style={{ width: "250px" }} alt="xforce" />
          </div>
          {/*   */}
        </Container>

      {/* End hero unit */}
      <Container maxWidth="md" component="main">
      <Card></Card>
        <Row>
          {/* 2nd Rank */}
          <Col>
            <Card
              sx={{
                height: 390,
                boxShadow: `0 0 16px rgba(192, 192, 192, 1)`, // Stronger silver glow shadow
                transition: "border-color 0.3s, box-shadow 0.3s", // Add transitions for smooth effect

                "&:hover": {
                  borderColor: "rgba(192, 192, 192, 1)", // Update border color on hover
                  boxShadow: `0 0 24px rgba(192, 192, 192, 1)`, // Stronger shadow on hover
                },
              }}
            >
              <CardMedia
                sx={{ height: 180 }}
                image={`/images/profilePictures/${users[1]?.user?.profile_image}`}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="d-flex justify-content-center"
                >
                  {users[1]?.user?.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="d-flex justify-content-center"
                >
                  Level: {users[1]?.skill_level}
                </Typography>
                <div className="py-2">
                  <Row className="mt-2">
                    <Col className="d-flex justify-content-center pr-1">
                      <Chip
                        icon={<Psychology />}
                        label={users[1]?.skill?.skill_name}
                        color="primary"
                        sx={{ width: "103px" }}
                      />
                    </Col>
                    <Col className="d-flex justify-content-center pl-1">
                      <Chip
                        icon={<AutoGraph />}
                        label={`${users[1]?.user?.years_of_experience} Years`}
                        color="success"
                        sx={{ width: "103px" }}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col className="d-flex justify-content-center pr-1">
                      <Chip
                        icon={<Stars />}
                        label={users[1]?.score}
                        color="warning"
                        sx={{ width: "103px" }}
                      />
                    </Col>
                    <Col className="d-flex justify-content-center pl-1">
                      {users[1]?.user?.badge.map((bdg) => (
                        <img
                          src={`/images/badges/${bdg.badge_image}`}
                          style={{ width: "35px" }}
                          alt={bdg.badge_image}
                        />
                      ))}
                    </Col>
                  </Row>
                </div>
              </CardContent>
            </Card>
          </Col>
          {/* 1st Rank */}
          <Col>
            <Card
              sx={{
                height: 400,
                boxShadow: `0 0 12px rgba(218, 165, 32, 0.8)`, // Golden glow shadow
                transition: "border-color 0.3s, box-shadow 0.3s", // Add transitions for smooth effect

                "&:hover": {
                  borderColor: "rgba(218, 165, 32, 1)", // Update border color on hover
                  boxShadow: `0 0 20px rgba(218, 165, 32, 1)`, // Update shadow on hover
                },
              }}
            >
              <CardMedia
                sx={{ height: 180 }}
                image={`/images/profilePictures/${users[0]?.user?.profile_image}`}
                title="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="d-flex justify-content-center"
                >
                  {users[0]?.user?.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="d-flex justify-content-center"
                >
                  Level: {users[0]?.skill_level}
                </Typography>
                <div className="py-2">
                  <Row className="mt-2">
                    <Col className="d-flex justify-content-center pr-1">
                      <Chip
                        icon={<Psychology />}
                        label={users[0]?.skill?.skill_name}
                        color="primary"
                        sx={{ width: "103px" }}
                      />
                    </Col>
                    <Col className="d-flex justify-content-center pl-1">
                      <Chip
                        icon={<AutoGraph />}
                        label={`${users[0]?.user?.years_of_experience} Years`}
                        color="success"
                        sx={{ width: "103px" }}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col className="d-flex justify-content-center pr-1">
                      <Chip
                        icon={<Stars />}
                        label={users[0]?.score}
                        color="warning"
                        sx={{ width: "103px" }}
                      />
                    </Col>
                    <Col className="d-flex justify-content-center pl-1">
                      {users[0]?.user?.badge.map((bdg) => (
                        <img
                          src={`/images/badges/${bdg.badge_image}`}
                          style={{ width: "35px" }}
                          alt={bdg.badge_image}
                        />
                      ))}
                    </Col>
                  </Row>
                </div>
              </CardContent>
            </Card>
          </Col>
          {/* 3rd Rank */}
          <Col>
            <Card
              sx={{
                boxShadow: `0 0 12px rgba(205, 127, 50, 0.8)`, // Bronze glow shadow
                transition: "border-color 0.3s, box-shadow 0.3s", // Add transitions for smooth effect

                "&:hover": {
                  borderColor: "rgba(205, 127, 50, 1)", // Update border color on hover
                  boxShadow: `0 0 20px rgba(205, 127, 50, 1)`, // Stronger shadow on hover
                },
              }}
            >
              <CardMedia
                sx={{ height: 180 }}
                image={`/images/profilePictures/${users[2]?.user?.profile_image}`}
                title="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="d-flex justify-content-center"
                >
                  {users[2]?.user?.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="d-flex justify-content-center"
                >
                  Level: {users[2]?.skill_level}
                </Typography>
                <div className="py-2">
                  <Row className="mt-2">
                    <Col className="d-flex justify-content-center pr-1">
                      <Chip
                        icon={<Psychology />}
                        label={users[2]?.skill?.skill_name}
                        color="primary"
                        sx={{ width: "103px" }}
                      />
                    </Col>
                    <Col className="d-flex justify-content-center pl-1">
                      <Chip
                        icon={<AutoGraph />}
                        label={`${users[2]?.user?.years_of_experience} Years`}
                        color="success"
                        sx={{ width: "103px" }}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col className="d-flex justify-content-center pr-1">
                      <Chip
                        icon={<Stars />}
                        label={users[2]?.score}
                        color="warning"
                        sx={{ width: "103px" }}
                      />
                    </Col>
                    <Col className="d-flex justify-content-center pl-1">
                      {users[2]?.user?.badge.map((bdg) => (
                        <img
                          src={`/images/badges/${bdg.badge_image}`}
                          style={{ width: "35px" }}
                          alt={bdg.badge_image}
                        />
                      ))}
                    </Col>
                  </Row>
                </div>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container maxWidth="lg" component="main">
        <div className="my-5">
          <DevelopersTable />
        </div>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </div>
    // </ThemeProvider>
  );
};

export default Landing;
