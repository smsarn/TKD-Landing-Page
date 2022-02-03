import React, { Component } from 'react';
import { Route, Redirect,Switch } from 'react-router';
import { withRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AppletHome } from './components/AppletHome';
import { AppletTIPS } from './components/TIPS';
//import { DBData } from './components/DBData';
import { DBData2 } from './components/DBData2';
//import { DBClientsData } from './components/DBClientsData';

/* import {
    fetchGetAgentGUIDFromDB    
  } from "./Utils/fetch"; */
import { AppletHomeNoPPI } from './components/AppletHomeNoPPI';
//import jwt_decode from 'jwt-decode';

import { Applet } from './components/Applet';
import toolkitdirectlogoenglish from './Images/toolkit.direct.logo_english_rgb_reverse.png';
import toolkitdirectlogofrench from './Images/toolkit.direct.logo_french_rgb_reverse.png';
import toolkitdirectlogoenglishNoPPI from './Images/toolkit.direct.logo_english_rgb_reverse No PPI.png';
import toolkitdirectlogofrenchNoPPI from './Images/toolkit.direct.logo_french_rgb_reverse No PPI.png';

import './App.css';
import { CacheBuster } from "./CacheBuster";
import queryString from 'query-string';
import { version } from '../package.json';
import {PATHS,getURL ,TOOLKIT } from './Utils/util';


export default class App extends Component {
	displayName = "PPI Toolkit Direct";
	constructor(props) {
		super(props);
		var lang = window.navigator.userLanguage || window.navigator.language;
		lang = lang.toString().indexOf("en")>=0 ? "en" : "fr";
        this.state = {
            language: lang,
            loading: true,
            selectedApplet:"Home",
            logoSource: lang === "en" ? toolkitdirectlogoenglish : toolkitdirectlogofrench,
            userGUID:"",//"PPI",
            userEmail:"PPI",
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
                CSW: "",
                DB: "",
                DBCL: "",
            }
        };
		this.langText = "English";
        this.visible = true;
        this.visiblePPI = true;
        this.minimizedClicked = false;
        this.redirectTo2 = ""
        this.QS2 = "";
        this.snapimport="";
        this.sideBarMinimized= false;
        this.caseGUID;
        this.DBClientID;
        this.selectedApplet={id:"",applet:""}
        this.appletCode=""
        this.DBAction="&DBAction="
        this.Token=""
        
	}

    
    getTokenFromLocalOrRedirectThuPortal=(redirect)=>{
        this.Token= localStorage.getItem("TKTOK");
        console.log(this.Token)
       
        if((this.Token===undefined || this.Token===null || this.Token==="") )
    
        {    
            sessionStorage.setItem(
            "TKTOK_Internal",
            1)

            let url=window.location.href
            let qs=""
            if(url.includes("/?"))
                qs=url.replace("/?","?")
            if(qs.includes("?"))
            {
                const nIn=qs.indexOf("?")
                qs=qs.substring(nIn)
                qs=qs.replace("?","&")
             //   url=url.replace("?","&")
            }

            console.log(url)
            if (redirect===true)
            {
                const query = queryString.parse(window.location.search);
                console.log(query);
  
                let nIn1=url.indexOf("?authToken")
                if(nIn1===-1)
                    nIn1=url.indexOf("&authToken")
                if(nIn1>=0)
                {
                    const nIn2=url.substring(nIn1+1).indexOf("&")
                    if(nIn2>=0)
                    {
                
                        url=url.substring(0,nIn1)+url.substring(nIn1+nIn2+1)
                    }
                    else
                    {
                         url=url.substring(0,nIn1)
                    }
                }

             
                window.location.href = "https://sharepoint.ppi.ca/sites/portal/Pages/portal.aspx?authRedirect="+ encodeURIComponent(url);    
            }
            else{
                if(url.includes("authToken")===false)
                    window.location.href = "https://sharepoint.ppi.ca/sites/portal/Pages/portal.aspx?authRedirect="+ encodeURIComponent(url);
                if(url.includes("/?authToken")===false && url.includes("?authToken")===true)
                    window.location.href=url.replace("?authToken","&authToken")
            }
        
        }
        console.log(this.Token)
        console.log(window.location.href)
    }

