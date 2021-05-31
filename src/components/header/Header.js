import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "react-bootstrap";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import Logo from "./Logo";
import { ThemeConsumer } from "styled-components";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);
    const link = settings.isSplash ? "/splash" : "home";
    //    return null;
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link
                    href="#home"
                    activeStyle={{ fontWeight: "bold" }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Home
                  </Nav.Link>

                  <NavDropdown
                    title="Projects"
                    id="basic-nav-dropdown"
                    activeStyle={{ fontWeight: "bold" }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    <NavDropdown.Item
                      href="#"
                      style={{ color: theme.secondaryText }}
                      onMouseEnter={(event) =>
                        onMouseEnter(event, theme.highlight)
                      }
                      onMouseOut={(event) => onMouseOut(event)}
                    >
                      CoinTracker
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      href="#"
                      style={{ color: theme.secondaryText }}
                      onMouseEnter={(event) =>
                        onMouseEnter(event, theme.highlight)
                      }
                      onMouseOut={(event) => onMouseOut(event)}
                    >
                      Campus Blockchain
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      href="#"
                      style={{ color: theme.secondaryText }}
                      onMouseEnter={(event) =>
                        onMouseEnter(event, theme.highlight)
                      }
                      onMouseOut={(event) => onMouseOut(event)}
                    >
                      AgriChain
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>  */}
                  </NavDropdown>

                  <Nav.Link
                    href="#link"
                    activeStyle={{ fontWeight: "bold" }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    FAQs
                  </Nav.Link>

                  <Nav.Link
                    href="#link"
                    activeStyle={{ fontWeight: "bold" }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>
          {/* <header className="header">


            <NavLink to={link} tag={Link} className="logo"></NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>

              <li>
                <NavLink
                  to="#"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="#"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Tab3
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Tab4
                </NavLink>
              </li>
            </ul>
          </header>  */}
        </div>
      </Fade>
    );
  }
}
export default Header;
