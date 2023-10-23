import React from "react";
import "./NA.css";
import newInToolkitMsgEn from "../Images/toolkit.direct_new.features.and.applets_22.06.gif";
import newInToolkitMsgFr from "../Images/toolkit.direct_new.features.and.applets_22.06_FR.gif";

import TKD_IR_MsgEn from "../Images/toolkit.direct_Income.Replacement_22.9.19.png";
import TKD_IR_MsgFr from "../Images/toolkit.direct_Income.Replacement_22.9.19_FR.png";

export class AppletHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: (2 * window.innerHeight) / 3,
      showBanner: true,
    };
	//  set to true to remove banner re new design
    this.homePageNewDesign =true;//false;
  }
  handleResize = () =>
    this.setState({
      height: (2 * window.innerHeight) / 3,
    });

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    if (this.homePageNewDesign) this.setState({ showBanner: false });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  removeBanner = () => {
    this.setState({ showBanner: false });
  };

  render() {
    const lang = this.props.language === "en" ? "Français" : "English";
    let url =
      this.props.language === "en"
        ? "https://www.ppi.ca/en/toolkit-direct-intro"
        : "https://www.ppi.ca/fr/toolkit-direct-intro";
    if (this.homePageNewDesign) {
      url =
        this.props.language === "en"
          ? "https://test-tkdirecthome.ppi.ca/?lang=en"
          : "https://test-tkdirecthome.ppi.ca/?lang=fr";
    }
    const newINAMsg =
      this.props.language === "en" ? newInToolkitMsgEn : newInToolkitMsgFr;
    const newIRMsg = this.props.language === "en" ? TKD_IR_MsgEn : TKD_IR_MsgFr;

    const height = this.state.height;
    const width = window.screen.innerHeight / 2;
    const maxHeight = this.props.language === "en" ? 600 : 700;
    const bannersStyle = {
      padding: "15px",
      visibility: window.innerHeight > maxHeight ? "visible" : "hidden",
    };

    return (
      <div className="appletDiv">
        <iframe
          className="banner"
          style={this.homePageNewDesign ? {height: "100%"}:{}}
          src={url}
        />
        {this.state.showBanner === true && (
          <table className="bannerTable">
            <tr>
              <td>
                <img
                  id="banner"
                  className="displayed"
                  style={bannersStyle}
                  src={newIRMsg}
                  onClick={this.removeBanner}
                />
              </td>
              <td>
                <img
                  id="banner2"
                  className="displayed"
                  style={bannersStyle}
                  src={newINAMsg}
                  onClick={this.removeBanner}
                />
              </td>
            </tr>
          </table>
        )}

        <span style={{ padding: "20px" }}></span>
      </div>
    );
  }
}
