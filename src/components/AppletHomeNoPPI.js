import React from 'react';
//import toolkit from './toolkit.png';
import './NA.css';

export class AppletHomeNoPPI extends React.Component
{
    render() {
        const lang = this.props.language === "en" ? "Français" : "English";
        //let url = this.props.language === "en" ? "https://www.ppi.ca/en/toolkit-direct-intro" : "https://www.ppi.ca/fr/toolkit-direct-intro";
        return (

            < div className = "appletDiv" >


               
                < iframe className = "appletiFrame" style ={ { width: '100%', border: '0', alt: 'Null' } }
                    src={"http://about:blank" } />



</ div >
			
		);
    }
}
