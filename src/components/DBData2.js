import React from 'react';
import './NA.css';
import {getAppletName} from '../Utils/util';

export class DBData2 extends React.Component {

    constructor(props) {
        super(props);
     }
    componentDidMount(){
        this.reload();
    }
    componentWillReceiveProps(nextProps) {
        this.reload();
    }
    
    reload=()=>{
        document.getElementById("goh").onload=()=>{document.getElementById('goh').style.display="block"}
    }

   

    render() {
        const lang = this.props.language === "en" ? "Français" : "English";
        //let dataToPass = (this.props.QS !== "" ? "&QS=" + this.props.QS : "") + (this.props.recover !== "" ? "&recover=" + this.props.recover : "") + (this.props.userGUID !== "" ? "&userGUID=" + this.props.userGUID : "") +  (this.props.snapimport !== "" ? "&snapimport=" + this.props.snapimport : "") + "&a=" + Math.random();
        let dataToPass = (this.props.QS !== "" ? this.props.QS : "");
        console.log(dataToPass)
        let url = this.props.appletURL;

        let isIE = /*@cc_on!@*/false || !!document.documentMode;
        let appletiFrameClass = this.props.appletiFrameExp === true ? "appletiFrameExp" : "appletiFrame"
        let msg = this.props.language === "en" ? "Please use Google Chrome or Microsoft Edge (version 18 or higher) browsers" : "s'il vous plaît utiliser les navigateurs Google Chrome ou Microsoft Edge (version 18 +)";
        
        this.props.selectApplet(getAppletName(this.props.appletURL, this.props.language ))

        const src=url + "?lang=" + this.props.language + dataToPass;
        return (
            <div className="appletDiv">
                {isIE ? <div className="ie"> {msg}
                </div> :
                    <iframe id="goh" className={appletiFrameClass} src={src} style={{display:"none"}}  allow= "clipboard-read; clipboard-write"/>

                }
                {/*<div><input className="language" onClick={this.props.changeLang} type="button" value={lang} />
				</div>*/}
            </div>
        );
    }
}
