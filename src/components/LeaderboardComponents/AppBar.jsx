import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
} from "reactstrap";
// import Button from "@mui/material/Button";
import { Button } from "reactstrap";
import logixos_logo from "assets/img/logixos_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutCompany } from "actions/leaderboardActions/authActions";

const Appbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { companyInfo } = useSelector((state) => state.companyLogin);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const logoutHandler = () => {
    dispatch(logoutCompany());
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#2D3044" }}
      elevation={0}
      //   sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Link to="/">
          <img
            src={logixos_logo}
            style={{ width: "140px", marginLeft: "2rem" }}
            alt="logixos"
          ></img>
        </Link>
        <Nav className="d-flex ml-auto">
          <NavLink
            to="#"
            className="nav-NavLink text-white px-2 mx-1 d-flex align-items-center"
          >
            <strong>Features</strong>
          </NavLink>
          <NavLink
            to="/devshowcase"
            className="nav-NavLink text-white px-2 mx-1 d-flex align-items-center"
          >
            <strong>Our Developers</strong>
          </NavLink>
          <NavLink
            to="/pricing"
            className="nav-NavLink text-white px-2 mx-1 d-flex align-items-center"
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
                <DropdownToggle color="primary" caret>
                  Profile
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header className="mt-1 text-primary">
                    {companyInfo.name}
                  </DropdownItem>
                  <DropdownItem divider />
                  {companyInfo.isAdmin && (
                    <DropdownItem onClick={() => navigate("/admin/dashboard")}>
                      Admin Panel
                    </DropdownItem>
                  )}
                  <DropdownItem onClick={logoutHandler}>Log Out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavLink>
          ) : (
            <Link
              to="/login"
              style={{ marginRight: "3rem", marginLeft: "1.5rem" }}
            >
              <Button color="primary" className="px-3" outline>
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
