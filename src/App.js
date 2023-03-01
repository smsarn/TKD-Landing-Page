import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router";
import { withRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AppletHome } from "./components/AppletHome";
import { AppletTIPS } from "./components/TIPS";
//import { Feedback } from "./components/OLD_Feedback";
import { AppletUsage } from "./components/AppletUsage";
//import { DBData } from './components/DBData';
import { DBData2 } from "./components/DBData2";
//import { DBClientsData } from './components/DBClientsData';

/* import {
    fetchGetAgentGUIDFromDB    
  } from "./Utils/fetch"; */
import { AppletHomeNoPPI } from "./components/AppletHomeNoPPI";
import jwt_decode from "jwt-decode";

import { Applet } from "./components/Applet";
import toolkitdirectlogoenglish from "./Images/toolkit.direct.logo_english_rgb_reverse.png";
import toolkitdirectlogofrench from "./Images/toolkit.direct.logo_french_rgb_reverse.png";
import toolkitdirectlogoenglishNoPPI from "./Images/toolkit.direct.logo_english_rgb_reverse No PPI.png";
import toolkitdirectlogofrenchNoPPI from "./Images/toolkit.direct.logo_french_rgb_reverse No PPI.png";

import "./App.css";
import { CacheBuster } from "./CacheBuster";
import queryString from "query-string";
import { version } from "../package.json";
import {
  PATHS,
  getURL,
  TOOLKIT,
  getAppletLoadImageArray,
  unloadSpinner,
  fetchUserLoginAccess,
  fetchUserFeedbackAccess,
} from "./Utils/util";

export default class App extends Component {
  displayName = "PPI Toolkit Direct";

  constructor(props) {
    super(props);
    //        this.handleUnload = this.handleUnload.bind(this);
    var lang = window.navigator.userLanguage || window.navigator.language;
    lang = lang.toString().indexOf("en") >= 0 ? "en" : "fr";
    this.state = {
      language: lang,
      loading: true,
      selectedApplet: "Home",
      logoSource:
        lang === "en" ? toolkitdirectlogoenglish : toolkitdirectlogofrench,
      userGUID: "", //"PPI",
      loginUsageAccess: false,
      loginFeedbackAccess: false,
      //y   showSelectApplet: 0,
      redirectTo: "",
      QS: {
        PA: "",
        PLA: "",
        WL: "",
        INA: "",
        EP: "",
        EB: "",
        LIFO: "",
        CA: "",
        BR: "",
        IR: "",
        CSW: "",
        DB: "",
        DBCL: "",
        FB: "",
      },
    };
    this.langText = "English";
    this.visible = true;
    this.visiblePPI = true;
    this.minimizedClicked = false;
    this.redirectTo2 = "";
    this.QS2 = "";
    this.snapimport = "";
    this.sideBarMinimized = false;
    this.caseGUID;
    this.clientGUID;
    this.DBClientID;
    this.selectedApplet = { id: "", applet: "" };
    this.appletCode = "";
    this.DBAction = "&DBAction=";
    this.FBAction = "&FBAction=0"; // feedback
    this.Token = "";
    this.tokenValid = true;
    this.externalUser = false;
    this.preLoadAppletImages = true;
    this.appletImageArray = getAppletLoadImageArray();

    this.userEmail = "";

    //this.ParseQueryString();

    /*  function doSomething(){
            //do some stuff here. eg:
            window.location.href = "https://test-tkdirect.ppi.ca/?wa=wsignout1.0"
        }
        function showADialog(e){
            var confirmationMessage = 'Your message here';
            //some of the older browsers require you to set the return value of the event
            (e || window.event).returnValue = confirmationMessage;     // Gecko and Trident
            return confirmationMessage;                                // Gecko and WebKit
        }
        window.addEventListener("beforeunload", function (e) {
            // to do something (Remember, redirects or alerts are blocked here by most browsers):
            doSomething();    
            // to show a dialog (uncomment to test):
            return showADialog(e);  
        }); */
  }

