import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link, NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// import Button from "@mui/material/Button";
import { Button } from "reactstrap";
import logixos from "assets/img/logixos.png";

const Appbar = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      //   sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <img src={logixos} style={{ width: "180px" }} alt="logixos"></img>
        <Nav className="d-flex ml-auto">
          <NavLink to="#" className="nav-NavLink text-secondary px-2 mx-1">
            Features
          </NavLink>
          <NavLink to="#" className="nav-NavLink text-secondary px-2 mx-1">
            Enterprise
          </NavLink>
          <NavLink to="#" className="nav-NavLink text-secondary px-2 mx-1">
            Support
          </NavLink>
        </Nav>
        <Link to="login">
          <Button color="dark" className="px-3 mx-2" outline>
            Log In
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
