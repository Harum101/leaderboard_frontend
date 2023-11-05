import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  // const activeRoute = (routeName) => {
  //   return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  // };
  const isActive = (url) => {
    const path = location.pathname;
    return url === path ? "active" : "";
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div className="sidebar" data-color="black" data-active-color="info">
      <div className="logo">
        {/* <a href="#" className="simple-text logo">
          <div className="logo-img">
            <img
              src="/logixos_logo.png"
              height="50px"
              width="200px"
              alt="logixos-logo"
            />
          </div>
        </a> */}
        <Link
          to={"/admin/dashboard"}
          className="d-flex justify-content-center simple-text logo-normal"
        >
          LOGIXOS
        </Link>
        {/* <a
          href="/admin/dashboard"
          className="d-flex justify-content-center simple-text logo-normal"
        ></a> */}
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          <li className={isActive("/admin/dashboard")}>
            {/* className={
                  activeRoute(prop.path) + (prop.pro ? "active-pro" : "")
                }
                key={key} */}
            <NavLink to="/admin/dashboard" className="nav-NavLink">
              <i className="nc-icon nc-bank" />
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li className={isActive("/admin/forms")}>
            <NavLink to="/admin/forms" className="nav-NavLink">
              <i className="nc-icon nc-paper" />
              <p>Forms</p>
            </NavLink>
          </li>
          <li className={isActive("/admin/hackathon")}>
            <NavLink to="/admin/hackathon" className="nav-NavLink">
              <i className="nc-icon nc-time-alarm" />
              <p>Hackathon</p>
            </NavLink>
          </li>
          <li className={isActive("/admin/achievements")}>
            <NavLink to="/admin/achievements" className="nav-NavLink">
              <i className="nc-icon nc-trophy" />
              <p>Achievements</p>
            </NavLink>
          </li>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
