import React, { Component } from "react";

import ReactTooltip from "react-tooltip";
import { AppletDesc } from "./AppletDesc";
import "./tooltip.css";

export class AppletDescTooltip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let color = "rgba(97,44,81, 1)";
    let isMobile = window.matchMedia(
      "only screen and (max-width: 480px)"
    ).matches;

    const showTips = true; //false; // until ready to go

    if (showTips)
      return (
        <ReactTooltip
          overridePosition={() => ({
            left: this.props.pos.left,
            top: this.props.pos.top,
          })}
          globalEventOff={isMobile ? "click" : undefined}
          border={true}
          arrowColor={"white"}
          borderColor={"white"}
          backgroundColor={color}
          id={this.props.applet}
          place="right"
          effect="solid"
          className="tooltip"
        >
          <span>
            <AppletDesc
              color={color}
              applet={this.props.applet}
              lang={this.props.lang}
            />
          </span>
        </ReactTooltip>
      );
    else return "";
  }
}
