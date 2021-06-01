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
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
  }
  onMouseEnter() {
    this.setState({ showMenu: true });
  }

  onMouseLeave() {
    setTimeout(() => {
      this.setState({ showMenu: false });
    }, 500);
  }

  render() {
    const theme = this.props.theme;
    console.log(theme);
    const link = settings.isSplash ? "/splash" : "home";
    //    return null;

    return (
      // <Fade top duration={1000} distance="20px">
      <>
        <SeoHeader />
        <div>
          <header className="header">
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link
                    href="/#/home"
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
                    href="/#/projects"
                    onMouseEnter={(event) => {
                      onMouseEnter(event, theme.highlight);
                      this.onMouseEnter();
                    }}
                    onMouseOut={(event) => onMouseOut(event)}
                    onMouseLeave={() => this.onMouseLeave()}
                    onClick={() => {
                      window.location.href = "/#/projects";
                    }}
                    show={this.state.showMenu}
                  >
                    <NavDropdown.Item
                      href="/#/cointracker"
                      style={{ color: theme.secondaryText }}
                      onMouseEnter={(event) =>
                        onMouseEnter(event, theme.highlight)
                      }
                      onMouseOut={(event) => onMouseOut(event)}
                    >
                      CoinTracker
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      href="/#/campusblockchain"
                      style={{ color: theme.secondaryText }}
                      onMouseEnter={(event) =>
                        onMouseEnter(event, theme.highlight)
                      }
                      onMouseOut={(event) => onMouseOut(event)}
                    >
                      Campus Blockchain
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      href="/#/agrichain"
                      style={{ color: theme.secondaryText }}
                      onMouseEnter={(event) =>
                        onMouseEnter(event, theme.highlight)
                      }
                      onMouseOut={(event) => onMouseOut(event)}
                    >
                      AgriChain
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link
                    href="/"
                    activeStyle={{ fontWeight: "bold" }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Our Team
                  </Nav.Link>

                  <Nav.Link
                    href="/"
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
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/agrichain"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Agrichain
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
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </header>  */}
        </div>
      </>
      // </Fade>
    );
  }
}
export default Header;
