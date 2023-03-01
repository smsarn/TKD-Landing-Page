import React from 'react';
//import toolkit from './toolkit.png';
import './NA.css';
//import newInToolkitMsgFr from '../Images/toolkit.direct_new.features.and.applets_21.09_FR.gif';//tkd_new.applets_21.01_FR.gif';
//import newInToolkitMsgEn from '../Images/toolkit.direct_new.features.and.applets_21.08.gif';

import newInToolkitMsgEn from '../Images/toolkit.direct_new.features.and.applets_22.06.gif';
import newInToolkitMsgFr from '../Images/toolkit.direct_new.features.and.applets_22.06_FR.gif';

import TKD_IR_MsgEn from '../Images/toolkit.direct_Income.Replacement_22.9.19.png';
import TKD_IR_MsgFr from '../Images/toolkit.direct_Income.Replacement_22.9.19_FR.png';

export class AppletHome extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            height: 2*window.innerHeight/3,
			showBanner:true,
        };
    } 
	handleResize = () => this.setState({
		height: 2*window.innerHeight/3,
	  });
	
	  componentDidMount() {
		this.handleResize();
		window.addEventListener('resize', this.handleResize)
	  }
	
	  componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize)
	  }
	  removeBanner = () => {
        this.setState({showBanner: false})
        
    }

	render() {
		const lang = this.props.language === "en" ? "Français" : "English";
		let url = this.props.language === "en" ? "https://www.ppi.ca/en/toolkit-direct-intro" : "https://www.ppi.ca/fr/toolkit-direct-intro";
		const newINAMsg = this.props.language === "en" ? newInToolkitMsgEn : newInToolkitMsgFr;
		const newIRMsg = this.props.language === "en" ? TKD_IR_MsgEn : TKD_IR_MsgFr;
		
		const height=this.state.height;
		const width = window.screen.innerHeight/2;
		const maxHeight=this.props.language === "en"?600:700
		const bannersStyle = {padding:"15px", visibility: window.innerHeight>maxHeight ?  "visible" : "hidden"}
		const ppiStyle = { width: '100%', border: '0', alt: 'Null', height:"60%", top: "0px"}
		
		return (
			<div className="appletDiv">

				{/*<div><input className="language" onClick={this.props.changeLang} type="button" value={lang} />
				</div>

				<div > <img src={toolkit} style={{ width: '100%', border: '0', alt: 'Null' }} />

				</div>
				
				<div><input className="language" onClick={this.props.changeLang} type="button" value={lang} />
				
				<iframe className="appletiFrame" src={url} />*/}
				<iframe className="banner" src={url} />
				{this.state.showBanner===true && 
				<table className="bannerTable">
					<tr>
					<td ><img id="banner" className="displayed" style={bannersStyle} src={newIRMsg}  onClick={this.removeBanner}/></td>
					<td ><img id="banner2" className="displayed" style={bannersStyle} src={newINAMsg}  onClick={this.removeBanner}/></td>
					</tr>
				</table>
				} 
                     
				<span style={{padding:"20px"}}></span>
				</div>
			
		);
	}
}