  ParseQueryString = async () => {
    const query = queryString.parse(window.location.search);
    if (query.lang !== undefined) this.setLanguage(query.lang);
    if (query.authToken !== undefined) {
      this.Token = query.authToken;
      const externalToken = this.tokenExternal(this.Token);
      if (externalToken) {
        const url = window.location.href;
        localStorage.setItem("TKTOK", this.Token);
        //console.log(window.location.href)
        if (url.includes("authToken") === false) {
          window.location.href = url + "?authToken=" + this.Token;
          //  console.log(window.location.href)
        }
      } else {
        localStorage.removeItem("TKTOK");
        
        if (this.tokenValid === false)
          this.getTokenFromLocalOrRedirectThuPortal(true);
        this.setToken(this.Token);
      }
    } else {
      this.getTokenFromLocalOrRedirectThuPortal(false);
    }
    // console.log("v: "+ this.tokenValid)

    this.setToken(this.Token);

    this.checkUserLoginAccess(this.userEmail);
    //this.checkUserFeedbackAccess(this.userEmail);

    if (this.tokenValid === false && this.externalUser === false)
      this.getTokenFromLocalOrRedirectThuPortal(true);
 
    // redirect to requested applet or page
    if (
      !(
        query.QS === undefined &&
        query.applet === undefined &&
        query.snapimport === undefined
      )
    ) {
      this.updateRedirectAndQS(query.applet, query.QS, query.snapimport);
    }
  };

  checkUserLoginAccess = async (email) => {
   // let access = false;
   // if (this.externalUser) access = false;
   // else access = await fetchUserLoginAccess(email); //==='msamiei@ppi.ca' || userEmail==='msamiei@ppi.ca' || userEmail==='chiscoth@ppi.ca' || userEmail==='jvirtue@ppi.ca') ?true:false
    
    if (this.externalUser === false)
    {
      let access = await fetchUserLoginAccess(email);
      this.setState({ loginUsageAccess: access.usage });
      this.setState({ loginFeedbackAccess: access.feedback });  

    } 
  };

  checkUserFeedbackAccess = async (email) => {
    let access = false;
    if (this.externalUser) access = false;
    else access = await fetchUserFeedbackAccess(email); //==='msamiei@ppi.ca' || userEmail==='msamiei@ppi.ca' || userEmail==='chiscoth@ppi.ca' || userEmail==='jvirtue@ppi.ca') ?true:false

    this.setState({ loginFeedbackAccess: access });
  };

  getTokenFromLocalOrRedirectThuPortal = (redirect) => {

    // if external token is picked up
    this.Token = localStorage.getItem("TKTOK");

    //  is it valid and external
    const externalToken = this.tokenExternal(this.Token);
    //console.log(this.Token);
    //console.log(this.tokenValid);

    const internalTokenExpired =
      externalToken === false && this.tokenValid === false;



    if (
      this.Token === undefined ||
      this.Token === null ||
      this.Token === "" ||
      internalTokenExpired ||
      externalToken === false
    ) {
      // make sure you only are here for internal users
      sessionStorage.setItem("TKTOK_Internal", 1);

      let url = window.location.href;
      let qs = "";
      if (url.includes("/?")) qs = url.replace("/?", "?");
      if (qs.includes("?")) {
        const nIn = qs.indexOf("?");
        qs = qs.substring(nIn);
        qs = qs.replace("?", "&");
        //   url=url.replace("?","&")
      }

      

      //  console.log(url)
      if (redirect === true) {
        const query = queryString.parse(window.location.search);
        //    console.log(query);

        let nIn1 = url.indexOf("?authToken");
        if (nIn1 === -1) nIn1 = url.indexOf("&authToken");
        if (nIn1 >= 0) {
          const nIn2 = url.substring(nIn1 + 1).indexOf("&");
          if (nIn2 >= 0) {
            url = url.substring(0, nIn1) + url.substring(nIn1 + nIn2 + 1);
          } else {
            url = url.substring(0, nIn1);
          }
        }



        window.location.href =
          "https://sharepoint.ppi.ca/sites/portal/Pages/portal.aspx?authRedirect=" +
          encodeURIComponent(url);
      } else {
        if (url.includes("authToken") === false)
          window.location.href =
            "https://sharepoint.ppi.ca/sites/portal/Pages/portal.aspx?authRedirect=" +
            encodeURIComponent(url);
        if (
          url.includes("/?authToken") === false &&
          url.includes("?authToken") === true
        )
          window.location.href = url.replace("?authToken", "&authToken");
      }
    }
    //  console.log(this.Token)
    //  console.log(window.location.href)
  };

