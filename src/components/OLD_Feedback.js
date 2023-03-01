import React from "react";
//import toolkit from './toolkit.png';
import "./NA.css";
import {
    getAppletNames,
    getAppletCode,
    fetchSaveComment
  } from "../Utils/util";

export class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      feedback:"",
      selectedApplet: 0,
      saved:true
    };
    // applets
    this.appletList = [];
    this.appletList.push(this.props.language==="en"?" All Applets": " Tous les applets");
    for (let i = 0; i < getAppletNames(this.props.language).length; i++) {
      this.appletList.push(getAppletNames(this.props.language)[i]);
    }
    
      
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.language!==this.props.language){
        this.appletList = [];
        this.appletList.push(nextProps.language==="en"?" All Applets": " Tous les applets");
        for (let i = 0; i < getAppletNames(nextProps.language).length; i++) {
          this.appletList.push(getAppletNames(nextProps.language)[i]);
        }
      }
}
  
  

 save=()=>{
  if(this.state.feedback.length>2)
    { 
      this.setState({saved:false})

 
    let feedback={agentEmail: this.props.email, appletCode: getAppletCode(this.state.selectedApplet), feedback:this.state.feedback}
    fetchSaveComment(feedback)

    setTimeout(() => {
      this.setState({saved:true})
    }, 1500)
  } 
 }



 handleAppletDropDownChange = (e) => {
  this.setState({ selectedApplet: e.target.value });
};

updateInputValue = (e) => {
  this.setState({ feedback: e.target.value });
};


  render() {
    const lang = this.props.language === "en" ? "Français" : "English";
    let style = {
        fontFamily: "Trebuchet MS",
        color: "#4775ae",
        marginBottom: "5px",
      };
    let style2 = {
        fontFamily: "Trebuchet MS",
        fontSize: "14px",
        color: "#2F4755",
        marginLeft: "0px",
      };
      let style3 = {
        fontFamily: "Trebuchet MS",
        color: "#4775ae",
        textDecoration:"overline",
        fontSize: "14px",
      };
    const en=this.props.language==="en"
    return (
      <div className="appletDiv" style={{ overflow: "auto" }}>
         <div className="UsageDiv" style={{width:"80%"}}>
          <h2 style={style}> {en?"Feedback:":"Commentaires:"}
          </h2>

          <div style={style3}>{en?"Your feedback is used to improve Toolkit Direct. Please note that feedback is not anonymous":"Vos commentaires sont utilisés pour améliorer la boîte à outils directe. Veuillez noter que les commentaires ne sont pas anonymes."}</div>      
          <br/>
          <span style={style2}>
            {en?"by Applet:  ":"Par applet:  "}
            <select
                style={{
                  height: "24px",
                  marginLeft: "5px",
                  marginRight: "20px",
                }}
                name="applets"
                id="applets"
                value={this.state.selectedApplet}
                onChange={this.handleAppletDropDownChange}
              >
                {this.appletList.map((item, index) => {
                  return <option key={index} value={index}>{item}</option>;
                })}
              </select>
          <br />
          <div>
          <textarea
            id={5}
            className="inputField"
            onFocus={this.handleFocus}
            onClick={this.select}
            type="text"
            value={this.state.feedback}
            onBlur={(evt) => this.updateInputValue(evt)}
            onChange={(evt) => this.updateInputValue(evt)}
          />
          <span style={{marginLeft:"15px", visibility:this.state.saved?"hidden":"visible"}}>{en?" ...saved":" ...enregistré"}</span>
          <input
              className="roundedCornerCmd"
              onClick={this.save}
              type="button"
              value={en?"Save":"Enregistrer"}
            />
          </div>
          </span>
      </div>
      </div>
    );
  }
}
