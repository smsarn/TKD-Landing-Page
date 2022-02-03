import React, { Component } from 'react';
import toolkit from './toolkit.png';
import './NA.css';

export class Home extends Component {
	displayName = Home.name

	render() {
		const lang = this.props.language === "en" ? "Fran�ais" : "English";
		
		return (
			<div className="appletDiv">
				<div><input className="language" onClick={this.props.changeLang} type="button" value={lang} />
				</div>

				<div > <img src={toolkit} alt="Logo"/>
				</div>
			</div>
		);
	}
}
