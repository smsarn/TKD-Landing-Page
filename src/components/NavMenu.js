import React, { Component } from "react";
import { Redirect } from "react-router";
import { Glyphicon, Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { AppletDescTooltip } from "./AppletDescTooltip";

import "./NavMenu.css";
import screenShareMsgEn from "../Images/toolkit.direct_quick.tip_20.8.14.gif";
import screenShareMsgFr from "../Images/toolkit.direct_quick.tip_20.8.14_Fr.gif";

import imgTipsEn from "../Images/tips.jpg";
import imgTipsFr from "../Images/tips.jpg";

import info from "../Images/infoWhite.png";
import infoG from "../Images/infoGrey.png";
import packageJson from '../../package.json';



import { NAVBAR_SWITCH_WIDTH, PATHS, TOOLKIT, MENU_TEXT } from "../Utils/util";

const NO_APPLETS = 8;

const LineSeperator = () => {
  return (
    <hr
      style={{
        marginLeft: "0px",
        marginRight: "0px",
        marginBottom: "10px",
        marginTop: "0px",
        borderTop: "2px solid rgba(150, 150, 150, 0.3)",
      }}
    />
  );
};

const CSW_Non_Windows = (lang, pos, item, selectedApplet) => {
  let marginLeft = { marginLeft: isTablet() ? "20px" : "30px" };
  return (
    <li style={{ margin: "15px" }}>
      <LineSeperator />{" "}
      <div className="nav navbar-nav" style={marginLeft}>
        <span id={item} style={{ color: "grey", marginRight: "10px" }}>
          {TOOLKIT[lang][item]}
        </span>
        {
          <span className="newMsg">
            {lang === "en" ? "(Windows-only)" : "(Windows-uniquement)"}{" "}
          </span>
        }
        <span data-tip data-for={item}></span>
        <AppletDescTooltip pos={pos} applet={item} lang={lang} />
      </div>
    </li>
  );
};

const SaveMessage = (props) => {
  return (
    <li>
      <span>
        <input
          className="saveMsg"
          style={props.saveMessageStyle}
          type="button"
          value={props.message}
        />{" "}
      </span>
    </li>
  );
};

const Coushin = () => {
  return <div style={{ marginBottom: "50px" }}></div>;
};

function isTablet() {
  const userAgent = navigator.userAgent.toLowerCase();

  let isMacIntel;
  try {
    isMacIntel = /MacIntel/.test(navigator.userAgentData.platform);
  } catch (error) {
    isMacIntel = false;
  }

  if (isMacIntel === false) {
    try {
      isMacIntel = /MacIntel/.test(navigator.userAgent);
    } catch (error) {
      isMacIntel = false;
    }
  }

  let tablet =
    /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
      userAgent
    );
  tablet =
    tablet ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && isMacIntel);
  return tablet;
}

export class NavMenu extends Component {
  displayName = "PPI APIs";
  reload = () => {
    window.location.reload();
  };
  constructor(props) {
    super(props);
    this.el1 = React.createRef();
    this.el2 = React.createRef();
    this.state = {
      width: 0,
      height: 0,
      sideBarMinimized: false,
      showSaveMsg: false,
    };
    this.msgVisible = false;
    this.checkedRemoveLogo = false;
    this.AppletY = 100;
    this.info = {
      PA: "hidden",
      PLA: "hidden",
      INA: "hidden",
      EP: "hidden",
      WL: "hidden",
      LIFO: "hidden",
      CA: "hidden",
      EB: "hidden",
      BR: "hidden",
      IR: "hidden",
      JL: "hidden",
      IA: "hidden",
      CSW: "hidden",
    };
    this.infoDefault = {
      PA: "hidden",
      PLA: "hidden",
      INA: "hidden",
      EP: "hidden",
      WL: "hidden",
      LIFO: "hidden",
      CA: "hidden",
      EB: "hidden",
      BR: "hidden",
      IR: "hidden",
      JL: "hidden",
      IA: "hidden",
      CSW: "hidden",
    };
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);

