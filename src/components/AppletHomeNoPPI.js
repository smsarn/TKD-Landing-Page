import React from "react";
import "./NA.css";

export class AppletHomeNoPPI extends React.Component {
  render() {
    const lang = this.props.language === "en" ? "Français" : "English";
    return (
      <div className="appletDiv">
        <iframe
          className="appletiFrame"
          style={{ width: "100%", border: "0", alt: "Null" }}
          src={"http://about:blank"}
        />
      </div>
    );
  }
}
