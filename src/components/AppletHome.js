import React from 'react';
//import toolkit from './toolkit.png';
import './NA.css';

export class AppletHome extends React.Component {
	render() {
		const lang = this.props.language === "en" ? "Français" : "English";
		let url = this.props.language === "en" ? "https://www.ppi.ca/en/toolkit-direct-intro" : "https://www.ppi.ca/fr/toolkit-direct-intro";
		
		return (
			<div className="appletDiv">

				{/*<div><input className="language" onClick={this.props.changeLang} type="button" value={lang} />
				</div>

				<div > <img src={toolkit} style={{ width: '100%', border: '0', alt: 'Null' }} />

				</div>
				
				<div><input className="language" onClick={this.props.changeLang} type="button" value={lang} />
				
				<iframe className="appletiFrame" src={url} />*/}
				<iframe className="appletiFrame" style={{ width: '100%', border: '0', alt: 'Null' }} src={url} />

				
				</div>
			
		);
	}
}
