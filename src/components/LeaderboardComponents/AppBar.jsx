import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link, NavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
} from "reactstrap";
// import Button from "@mui/material/Button";
import { Button } from "reactstrap";
import logixos from "assets/img/logixos.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutCompany } from "actions/leaderboardActions/authActions";

const Appbar = () => {
  const dispatch = useDispatch();
  const { companyInfo } = useSelector((state) => state.companyLogin);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const logoutHandler = () => {
    dispatch(logoutCompany());
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      //   sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Link to="/">
          <img
            src={logixos}
            style={{ width: "140px", marginLeft: "2rem" }}
            alt="logixos"
          ></img>
        </Link>
        <Nav className="d-flex ml-auto">
          <NavLink
            to="#"
            className="nav-NavLink text-secondary px-2 mx-1 d-flex align-items-center"
          >
            <strong>Features</strong>
          </NavLink>
          <NavLink
            to="#"
            className="nav-NavLink text-secondary px-2 mx-1 d-flex align-items-center"
          >
            <strong>Enterprise</strong>
          </NavLink>
          <NavLink
            to="/pricing"
            className="nav-NavLink text-secondary px-2 mx-1 d-flex align-items-center"
          >
            <strong>Pricing</strong>
          </NavLink>

          {companyInfo ? (
            <NavLink style={{ marginRight: "3rem", marginLeft: "1.5rem" }}>
              <Dropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                direction={"down"}
              >
                <DropdownToggle caret>Profile</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header className="mt-1">
                    {companyInfo.name}
                  </DropdownItem>
                  {/* <DropdownItem>Some Action</DropdownItem>
                  <DropdownItem text>Dropdown Item Text</DropdownItem>
                  <DropdownItem disabled>Action (disabled)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Foo Action</DropdownItem>
                  <DropdownItem>Bar Action</DropdownItem> */}
                  <DropdownItem onClick={logoutHandler}>Log Out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavLink>
          ) : (
            <Link
              to="/login"
              style={{ marginRight: "3rem", marginLeft: "1.5rem" }}
            >
              <Button color="dark" className="px-3" outline>
                Log In
              </Button>
            </Link>
          )}
        </Nav>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