  componentDidMount = async () => {
    this.minimizedClicked = false;
    this.sideBarMinimized = false;
    this.preLoadAppletImages = false;

    this.ParseQueryString();

    window.addEventListener("message", this.handleIframeTask);
    //window.addEventListener("beforeunload", this.handleWindowClose);
    //window.addEventListener('beforeunload', this.handleUnload);
  };

  componentWillUnmount() {
    window.removeEventListener("message", this.handleIframeTask);
    //  window.removeEventListener("beforeunload", this.handleUnload);
  }

  redirectClear = () => {
    //setTimeout(() => {
    //this.setState({
    //    redirectTo: ""
    //    });
    ////    }, 2000);
    ////},

    const qs = {
      PA: "",
      PLA: "",
      WL: "",
      INA: "",
      EP: "",
      EB: "",
      LIFO: "",
      CA: "",
      BR: "",
      IR: "",
      CSW: "",
      DB: "",
    };

    if (
      this.state.QS.EP !== qs.EP ||
      this.state.QS.WL !== qs.WL ||
      this.state.QS.INA !== qs.INA ||
      this.state.QS.LIFO !== qs.LIFO ||
      this.state.QS.CA !== qs.CA ||
      this.state.QS.BR !== qs.BR ||
      this.state.QS.IR !== qs.IR ||
      this.state.QS.CSW !== qs.CSW ||
      this.state.QS.PA !== qs.PA ||
      this.state.QS.PLA !== qs.PLA ||
      this.state.QS.EB !== qs.EB ||
      this.state.QS.DB !== qs.DB
    ) {
      setTimeout(() => {
        this.setState({
          QS: qs,
          redirectTo: "",
        });
      }, 2000);
    }
  };

  redirectClear2 = () => {
    setTimeout(() => {
      this.QS2 = "";
      this.snapimport = "";
      this.caseGUID = "";
      this.clientGUID = "";
      this.DBClientID = "";
      this.appletCode = "";
      this.DBAction = "&DBAction=";
      this.FBAction = "&FBAction=0";
    }, 500);
  };

  redirectClear3 = () => {
    setTimeout(() => {
      this.setState({
        redirectTo: "",
      });
      this.appletCode = "";
    }, 5);
  };

