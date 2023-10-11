import React from "react";
import "./NA.css";
import { getAppletName, unloadSpinner } from "../Utils/util";

export class Applet extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    setTimeout(unloadSpinner, 40000);
    if (nextProps.Applet !== this.props.appletURL) {
      const loader = document.getElementById("gohLoader");
      const goh = document.getElementById("goh");
      if (loader !== null && loader.style.display === "none") {
        goh.style.visibility = "hidden";
        goh.style.display = "none";
        loader.style.display = "block";
      }
    }
  }

  render() {
    const lang = this.props.language === "en" ? "Français" : "English";
    let dataToPass = this.props.QS !== "" ? this.props.QS : "";
    let url = this.props.appletURL;

    let isIE = /*@cc_on!@*/ false || !!document.documentMode;
    let appletiFrameClass =
      this.props.appletiFrameExp === true ? "appletiFrameExp" : "appletiFrame";
    let msg =
      this.props.language === "en"
        ? "Please use Google Chrome or Microsoft Edge (version 18 or higher) browsers"
        : "s'il vous plaît utiliser les navigateurs Google Chrome ou Microsoft Edge (version 18 +)";

    this.props.selectApplet(
      getAppletName(this.props.appletURL, this.props.language)
    );

    const src = url + "?lang=" + this.props.language + dataToPass;
    return (
      <div className="appletDiv">
        {isIE ? (
          <div className="ie"> {msg}</div>
        ) : (
          <div className={appletiFrameClass}>
            {" "}
            <div class="loader-container">
              <div
                class="loader"
                id="gohLoader"
                style={{ display: "block" }}
              ></div>
            </div>
            <iframe
              id="goh"
              className={appletiFrameClass}
              src={src}
              style={{ display: "none" }}
              allow="clipboard-read; clipboard-write"
            />
          </div>
        )}
      </div>
    );
  }
}