    window.addEventListener("mousemove", this.mousemove);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("mousemove", this.mousemove);
  }

  mousemove = (event) => {
    this.AppletY = event.clientY;
  };

  changeLogo = () => {
    var iframe = document.getElementById("goh");
    var elmnt = iframe.contentWindow.document.getElementsByid("saveButton");
  };

  fadeBackground = () => {
    var iframe = document.getElementById("goh");
    var banner = document.getElementById("banner");
    if (banner !== undefined && banner !== null) banner.style.opacity = 0.5;
    if (iframe !== undefined && iframe !== null) iframe.style.opacity = 0.5;
  };

  focusBackground = () => {
    var iframe = document.getElementById("goh");
    var banner = document.getElementById("banner");
    if (banner !== undefined && banner !== null) banner.style.opacity = 1;
    if (iframe !== undefined && iframe !== null) iframe.style.opacity = 1;
  };

  sideBarHideShow = () => {
    const sb = !this.state.sideBarMinimized;
    this.props.minimizeSideBar();
    this.setState({ sideBarMinimized: sb });
  };

  handleMouseIn(e) {
    this.info = {
      ...this.infoDefault,
    };
    const showTips = !isTablet(); // false; // until ready to go

    if (showTips) this.info[e.target.id] = "visible";

    e.target.style.color = "white";
    const showMsg = !(
      e.target.innerHTML.includes(this.props.selectedApplet) ||
      this.props.selectedApplet.includes("Home")
    );

    this.setState({ showSaveMsg: showMsg });
  }

  handleMouseOut(e) {
    const id = e.target.id === "" ? e.target.parentNode.id : e.target.id;
    const lang = this.props.language;
    const pinkMsg =
      e.target.innerHTML.includes(MENU_TEXT[lang].NEW) ||
      e.target.innerHTML.includes(MENU_TEXT[lang].UPDATED);

    if (e.target.innerHTML.includes(this.props.selectedApplet) === false)
      e.target.style.color = pinkMsg ? "#ffc7ec" : "rgb(157,157,157)";
    ("#9d9d9d");
    this.setState({ showSaveMsg: false });
  }

  handleInfoMouseIn2(applet) {
    this.info = {
      ...this.infoDefault,
    };
    this.info[applet] = "visible";
  }

  handleInfoMouseIn(e) {
    this.fadeBackground();
  }

  handleInfoMouseOut(e) {
    this.focusBackground();
  }

  render() {
    //console.log(this.props)
    const lang = this.props.language;
    const style = {
      width: "216px",
      marginTop: "4px",
      marginBottom: "4px",
      maxWidth: "100%",
    };
    const lang2 = this.props.language === "en" ? "Français" : "English";
    const screenShareMsg = lang === "en" ? screenShareMsgEn : screenShareMsgFr;
    const imgTips = lang === "en" ? imgTipsEn : imgTipsFr;

    const styleButt = this.props.visible
      ? "buttonClose hide"
      : "buttonClose hide"; // dont show
    const arrowLeft = <span style={{ color: "#f5f6f6" }}>&#9668;</span>;
    const arrowRight = <span style={{ color: "#f5f6f6" }}>&#9658;</span>;
    const styleMsg1 = { bottom: this.props.language === "en" ? "32%" : "30%" };
    const styleMsg2 = { bottom: this.props.language === "en" ? "20%" : "18%" };
    const availH = window.screen.availHeight;
    const sideBarContent = {
      visibility: this.state.sideBarMinimized === true ? "hidden" : "visible",
    };

    const saveMessage = {
      visibility: this.state.showSaveMsg === false ? "hidden" : "visible",
    };

    const bannersStyle = {
      position: "relative",
      float: "left",
      marginLeft: "10px",
      marginTop: "-10px",
      visibility: this.state.sideBarMinimized === true ? "hidden" : "visible",
    };
    const noApplets = NO_APPLETS;
    const minHeight =
      (2 + 1 + noApplets) * (lang === "en" ? 80 : availH > 1080 ? 65 : 86);
    // console.log(window.innerHeight,window.screen.availHeight,window.innerWidth)
    let appletNavHeight =
      2 *
      Math.max(
        minHeight,
        ((lang === "en" ? 370 : 265) * window.innerHeight) / availH
      );
    let banner1Hide = lang === "en" ? (11.2 * availH) / 20 : (13 * availH) / 20;
    let banner2Hide =
      lang === "en" ? (14.2 * availH) / 20 : (16.7 * availH) / 20;
    const styleBanner = this.props.visible ? "msgBanner" : "msgBanner hide";

    if (isTablet()) {
      banner1Hide = 0;
      banner2Hide = 0;
      if (window.innerHeight > window.innerWidth) appletNavHeight = 420;
      else {
        appletNavHeight = lang === "en" ? 405 : 460;
        banner2Hide = availH;
      }
    }
    const top =
      window.innerWidth < (lang === "en" ? 1111 : 1377) ? "0px" : "10px";
    const styleTips = {
      fontSize: "16px",
      width: "92%",
      height: "40px",
      paddingLeft: "6px",
      paddingTop: top,
      borderStyle: "double",
    };
    const styleFB = {
      fontSize: "16px",
      width: "92%",
      height: "40px",
      paddingLeft: "6px",
      paddingTop: top,
      borderStyle: "none",
    };
    const removeBanner = lang === "en" ? 830 : 960;
    appletNavHeight = window.innerHeight;
    let marginLeft = { marginLeft: isTablet() ? "20px" : "30px" };
    let marginLeftTips = {
      marginLeft: isTablet() ? "20px" : "30px",
      marginTop: "0px",
      marginBottom: "0px",
    };

    let isWindowsOS;

    const wd = (23 * this.state.width) / 100;
    let pos = {
      left: window.innerWidth < 900 ? wd / 2 : wd,
      top:
        this.props.selectedApplet === "Home"
          ? window.innerWidth < 900
            ? 50
            : 180
          : 70,
    };

    try {
      isWindowsOS =
        navigator.userAgentData.platform.indexOf("Windows") !== -1
          ? true
          : false;
    } catch (error) {
      isWindowsOS = false;
    }

    if (isWindowsOS === false) {
      try {
        isWindowsOS = navigator.userAgent.indexOf("Win") !== -1 ? true : false;
      } catch (error) {
        isWindowsOS = false;
      }
    }

    let applets = [
      "PA",
      "PLA",
      "INA",
      "EP",
      "WL",
      "LIFO",
      "CA",
      "EB",
      "BR",
      "IR",
      "JL",
      "IA",
      "CSW",
    ]; //"CSW" done seperately

    const version=packageJson.version


    if (this.props.tokenValid === false) {
      return (
        <Navbar
          inverse
          relative
          fluid
          collapseOnSelect
          className={
            this.state.sideBarMinimized === false ? "navbar" : "navbarMinimized"
          }
        >
          {window.innerWidth > NAVBAR_SWITCH_WIDTH && (
            <button className="arrow" onClick={this.sideBarHideShow}>
              {this.state.sideBarMinimized === false ? arrowLeft : arrowRight}
            </button>
          )}

          <Navbar.Header>
            <Navbar.Brand>
              <div>
                {" "}
                <span>
                  {" "}
                  <img
                    id="img"
                    onClick={this.changeLogo}
                    src={this.props.logoSource}
                    style={style}
                  />
                </span>
                <span
                  style={{
                    fontWeight: "normal",
                    fontSize: "10px",
                    marginLeft: "6px",
                  }}
                >
                  ({version}){" "}
                </span>
              </div>
            </Navbar.Brand>

            <Navbar.Toggle />
          </Navbar.Header>
          <div style={sideBarContent}>
            <span
              className="language"
              style={{ width: "160px", top: "10%", color: "white" }}
            >
              {" "}
              {this.props.language === "en"
                ? "Login is not valid"
                : "La connexion n'est pas valide"}{" "}
            </span>
          </div>
        </Navbar>
      );
    } else
      return (
        <Navbar
          inverse
          fixedTop
          fluid
          collapseOnSelect
          className={
            this.state.sideBarMinimized === false ? "navbar" : "navbarMinimized"
          }
        >
          {window.innerWidth > NAVBAR_SWITCH_WIDTH && (
            <button className="arrow" onClick={this.sideBarHideShow}>
              {this.state.sideBarMinimized === false ? arrowLeft : arrowRight}
            </button>
          )}

          <Navbar.Header>
            {/* check access */}
            <Navbar.Brand>
              <div>
                <span
                  data-tip
                  data-for="HM"
                  onMouseOver={this.handleMouseIn.bind(this)}
                  onMouseOut={this.handleMouseOut.bind(this)}
                >
                  {" "}
                  <img
                    onClick={this.changeLogo}
                    src={this.props.logoSource}
                    style={style}
                  />
                </span>{" "}
                <span
                  style={{
                    fontWeight: "normal",
                    fontSize: "10px",
                    marginLeft: "6px",
                  }}
                >
                  ({version}){" "}
                </span>
              </div>
            </Navbar.Brand>

            <Navbar.Toggle />
          </Navbar.Header>
          <div style={sideBarContent}>
            <Navbar.Collapse>
              <Nav style={{ height: appletNavHeight + "px" }}>
                <LinkContainer to={"/"} style={{ marginLeft: "2px" }} exact>
                  <NavItem>
                    <Glyphicon glyph="home" />
                    <span
                      data-tip
                      data-for="HM"
                      onMouseOver={this.handleMouseIn.bind(this)}
                      onMouseOut={this.handleMouseOut.bind(this)}
                    >
                      {" "}
                      {TOOLKIT[lang].Home + "        "}{" "}
                    </span>

                    <span>
                      <input
                        className="language"
                        onClick={this.props.changeLang}
                        type="button"
                        value={lang2}
                      />{" "}
                    </span>
                    <AppletDescTooltip pos={pos} applet="HM" lang={lang} />
                  </NavItem>
                </LinkContainer>

                {applets.map((item, i) => {
                  const selectedApplet = TOOLKIT[lang][item].includes(
                    this.props.selectedApplet
                  );
                  const showCSW = isWindowsOS && item === "CSW";

                  if (isWindowsOS === false && item === "CSW")
                    return CSW_Non_Windows(lang, pos, item);
                  else
                    return (
                      <LinkContainer
                        key={i}
                        to={PATHS[item]}
                        style={marginLeft}
                      >
                        <NavItem>
                          {item === "CSW" && <LineSeperator />}
                          {
                            <div>
                              <span
                                id={item}
                                onMouseOver={this.handleMouseIn.bind(this)}
                                onMouseOut={this.handleMouseOut.bind(this)}
                                style={{
                                  color: selectedApplet
                                    ? this.props.supressMenuSelect
                                      ? "grey"
                                      : "white"
                                    : "rgb(157,157,157)",
                                  marginRight: "10px",
                                }}
                              >
                                {TOOLKIT[lang][item]}
                              </span>
                              {item === "IA" && (
                                <span
                                  id={item}
                                  className="newMsg"
                                  onMouseOver={this.handleMouseIn.bind(this)}
                                  onMouseOut={this.handleMouseOut.bind(this)}
                                >
                                  {MENU_TEXT[lang].NEW}{"  "}
                                </span>
                              )}
                              {item === "NONE_FOR_NOW" && (
                                <span className="newMsg">
                                  {MENU_TEXT[lang].UPDATED}{"  "}
                                </span>
                              )}
                              <span data-tip data-for={item}>
                                <img
                                  onMouseOver={this.fadeBackground.bind(this)}
                                  onMouseOut={this.focusBackground.bind(this)}
                                  style={{ visibility: this.info[item] }}
                                  height={
                                    this.info[item] === "visible"
                                      ? "15px"
                                      : "0px"
                                  }
                                  Width={
                                    this.info[item] === "visible"
                                      ? "15px"
                                      : "0px"
                                  }
                                  src={selectedApplet ? infoG : info}
                                />
                              </span>
                              <AppletDescTooltip
                                pos={pos}
                                applet={item}
                                lang={lang}
                              />
                            </div>
                          }
                        </NavItem>
                      </LinkContainer>
                    );
                })}
                <SaveMessage
                  message={MENU_TEXT[lang].SAVE}
                  saveMessageStyle={saveMessage}
                />

                {this.props.loginUsageAccess === true && (
                  <LinkContainer to={PATHS.AU} style={marginLeftTips}>
                    <NavItem>
                      <div style={styleTips}>
                        <span
                          style={{
                            color: "white",
                            paddingTop: "2px",
                            overflowWrap: "break-word",
                          }}
                        >
                          {TOOLKIT[lang].AU}
                        </span>
                      </div>
                    </NavItem>
                  </LinkContainer>
                )}

                <LinkContainer to={PATHS.TIPS} style={marginLeftTips}>
                  <NavItem style={{ backgroundcolor: "transparent" }}>
                    <div style={styleTips}>
                      <span
                        style={{
                          color: "white",
                          paddingTop: "2px",
                          overflowWrap: "break-word",
                        }}
                      >
                        {TOOLKIT[lang].TIPS}
                      </span>
                    </div>
                  </NavItem>
                </LinkContainer>
                <LinkContainer to={PATHS.FB} style={marginLeftTips}>
                  <NavItem>
                    <div style={styleFB}>
                      <span
                        className="saveMsg"
                        style={{ float: "right", marginTop: "5px" }}
                      >
                        {TOOLKIT[lang].FB}
                      </span>
                    </div>
                  </NavItem>
                </LinkContainer>

                <Coushin />
              </Nav>
              <div style={sideBarContent}></div>
            </Navbar.Collapse>
          </div>
          {this.props.redirectTo !== "" && (
            <Redirect to={this.props.redirectTo} />
          )}
        </Navbar>
      );
  }
}