  handleIframeTask = (e) => {
    if (e.data !== "") {
      const str = e.data.toString();
      //   console.log("MSG: " + str)
      const divider1 = str.indexOf("_");
      const divider2 = str.lastIndexOf("_");

      if (str.indexOf("LOAD_") >= 0) {
        //    console.log(str, str.indexOf("LOAD_"))
        this.appletCode = "'" + str.substring(divider2 + 1, str.length) + "'";
        let redirectToApplet = "DB";
        this.DBAction = "&DBAction=".concat(
          str.substring(divider2 + 1, str.length)
        );
        this.updateRedirectAndQS(
          redirectToApplet,
          undefined,
          undefined,
          this.DBAction
        );
      } else if (str.indexOf("OPENCASE_") >= 0) {
        let applet = "";
        let redirectToApplet = "";
        if (divider2 > divider1) {
          // has language flag
          applet = str.substring(divider1 + 1, divider2);
        }
        for (var enumMember in TOOLKIT.en) {
          //       console.log( TOOLKIT.en[enumMember])
          if (applet === TOOLKIT.en[enumMember]) redirectToApplet = enumMember;
        }
        this.caseGUID = str.substring(divider2 + 1, str.length);
        this.updateRedirectAndQS(redirectToApplet);
      } else if (str.indexOf("SWITCHCASE_") >= 0) {
        //let applet = "";
        //let redirectToApplet = "";

        //alert(redirectToApplet)
        this.caseGUID = str.substring(divider2 + 1, str.length);
        //this.updateRedirectAndQS(redirectToApplet)
        //    console.log(this.caseGUID)
      } else if (str.indexOf("CLIENTCASES_") >= 0) {
        //let applet = "";
        //let redirectToApplet = "";

        this.clientGUID = str.substring(divider2 + 1, str.length);
        let redirectToApplet = "DB";
        this.DBAction = "&DBAction=&clientGUID=" + this.clientGUID;
        this.updateRedirectAndQS(
          redirectToApplet,
          undefined,
          undefined,
          this.DBAction
        );
        //    console.log(this.clientGUID)
      } else if (str.indexOf("TOKEN_FAILED") >= 0) {
        this.getTokenFromLocalOrRedirectThuPortal(true);
      } else if (str.indexOf("FRAME_LOADED") >= 0) {
        
        unloadSpinner();
      } else {
        if (divider1 >= 0) {
          if (divider2 > divider1) {
            // has language flag
            const lang = str.substring(divider1 + 1, divider2);
            this.setLanguage(lang);
          }
          let redirectToApplet = str.substring(0, divider1);
          const QS = str.substring(divider2 + 1, str.length);
          this.updateRedirectAndQS(redirectToApplet, QS);
        }
      }
    }
  };

  setLanguage = (lang) => {
    //    console.log(lang)
    const logoSource =
      lang === "en" ? toolkitdirectlogoenglish : toolkitdirectlogofrench;
    this.setState({ language: lang, logoSource: logoSource });
  };

  setToken = (authToken) => {
    try {
      const decoded = jwt_decode(authToken);
      this.externalUser = decoded.iss.toString().includes("adfs")
        ? true
        : false;
      this.tokenValid = true;
      this.userEmail = decoded.upn;
    } catch (error) {
      this.tokenValid = false;
      this.externalUser = true;
      //    alert("login is not valid")
    }

    //let userEmail = decoded.upn;

    // const result= await fetchGetAgentGUIDFromDB(userEmail)
    // await console.log(userEmail,result);

    // await this.setState({userEmail:userEmail, userGUID: result.caseGUID});
  };
  tokenExternal = (authToken) => {
    try {
      const decoded = jwt_decode(authToken);
      this.tokenValid = true;
      return decoded.iss.toString().includes("adfs") ? true : false;
    } catch (error) {
      //       alert("login is not valid")
      this.tokenValid = false;
      return false;
    }
  };

  updateRedirectAndQS = (redirectToApplet, QS, snapimport, DBAction, FBAction) => {
    this.setState({
      redirectTo: "",
    });
    const applet = redirectToApplet.toLowerCase();
    let redirect = PATHS.Home; // "/INA";
    if (applet === "ep" || applet === "pye" || applet === "estateprotection")
      redirect = PATHS.EP; // "/EstateProtection"
    else if (applet === "lifo") redirect = PATHS.LIFO; // "/LIFO";
    else if (applet === "ca" || applet === "capitalalternatives")
      redirect = PATHS.CA; // "/CA";
    else if (applet === "csw" || applet === "carriersoftware")
      // && this.externalUser===false)
      redirect = PATHS.CSW;
    else if (applet === "ina") redirect = PATHS.INA; // "/INA";
    else if (applet === "pa" || applet === "practiceassistant")
      redirect = PATHS.PA; // "/PracticeAssistant";
    else if (applet === "ifywl" || applet === "wl" || applet === "wholelife")
      redirect = PATHS.WL; // "/WHOLELIFE";
    else if (applet === "db") redirect = PATHS.DB;
    else if (applet === "eb" || applet === "estatebond") redirect = PATHS.EB;
    else if (applet === "br" || applet === "bridgingrisk") redirect = PATHS.BR;
    else if (applet === "ir" || applet === "incomereplacement") redirect = PATHS.IR;
    else if (applet === "pla" || applet === "planningassistant") redirect = PATHS.PLA;
    else if (applet === "tips") redirect = PATHS.TIPS;
    else if (applet === "fb") redirect = PATHS.FB;
    else if (applet === "au" || applet === "appletusage") redirect = PATHS.AU;
    else if (applet !== "") redirect = PATHS.Home;

    this.QS2 = QS !== undefined ? QS : "";
    this.snapimport = snapimport !== undefined ? snapimport : "";
    this.DBAction = DBAction !== undefined ? DBAction : "&DBAction=";
    this.FBAction = FBAction !== undefined ? FBAction : "&FBAction=";

    this.setState({
      redirectTo: redirect,
    });
  };

