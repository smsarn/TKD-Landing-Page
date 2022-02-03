import React from 'react';
import ReactDOM from 'react-dom';
import './NA.css';
import { name, version, buildMode } from '../../package.json';
import { APP_SITE_INA } from '../Utils/util';



export class NA extends React.Component {

	render() {
		const lang = this.props.language === "en" ? "Français" : "English";
		let dataToPass = (this.props.QS !== "" ? "&QS=" + this.props.QS : "") + "&a=" + Math.random();
		//let dataToPass = "&"  + Math.random();
		//let dataAll = JSON.parse(localStorage.getItem('INAData'));
        //console.log('dataToPass');
		//console.log(dataAll);
	
		//if (dataAll !== null) {
		//	console.log('JSON.parse(localStorage.getItem(INADataFA))');
		//	console.log(JSON.parse(localStorage.getItem('INADataFA')));
		//	dataToPass = "&A1=" + dataAll.data.Clients[0].Age + "&G1=" + dataAll.data.Clients[0].Sex + "&S1=" + dataAll.data.Clients[0].Smoker + "&R1=" + dataAll.data.Clients[0].Rating;
		//	dataToPass += "&A2=" + dataAll.data.Clients[1].Age + "&G2=" + dataAll.data.Clients[1].Sex + "&S2=" + dataAll.data.Clients[1].Smoker + "&R2=" + dataAll.data.Clients[1].Rating;
		//	dataToPass += "&FA=" + JSON.parse(localStorage.getItem('INADataFA'));
		//}
		//let url = "https://localhost:44326/INA";
		//let url = "https://ppitoolkitdirectina.azurewebsites.net/INA";
		//url = "https://toolkitdirectsnap.ppi.ca";
		//url = "https://test-tkdirectsnap.ppi.ca";
		//url = "http://localhost:8085/";

		let url = buildMode === 0 ? APP_SITE_INA.APP_SITE_INA_LOCAL : (buildMode === 1 ? APP_SITE_INA.APP_SITE_INA_TEST : APP_SITE_INA.APP_SITE_INA_PROD);


        let isIE = /*@cc_on!@*/false || !!document.documentMode;
        let appletiFrameClass = this.props.appletiFrameExp === true ? "appletiFrameExp" : "appletiFrame"

		let msg = this.props.language === "en" ? "Please use Google Chrome or Microsoft Edge (version 18 or higher) browsers" : "s'il vous plaît utiliser les navigateurs Google Chrome ou Microsoft Edge (version 18 +)";
	
    		return (
			<div className="appletDiv">
                    {isIE ? <div className="ie"> {msg}
                    </div> :
                        <iframe className={appletiFrameClass} src={url + "?lang=" + this.props.language + dataToPass} />

				}
				{/*<div><input className="language" onClick={this.props.changeLang} type="button" value={lang} />
				</div>*/}
			</div>
		);
	}
}
