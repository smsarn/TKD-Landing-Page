import React from 'react';
import ReactDOM from 'react-dom';
import './NA.css';
import { name, version, buildMode } from '../../package.json';
import { APP_SITE_PRACTICEASSISTANT } from '../Utils/util';

export class PracticeAssistant extends React.Component {

    render() {
        const lang = this.props.language === "en" ? "Français" : "English";
        let dataToPass = (this.props.QS !== "" ? "&QS=" + this.props.QS : "") + "&a=" + Math.random();

        let url = buildMode === 0 ? APP_SITE_PRACTICEASSISTANT.APP_SITE_PRACTICEASSISTANT_LOCAL : (buildMode === 1 ? APP_SITE_PRACTICEASSISTANT.APP_SITE_PRACTICEASSISTANT_TEST : APP_SITE_PRACTICEASSISTANT.APP_SITE_PRACTICEASSISTANT_PROD);

        let isIE = /*@cc_on!@*/false || !!document.documentMode;

        let msg = this.props.language === "en" ? "Please use Google Chrome or Microsoft Edge (version 18 or higher) browsers" : "s'il vous plaît utiliser les navigateurs Google Chrome ou Microsoft Edge (version 18 +)";

        return (
            <div className="appletDiv">
                {isIE ? <div className="ie"> {msg}
                </div> :
                    <iframe className="appletiFrame" src={url + "?lang=" + this.props.language + dataToPass} />
                }
            </div>
        );
    }
}