componentDidMount = () => {
    this.minimizedClicked = false;
    this.sideBarMinimized= false;
    const query = queryString.parse(window.location.search);
    console.log(query);
        
    if (query.lang !== undefined) 
        this.setLanguage(query.lang);
    
        console.log(query.authToken)
 
    const internal=sessionStorage.getItem("TKTOK_Internal")
    /* const QS=localStorage.getItem("QS_Internal") */
    console.log(this.Token)
    if (query.authToken !== undefined) 
    {
        this.Token=query.authToken;
        
       /*  if(!(QS === undefined || QS === "" || QS===null))
        {
            alert(QS)
            localStorage.removeItem(
                "QS_Internal")
            window.location.href=window.location.href+QS
        }     */

        if(internal===null || internal===undefined)
        {
                console.log("from external")
                localStorage.setItem(
                "TKTOK",
                query.authToken
            );
        }
    }
    else
    {
       
        this.getTokenFromLocalOrRedirectThuPortal(false)
      /*   this.Token= localStorage.getItem("TKTOK");
        console.log(this.Token)
       
        console.log(window.location.href)
        if((this.Token===undefined || this.Token===null || this.Token==="") )
    
        {    
            sessionStorage.setItem(
            "TKTOK_Internal",
            1)

            let url=window.location.href
            let qs=""
            if(url.includes("/?"))
                qs=url.replace("/?","?")
            if(qs.includes("?"))
            {
                const nIn=qs.indexOf("?")
                qs=qs.substring(nIn)
                qs=qs.replace("?","&")
             //   url=url.replace("?","&")
            }

//               localStorage.setItem(
//                  "QS_Internal",
//                qs)
                 

            if(url.includes("authToken")===false)
                window.location.href = "https://sharepoint.ppi.ca/sites/portal/Pages/portal.aspx?authRedirect="+ encodeURIComponent(url);
            if(url.includes("/?authToken")===false && url.includes("?authToken")===true)
                window.location.href=url.replace("?authToken","&authToken")
            
        
        }
        console.log(this.Token)
        console.log(window.location.href)
       */      
    }
    console.log(this.Token)
    
  //  if(this.Token=== undefined)this.Token=""
    
     
    if (!(query.QS === undefined && query.applet === undefined && query.snapimport === undefined)) {
       this.updateRedirectAndQS(query.applet, query.QS, query.snapimport);
    }

    window.addEventListener('message', this.handleIframeTask);
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
            CSW: "",
            DB: "",
        }


        if (this.state.QS.EP !== qs.EP || this.state.QS.WL !== qs.WL || this.state.QS.INA !== qs.INA 
            || this.state.QS.LIFO !== qs.LIFO || this.state.QS.CA !== qs.CA|| this.state.QS.CSW !== qs.CSW
            ||this.state.QS.PA !== qs.PA || this.state.QS.PLA !== qs.PLA|| this.state.QS.EB !== qs.EB || this.state.QS.DB !== qs.DB)
     {
            setTimeout(() => {
          

                this.setState({
                    QS: qs, redirectTo:""
                })
            }, 2000);
        }
        
    }



    redirectClear2 = () => {
        setTimeout(() => {
            this.QS2 = "";
            this.snapimport="";
            this.caseGUID="";
            this.DBClientID="";
            this.appletCode="";
            this.DBAction="&DBAction=";
        }, 500);
    }

    redirectClear3 = () => {
        setTimeout(() => {
            this.setState({
                redirectTo:""
                
            })
            this.appletCode=""
        }, 5);
    }

    handleIframeTask = (e) => {
        if (e.data !== "") {
            const str=e.data
            console.log(str, str.indexOf("LOAD_"))
            const divider1 = str.indexOf("_");
            const divider2 = str.lastIndexOf("_");
                
            if(str.indexOf("LOAD_")>=0)
            {
                console.log(str, str.indexOf("LOAD_"))
                this.appletCode = "'"+str.substring(divider2 + 1, str.length)+"'"
                let redirectToApplet ="DB";
                this.DBAction="&DBAction=".concat(str.substring(divider2 + 1, str.length))
                this.updateRedirectAndQS(redirectToApplet, undefined,undefined,this.DBAction )
                console.log(this.appletCode, this.DBAction)
            }
            else if(str.indexOf("OPENCASE_")>=0)
            {
                let applet = "";
                let redirectToApplet = "";
                if(divider2>divider1) // has language flag
                {
                        applet = str.substring(
                        divider1 + 1, 
                        divider2
                    );
                    
                }
                for (var enumMember in TOOLKIT.en) {
                    console.log( TOOLKIT.en[enumMember])
                    if(applet===TOOLKIT.en[enumMember])
                        redirectToApplet = enumMember;
                 }
                //alert(redirectToApplet)
                this.caseGUID  = str.substring(divider2 + 1, str.length)
                this.updateRedirectAndQS(redirectToApplet)
            }
            else if(str.indexOf("SWITCHCASE_")>=0)
            {
                //let applet = "";
                //let redirectToApplet = "";
                
                //alert(redirectToApplet)
                this.caseGUID  = str.substring(divider2 + 1, str.length)
                //this.updateRedirectAndQS(redirectToApplet)
                console.log(this.caseGUID)
            
            }
            else if(str.indexOf("TOKEN_FAILED")>=0)
            {
                this.getTokenFromLocalOrRedirectThuPortal(true)
            }
          
            else
            {
                if(divider2>divider1) // has language flag
                {
                    const lang = str.substring(
                        divider1 + 1, 
                        divider2
                    );
                    this.setLanguage(lang)
                }
                let redirectToApplet = str.substring(0, divider1);
                const QS = str.substring(divider2 + 1, str.length)
                this.updateRedirectAndQS(redirectToApplet, QS)
            }
        }
    };

    setLanguage=(lang)=>{
            //    console.log(lang)
                const logoSource= lang === "en" ? toolkitdirectlogoenglish : toolkitdirectlogofrench
                this.setState({language: lang, logoSource:logoSource});}

    /* setToken = async(authToken)=>{
        const decoded = jwt_decode(authToken);
        console.log(decoded);       
       // alert(decoded.upn)
        let userEmail = decoded.upn;
        
       const result= await fetchGetAgentGUIDFromDB(userEmail)
        await console.log(userEmail,result);       
        
        await this.setState({userEmail:userEmail, userGUID: result.caseGUID});
        
    }
     */    

    updateRedirectAndQS = (redirectToApplet, QS,snapimport,DBAction) => {
        this.setState({
            redirectTo: ""
        });
        const applet=redirectToApplet.toLowerCase();
            let redirect =PATHS.Home;// "/INA";
            if (applet === "ep"||applet === "pye")
                redirect = PATHS.EP;// "/EstateProtection"
            else if (applet === "lifo")
                redirect = PATHS.LIFO;// "/LIFO";
            else if (applet === "ca" || applet === "capitalalternatives")
                redirect = PATHS.CA;// "/CA";
            else if (applet === "csw" || applet === "carriersoftware")
                redirect = PATHS.CSW;
            else if (applet === "ina")
                redirect = PATHS.INA; // "/INA";
            else if (applet === "pa" || applet === "practiceassistant")
                redirect = PATHS.PA;// "/PracticeAssistant";
            else if (applet === "ifywl" || applet === "wl")
                redirect = PATHS.WL; // "/WHOLELIFE";
            else if (applet === "db")
                redirect = PATHS.DB;
            else if (applet !== "")
                redirect = PATHS.Home;
    


        this.QS2 = QS!==undefined?QS:"";
        this.snapimport = snapimport!==undefined?snapimport:"";
        this.DBAction =DBAction !==undefined ?DBAction:"&DBAction="
                
                
        this.setState({
            redirectTo: redirect
        });




    }


	clearListCookies = () => {
	//console.log(document.cookie);
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var spcook = cookies[i].split("=");
		deleteCookie(spcook[0]);
	}

	function deleteCookie(cookiename) {
		var d = new Date();
		d.setDate(d.getDate() - 1);
		var expires = ";expires=" + d;
		var name = cookiename;
		//alert(name);
		var value = "";
		document.cookie = name + "=" + value + expires + "; path=/acc/html";
	}
	localStorage.clear();
	//window .location = ""; // TO REFRESH THE PAGE
}

  convertVersion=(ver)=> {
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

}
num=(n)=> {
	return n > 9 ? "" + n : "0" + n;
}

    selectApplet = (applet) => {
        if(this.state.selectedApplet!==applet)
            this.setState({selectedApplet:applet})

    }

	changeLang = () => {
		
		var data2 = this.state;
		var oldLang = this.state.language;
        data2.language = this.state.language === "en" ? "fr" : "en";
        data2.logoSource = this.state.language === "en" ? toolkitdirectlogoenglish : toolkitdirectlogofrench 
		this.langText = this.state.language === "en" ? "Fran�ais" : "English";
		this.setState({ data2, loading: false });
    }
    changeLogo = (mode) => {
        
        var data2 = this.state;
        if (mode === true) {
            var logoSource1 = this.state.language === "en" ? toolkitdirectlogoenglish : toolkitdirectlogofrench;
            var logoSource2 = this.state.language === "en" ? toolkitdirectlogoenglishNoPPI : toolkitdirectlogofrenchNoPPI;
            this.visiblePPI = data2.logoSource === logoSource2
            data2.loading=true
            data2.logoSource = this.state.logoSource === logoSource1 ? logoSource2 : logoSource1;
           
        }
        this.visible = false;
        this.setState({ data2, loading: false });

    }

    minimizeSideBar = () => {
        this.minimizedClicked = true;
        this.sideBarMinimized= !this.sideBarMinimized;
        
        if (document.getElementById("goh")!== null && document.getElementById("goh")!== undefined)
            document.getElementById("goh").className=this.sideBarMinimized=== true ? "appletiFrameExp" : "appletiFrame"
         /* 
        this.setState(prevState => {
            const newState = { ...prevState };
            newState.loading = false;
            newState.sideBarMinimized = !newState.sideBarMinimized;//== "240px" ? "20px" : "240px";
            return newState;
        }) */
    }

    simulateClickPA(e) {
        e.click()
    }

    
   
    openCaseForEdit = (id, applet) => {
        console.log(id,applet)
        this.caseGUID = id;
        const lang= this.state.language;
        this.redirectClear3() 
        let redirectPAth;
        if(applet===TOOLKIT[lang].INA)
            redirectPAth=PATHS.INA
        else if(applet===TOOLKIT[lang].EP)
            redirectPAth= PATHS.EP
        else if(applet===TOOLKIT[lang].CA)
            redirectPAth= PATHS.CA
        else if(applet===TOOLKIT[lang].LIFO)
            redirectPAth= PATHS.LIFO
        else if(applet===TOOLKIT[lang].WL)
            redirectPAth= PATHS.WL
        else if(applet===TOOLKIT[lang].PA)
            redirectPAth= PATHS.PA
        else if(applet===TOOLKIT[lang].PLA)
            redirectPAth= PATHS.PLA
        else if(applet===TOOLKIT[lang].EB)
            redirectPAth= PATHS.EB
     
        else
        redirectPAth= PATHS.Home
        
        this.setState({
                redirectTo: redirectPAth
        },this.redirectClear3);


         /* 
        this.setState(prevState => {
            const newState = { ...prevState };
            newState.loading = false;
            newState.sideBarMinimized = !newState.sideBarMinimized;//== "240px" ? "20px" : "240px";
            return newState;
        }) */
    }
	
    updateSelectedRow = (id, applet) => {
        this.selectedApplet={id:id,applet:applet};
     }

	render() {
        const INA_URL = getURL(PATHS.INA);
        const PA_URL = getURL(PATHS.PA);
        const PLA_URL = getURL(PATHS.PLA);
        const WL_URL = getURL(PATHS.WL);
        const EP_URL = getURL(PATHS.EP);
        const EB_URL = getURL(PATHS.EB);
        const LIFO_URL = getURL(PATHS.LIFO);
        const CSW_URL = getURL(PATHS.CSW);
        const CA_URL = getURL(PATHS.CA);
        const DB_URL = getURL(PATHS.DB);
        const DBCL_URL = getURL(PATHS.DBCL);
      //  const showPA = this.state.showSelectApplet === 1
        const noQS = this.state.QS.INA !== "" && this.convertVersion(version) > 10003;

//        this.redirectClear2()  
        console.log(this.selectedApplet)
        let QS=  (this.QS2 !== "" ? "&QS=" + this.QS2 : "") + ((this.recover !== "" && this.recover !== undefined) ? "&recover=" + this.recover : "") + ((this.state.userGUID !== "" && this.state.userGUID!==undefined) ? "&userGUID=" + this.state.userGUID : "")  +  ((this.caseGUID !== "" && this.caseGUID !== undefined) ? "&caseGUID=" + this.caseGUID : "") +  ((this.Token !== undefined && this.Token!=="")?"&TKTOK=" + this.Token:"") + ((this.DBClientID !== "" && this.DBClientID !== undefined) ? "&DBClientID=" + this.DBClientID : "") +  (this.snapimport !== "" ? "&snapimport=" + this.snapimport : "") + "&a=" + Math.random();
        if(QS.includes("caseGUID=")===false &&  this.selectedApplet.applet!=="")
            QS+="&caseGUID=" + this.selectedApplet.id;
     //   console.log(this.state.userGUID,QS)
     //   console.log(this.DBAction)
        const QSDBAction=this.DBAction + (this.Token!==""?"&TKTOK=" + this.Token:"");
      //  console.log(QSDBAction)
        const QSDBActionClients="&DBAction=clients" + (this.Token!==""?"&TKTOK=" + this.Token:"");
      
        this.redirectClear2()  
     	return (
			<CacheBuster>
				{({ loading, isLatestVersion, refreshCacheAndReload }) => {
					if (loading) return null;
					if (!loading && !isLatestVersion) {
						// You can decide how and when you want to force reload
						refreshCacheAndReload();
					}
                   
		//localStorage.clear();

                   /*  if (showPA === true)

                       return (
                          ""
                        );

y

                    else */
                      
      
                    return (
                        <Layout language={this.state.language} selectedApplet={this.state.selectedApplet} changeLang={this.changeLang} logoSource={this.state.logoSource} changeLogo={this.changeLogo} visible={this.visible} minimizeSideBar={this.minimizeSideBar} sideBarMinimized={this.sideBarMinimized} redirectTo={this.state.redirectTo} redirectClear={this.redirectClear}>
                          <Switch>
                          {/* <Redirect from="/" to="/home" /> */}
                            {noQS === true ?
                                    <Route exact path='/' render={(props) => <Applet {...props} QS={QS}  language={this.state.language} appletiFrameExp={this.sideBarMinimized} appletURL={INA_URL} changeLang={this.changeLang} />} />
                                    : (this.visiblePPI === true ? <Route exact path='/' render={(props) => <AppletHome {...props} language={this.state.language} changeLang={this.changeLang} />} />
                                        : <Route exact path='/' render={(props) => <AppletHomeNoPPI {...props} language={this.state.language} changeLang={this.changeLang} />} />
                                    )}
                            
                            <Route path= {PATHS.PA}  render={(props) => <Applet {...props} QS={QS} language={this.state.language}  appletiFrameExp={this.sideBarMinimized} appletURL={PA_URL} changeLang={this.changeLang} selectApplet={this.selectApplet}/>} simulateClickPA={this.simulateClickPA}  />
                            <Route path= {PATHS.PLA}  render={(props) => <Applet {...props} QS={QS} language={this.state.language}  appletiFrameExp={this.sideBarMinimized} appletURL={PLA_URL} changeLang={this.changeLang} selectApplet={this.selectApplet}/>} simulateClickPLA={this.simulateClickPLA}  />
                            <Route path= {PATHS.INA} render={(props) => <Applet {...props} QS={QS}  language={this.state.language} appletiFrameExp={this.sideBarMinimized} appletURL={INA_URL} changeLang={this.changeLang}  selectApplet={this.selectApplet} />} />
                            <Route path= {PATHS.WL} render={(props) => <Applet {...props} QS={QS} language={this.state.language} appletiFrameExp={this.sideBarMinimized} appletURL={WL_URL} changeLang={this.changeLang}  selectApplet={this.selectApplet}/>} />
                            <Route path= {PATHS.LIFO} render={(props) => <Applet {...props} QS={QS}  language={this.state.language} appletiFrameExp={this.sideBarMinimized} appletURL={LIFO_URL} changeLang={this.changeLang}  selectApplet={this.selectApplet}/>} />
                            <Route path= {PATHS.CA} render={(props) => <Applet {...props} QS={QS} language={this.state.language} appletiFrameExp={this.sideBarMinimized} appletURL={CA_URL} changeLang={this.changeLang}  selectApplet={this.selectApplet}/>} />
                            <Route path= {PATHS.CSW} render={(props) => <Applet {...props} QS={QS} language={this.state.language} appletiFrameExp={this.sideBarMinimized} appletURL={CSW_URL} changeLang={this.changeLang}  selectApplet={this.selectApplet}/>} />
                            <Route path= {PATHS.EP} render={(props) => <Applet {...props} QS={QS} language={this.state.language} appletiFrameExp={this.sideBarMinimized} appletURL={EP_URL} changeLang={this.changeLang }  selectApplet={this.selectApplet}/>} />
                            <Route path= {PATHS.EB} render={(props) => <Applet {...props} QS={QS} language={this.state.language} appletiFrameExp={this.sideBarMinimized} appletURL={EB_URL} changeLang={this.changeLang }  selectApplet={this.selectApplet}/>} />
                            <Route path= {PATHS.TIPS} render={(props) => <AppletTIPS {...props} language={this.state.language}  />} />
                            <Route path= {PATHS.DB} render={(props) => <DBData2 {...props} QS={QSDBAction}  language={this.state.language} appletiFrameExp={this.sideBarMinimized} appletURL={INA_URL} changeLang={this.changeLang}  selectApplet={this.selectApplet} />} />
                            {/* <Route path= {PATHS.DB} render={(props) => <DBData {...props}  QS={"&DBAction=1"} language={this.state.language} appletiFrameExp={this.sideBarMinimized} userEmail={this.state.userEmail} appletURL={DB_URL} changeLang={this.changeLang} openCaseForEdit={this.openCaseForEdit} updateSelectedRow={this.updateSelectedRow} appletCode={this.appletCode}/>  } /> */}
                            <Route path= {PATHS.DBCL} render={(props) => <DBData2 {...props} QS={QSDBActionClients}  language={this.state.language} appletiFrameExp={this.sideBarMinimized} appletURL={INA_URL} changeLang={this.changeLang}  selectApplet={this.selectApplet} />} />
                          
                            
                           
                            </Switch>
                            </Layout>
                        );

                    
				}}
			</CacheBuster>
		);
  }
}
