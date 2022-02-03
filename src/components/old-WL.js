import React from 'react';
import ReactDOM from 'react-dom';
import './NA.css';
import { name, version, buildMode } from '../../package.json';
import { APP_SITE_WHOLELIFE } from '../Utils/util';

export class WL extends React.Component {
	render() {
		const lang = this.props.language === "en" ? "Français" : "English";
		let dataToPass = "&" + Math.random();

		//let dataAll = JSON.parse(localStorage.getItem('INAData'));
		//console.log('dataAll');				 1
		//console.log(dataAll);
		//let dataToPass = "";

		//if (dataAll !== null) {
		//	console.log('JSON.parse(localStorage.getItem(INADataFA))');
		//	console.log(JSON.parse(localStorage.getItem('INADataFA')));
		//	dataToPass = "&A1=" + dataAll.data.Clients[0].Age + "&G1=" + dataAll.data.Clients[0].Sex + "&S1=" + dataAll.data.Clients[0].Smoker + "&R1=" + dataAll.data.Clients[0].Rating;
		//	dataToPass += "&A2=" + dataAll.data.Clients[1].Age + "&G2=" + dataAll.data.Clients[1].Sex + "&S2=" + dataAll.data.Clients[1].Smoker + "&R2=" + dataAll.data.Clients[1].Rating;
		//	dataToPass += "&FA=" + JSON.parse(localStorage.getItem('UNADataFA'));
		//}
		//let url = "http://vanp-vm-be-dev0";
		//url = "https://toolkitdirectwholelife.ppi.ca";
		//url = "https://test-tkdirectwholelife.ppi.ca";
		//url = "http://localhost:8086/";

		let url = buildMode === 0 ? APP_SITE_WHOLELIFE.APP_SITE_WHOLELIFE_LOCAL : (buildMode === 1 ? APP_SITE_WHOLELIFE.APP_SITE_WHOLELIFE_TEST : APP_SITE_WHOLELIFE.APP_SITE_WHOLELIFE_PROD);

		let isIE = /*@cc_on!@*/false || !!document.documentMode;

		let msg = this.props.language === "en" ? "Please use Microsoft Edge or Google Chrome browsers" : "s'il vous plaît utiliser les navigateurs Microsoft Edge ou Google Chrome";

		return (
			<div className="appletDiv">
				{isIE ? <div className="ie">	{msg}
				</div> : <iframe className="appletiFrame"
					src={url + "?lang=" + this.props.language + dataToPass}
					/>}
				{/*<div><input className="language" onClick={this.props.changeLang} type="button" value={lang} />
				</div>*/}
			</div>
		);
	}
}