  convertVersion = (ver) => {
    let verNo = 0;
    let inS = ver.indexOf(".");
    verNo = ver.substring(0, inS);
    let verS = this.num(Number(verNo));
    let inS2 = ver.indexOf(".", inS + 1);
    verNo = ver.substring(inS + 1, inS2);
    verS += this.num(Number(verNo));
    verNo = ver.substring(inS2 + 1, ver.length);
    verS += this.num(Number(verNo));
    //console.log(Number(verS));
    return Number(verS);
  };
  num = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };

  selectApplet = (applet) => {
    
    if (this.state.selectedApplet !== applet)
      this.setState({ selectedApplet: applet });
  };

  changeLang = (event) => {
    event.preventDefault();
    var data2 = this.state;
    var oldLang = this.state.language;
    data2.language = this.state.language === "en" ? "fr" : "en";
    data2.logoSource =
      this.state.language === "en"
        ? toolkitdirectlogoenglish
        : toolkitdirectlogofrench;
    this.langText = this.state.language === "en" ? "Fran�ais" : "English";
    this.setState({ data2, loading: false });
  };
  changeLogo = (mode) => {
    var data2 = this.state;
    if (mode === true) {
      var logoSource1 =
        this.state.language === "en"
          ? toolkitdirectlogoenglish
          : toolkitdirectlogofrench;
      var logoSource2 =
        this.state.language === "en"
          ? toolkitdirectlogoenglishNoPPI
          : toolkitdirectlogofrenchNoPPI;
      this.visiblePPI = data2.logoSource === logoSource2;
      data2.loading = true;
      data2.logoSource =
        this.state.logoSource === logoSource1 ? logoSource2 : logoSource1;
    }
    this.visible = false;
    this.setState({ data2, loading: false });
  };

  minimizeSideBar = () => {
    this.minimizedClicked = true;
    this.sideBarMinimized = !this.sideBarMinimized;
    if (
      document.getElementById("goh") !== null &&
      document.getElementById("goh") !== undefined
    ) {
      document.getElementById("goh").style.width = this.sideBarMinimized
        ? "119.5%"
        : "100%";
      document.getElementById("goh").style.marginLeft = this.sideBarMinimized
        ? "-19.1%"
        : ".3%";
    }
    //  document.getElementById("goh").className=this.sideBarMinimized=== true ? "appletiFrameExp" : "appletiFrame"

    /* this.setState(prevState => {
            const newState = { ...prevState };
            newState.loading = false;
            newState.sideBarMinimized = !newState.sideBarMinimized;//== "240px" ? "20px" : "240px";
            return newState;
        })  */
  };

  simulateClickPA(e) {
    e.click();
  }

  openCaseForEdit = (id, applet) => {
    //    console.log(id,applet)
    this.caseGUID = id;
    const lang = this.state.language;
    this.redirectClear3();
    let redirectPAth;
    if (applet === TOOLKIT[lang].INA) redirectPAth = PATHS.INA;
    else if (applet === TOOLKIT[lang].EP) redirectPAth = PATHS.EP;
    else if (applet === TOOLKIT[lang].CA) redirectPAth = PATHS.CA;
    else if (applet === TOOLKIT[lang].LIFO) redirectPAth = PATHS.LIFO;
    else if (applet === TOOLKIT[lang].WL) redirectPAth = PATHS.WL;
    else if (applet === TOOLKIT[lang].PA) redirectPAth = PATHS.PA;
    else if (applet === TOOLKIT[lang].PLA) redirectPAth = PATHS.PLA;
    else if (applet === TOOLKIT[lang].EB) redirectPAth = PATHS.EB;
    else if (applet === TOOLKIT[lang].BR) redirectPAth = PATHS.BR;
    else if (applet === TOOLKIT[lang].IR) redirectPAth = PATHS.IR;
    else if (applet === TOOLKIT[lang].TIPS) redirectPAth = PATHS.TIPS;
    else if (applet === TOOLKIT[lang].FB) redirectPAth = PATHS.FB;
    else if (applet === TOOLKIT[lang].AU) redirectPAth = PATHS.AU;
    else redirectPAth = PATHS.Home;

    this.setState(
      {
        redirectTo: redirectPAth,
      },
      this.redirectClear3
    );

    /* 
        this.setState(prevState => {
            const newState = { ...prevState };
            newState.loading = false;
            newState.sideBarMinimized = !newState.sideBarMinimized;//== "240px" ? "20px" : "240px";
            return newState;
        }) */
  };

  /* updateSelectedRow = (id, applet) => {
    this.selectedApplet = { id: id, applet: applet };
  }; */

  render() {
    //console.log(this.preLoadAppletImages)
    const INA_URL = getURL(PATHS.INA);
    const PA_URL = getURL(PATHS.PA);
    const PLA_URL = getURL(PATHS.PLA);
    const WL_URL = getURL(PATHS.WL);
    const EP_URL = getURL(PATHS.EP);
    const EB_URL = getURL(PATHS.EB);
    const LIFO_URL = getURL(PATHS.LIFO);
    const CSW_URL = getURL(PATHS.CSW);
    const CA_URL = getURL(PATHS.CA);
    const BR_URL = getURL(PATHS.BR);
    const IR_URL = getURL(PATHS.IR);
    const DB_URL = getURL(PATHS.DB);
    const DBCL_URL = getURL(PATHS.DBCL);
    const FB_URL = getURL(PATHS.FB);

    //  const showPA = this.state.showSelectApplet === 1
    const noQS =
      this.state.QS.INA !== "" && this.convertVersion(version) > 10003;

    //        this.redirectClear2()
    let QS =
      (this.QS2 !== "" ? "&QS=" + this.QS2 : "") +
      (this.recover !== "" && this.recover !== undefined
        ? "&recover=" + this.recover
        : "") +
      (this.state.userGUID !== "" && this.state.userGUID !== undefined
        ? "&userGUID=" + this.state.userGUID
        : "") +
      (this.caseGUID !== "" && this.caseGUID !== undefined
        ? "&caseGUID=" + this.caseGUID
        : "") +
      (this.Token !== undefined && this.Token !== ""
        ? "&TKTOK=" + this.Token
        : "") +
      (this.DBClientID !== "" && this.DBClientID !== undefined
        ? "&DBClientID=" + this.DBClientID
        : "") +
      (this.snapimport !== "" ? "&snapimport=" + this.snapimport : "") +
      "&a=" +
      Math.random();
      // token
      if(QS.includes("TKTOK") === false)
        QS = QS + (this.Token !== "" ? "&TKTOK=" + this.Token : "");
    if (QS.includes("caseGUID=") === false && this.selectedApplet.applet !== "")
      QS += "&caseGUID=" + this.selectedApplet.id;

    //   console.log(this.state.userGUID,QS)
    const QSDBAction =
      this.DBAction + (this.Token !== "" ? "&TKTOK=" + this.Token : "");
    const QSDBActionClients =
      "&DBAction=clients" + (this.Token !== "" ? "&TKTOK=" + this.Token : "");

    // feedback
    const QSFeedbackAction =
      "&FBAction=1" + (this.Token !== "" ? "&TKTOK=" + this.Token : "");

    // if(this.preLoadAppletImages === true)
    //   console.log(this.appletImageArray)

    this.redirectClear2();
    /* return (
			<CacheBuster>
				{({ loading, isLatestVersion, refreshCacheAndReload }) => {
					if (loading) return null;
					if (!loading && !isLatestVersion) {
						// You can decide how and when you want to force reload
						refreshCacheAndReload();
					} */

    //localStorage.clear();

    /*  if (showPA === true)

                       return (
                          ""
                        );

y
                    
                    else */



    return (
      <Layout
        style={{ height: "100vh" }}
        language={this.state.language}
        selectedApplet={this.state.selectedApplet}
        changeLang={this.changeLang}
        logoSource={this.state.logoSource}
        changeLogo={this.changeLogo}
        visible={this.visible}
        minimizeSideBar={this.minimizeSideBar}
        sideBarMinimized={this.sideBarMinimized}
        redirectTo={this.state.redirectTo}
        redirectClear={this.redirectClear}
        externalUser={this.externalUser}
        tokenValid={this.tokenValid}
        loginUsageAccess={this.state.loginUsageAccess}
        loginFeedbackAccess={this.state.loginFeedbackAccess}
      >
        <Switch>
          {/* <Redirect from="/" to="/home" /> */}
          {noQS === true ? (
            <Route
              exact
              path="/"
              render={(props) => (
                <Applet
                  {...props}
                  QS={QS}
                  language={this.state.language}
                  appletiFrameExp={this.sideBarMinimized}
                  appletURL={INA_URL}
                  changeLang={this.changeLang}
                />
              )}
            />
          ) : this.visiblePPI === true ? (
            <Route
              exact
              path="/"
              render={(props) => (
                <AppletHome
                  {...props}
                  language={this.state.language}
                  changeLang={this.changeLang}
                  selectApplet={this.selectApplet("Home")}
                />
              )}
            />
          ) : (
            <Route
              exact
              path="/"
              render={(props) => (
                <AppletHomeNoPPI
                  {...props}
                  language={this.state.language}
                  changeLang={this.changeLang}
                />
              )}
            />
          )}

          <Route
            path={PATHS.PA}
            render={(props) => (
              <Applet
                {...props}
                QS={QS}
                language={this.state.language}
                appletiFrameExp={this.sideBarMinimized}
                appletURL={PA_URL}
                changeLang={this.changeLang}
                selectApplet={this.selectApplet}
              />
            )}
            simulateClickPA={this.simulateClickPA}
          />
          <Route
            path={PATHS.PLA}
            render={(props) => (
              <Applet
                {...props}
                QS={QS}
                language={this.state.language}
                appletiFrameExp={this.sideBarMinimized}
                appletURL={PLA_URL}
                changeLang={this.changeLang}
                selectApplet={this.selectApplet}
              />
            )}
            simulateClickPLA={this.simulateClickPLA}
          />
          <Route
            path={PATHS.INA}
            render={(props) => (
              <Applet
                {...props}
                QS={QS}
                language={this.state.language}
                appletiFrameExp={this.sideBarMinimized}
                appletURL={INA_URL}
                changeLang={this.changeLang}
                selectApplet={this.selectApplet}
              />
            )}
          />
          <Route
            path={PATHS.WL}
            render={(props) => (
              <Applet
                {...props}
                QS={QS}
                language={this.state.language}
                appletiFrameExp={this.sideBarMinimized}
                appletURL={WL_URL}
                changeLang={this.changeLang}
                selectApplet={this.selectApplet}
              />
            )}
          />
          <Route
            path={PATHS.LIFO}
            render={(props) => (
              <Applet
                {...props}
                QS={QS}
                language={this.state.language}
                appletiFrameExp={this.sideBarMinimized}
                appletURL={LIFO_URL}
                changeLang={this.changeLang}
                selectApplet={this.selectApplet}
              />
            )}
          />
          <Route
            path={PATHS.CA}
            render={(props) => (
              <Applet
                {...props}
                QS={QS}
                language={this.state.language}
                appletiFrameExp={this.sideBarMinimized}
                appletURL={CA_URL}
                changeLang={this.changeLang}
                selectApplet={this.selectApplet}
              />
            )}
          />
          <Route
            path={PATHS.BR}
            render={(props) => (
              <Applet
                {...props}
                QS={QS}
                language={this.state.language}
                appletiFrameExp={this.sideBarMinimized}
                appletURL={BR_URL}
                changeLang={this.changeLang}
                selectApplet={this.selectApplet}
              />
            )}
          />
          <Route
            path={PATHS.IR}
            render={(props) => (
              <Applet
                {...props}
                QS={QS}
                language={this.state.language}
                appletiFrameExp={this.sideBarMinimized}
                appletURL={IR_URL}
                changeLang={this.changeLang}
                selectApplet={this.selectApplet}
              />
            )}
          />
          <Route
            path={PATHS.CSW}
            render={(props) => (
              <Applet
                {...props}
                QS={QS}
                language={this.state.language}
                appletiFrameExp={this.sideBarMinimized}
                appletURL={CSW_URL}
                changeLang={this.changeLang}
                selectApplet={this.selectApplet}
              />
            )}
          />
          <Route
            path={PATHS.EP}
            render={(props) => (
              <Applet
                {...props}
                QS={QS}
                language={this.state.language}
                appletiFrameExp={this.sideBarMinimized}
                appletURL={EP_URL}
                changeLang={this.changeLang}
                selectApplet={this.selectApplet}
              />
            )}
          />
          <Route
            path={PATHS.EB}
            render={(props) => (
              <Applet
                {...props}
                QS={QS}
                language={this.state.language}
                appletiFrameExp={this.sideBarMinimized}
                appletURL={EB_URL}
                changeLang={this.changeLang}
                selectApplet={this.selectApplet}
              />
            )}
          />
          <Route
            path={PATHS.TIPS}
            render={(props) => (
              <AppletTIPS {...props} language={this.state.language} />
            )}
          />
          
          <Route
            path={PATHS.DB}
            render={(props) => (
              <DBData2
                {...props}
                QS={QSDBAction}
                language={this.state.language}
                appletiFrameExp={this.sideBarMinimized}
                appletURL={INA_URL}
                changeLang={this.changeLang}
                selectApplet={this.selectApplet}
              />
            )}
          />
          {/* <Route path= {PATHS.DB} render={(props) => <DBData {...props}  QS={"&DBAction=1"} language={this.state.language} appletiFrameExp={this.sideBarMinimized} userEmail={this.state.userEmail} appletURL={DB_URL} changeLang={this.changeLang} openCaseForEdit={this.openCaseForEdit} updateSelectedRow={this.updateSelectedRow} appletCode={this.appletCode}/>  } /> */}
          <Route
            path={PATHS.DBCL}
            render={(props) => (
              <DBData2
                {...props}
                QS={QSDBActionClients}
                language={this.state.language}
                appletiFrameExp={this.sideBarMinimized}
                appletURL={INA_URL}
                changeLang={this.changeLang}
                selectApplet={this.selectApplet}
              />
            )}
          />
          {/* <Route
            path={PATHS.FB}
            render={(props) => (
              <Feedback {...props} email={this.userEmail}language={this.state.language} />
            )}
          /> */}
          <Route
            path={PATHS.FB} // feedback
            render={(props) => (
              <DBData2
                {...props}
                QS={QSFeedbackAction}
                language={this.state.language}
                appletiFrameExp={this.sideBarMinimized}
                appletURL={INA_URL}
                changeLang={this.changeLang}
                selectApplet={this.selectApplet}
              />
            )}
          />
          <Route
            path={PATHS.AU}
            render={(props) => (
              <AppletUsage {...props} token={this.Token} feedbackAccess={this.state.loginFeedbackAccess} language={this.state.language} />
            )}
          />
        </Switch>
        {/* preload small image for each applet to pass credntials */}
        {this.preLoadAppletImages === true &&
          this.appletImageArray.map((img,index) => (
            <img src={img} key={index} style={{ display: "none" }} />
          ))}
      </Layout>
    );
  }
  //}
  /* </CacheBuster>
		); */
  // }
}
