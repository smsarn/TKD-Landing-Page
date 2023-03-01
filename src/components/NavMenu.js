import React, { Component } from 'react';
import { useLocation, Link } from 'react-router'

import { Redirect } from 'react-router';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import {AppletDescTooltip} from "./AppletDescTooltip" 

import './NavMenu.css';
import screenShareMsgEn from '../Images/toolkit.direct_quick.tip_20.8.14.gif';
import screenShareMsgFr from '../Images/toolkit.direct_quick.tip_20.8.14_Fr.gif';
//import newInToolkitMsgEn from '../Images/tkd_new.applets_21.01.gif';
//import newInToolkitMsgFr from '../Images/toolkit.direct_new.features.and.applets_21.09_FR.gif';//tkd_new.applets_21.01_FR.gif';
//import newInToolkitMsgEn from '../Images/toolkit.direct_new.features.and.applets_21.08.gif';

//import newInToolkitMsgEn from '../Images/toolkit.direct_new.features.and.applets_22.06.gif';
//import newInToolkitMsgFr from '../Images/toolkit.direct_new.features.and.applets_22.06_FR.gif';

import imgTipsEn from '../Images/tips.jpg';
import imgTipsFr from '../Images/tips.jpg';

import info from '../Images/infoWhite.png';
import infoG from '../Images/infoGrey.png';


import { NAVBAR_SWITCH_WIDTH, PATHS, TOOLKIT, MENU_TEXT } from  '../Utils/util';

const NO_APPLETS = 8

const LineSeperator = () => {
    return <hr style={{marginLeft:"0px", marginRight:"0px",marginBottom:"10px",marginTop:"0px", borderTop: "2px solid rgba(150, 150, 150, 0.3)"}}/>;
     {/* <hr style={{marginLeft:"45px", marginRight:"20px",marginBottom:"5px",marginTop:"5px", borderTop: "2px solid rgba(150, 150, 150, 0.3)"}}/>; */}
    
};

const SaveMessage = (props) => {
    return        <li><span><input className="saveMsg" style={props.saveMessageStyle} type="button" value={props.message} /> </span></li>
}          

const Coushin =() => {
    return <div style={{marginBottom:"50px"}}></div>
}
 
function isTablet () {
        
    const userAgent = navigator.userAgent.toLowerCase();
    
    
    let isMacIntel;
    try {
        isMacIntel=/MacIntel/.test(navigator.userAgentData.platform)
    } catch (error) {
        isMacIntel=false;
    }
    
    if(isMacIntel===false)
    {
        try {
            isMacIntel=/MacIntel/.test(navigator.userAgent)
        } catch (error) {
            isMacIntel=false;
        }
    }
    
    
    let tablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
    tablet=tablet ||  (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && isMacIntel);
    return tablet;
}

export class NavMenu extends Component {
    displayName = "PPI APIs"
    reload = () => {

        window.location.reload();
    }
    constructor(props) {
        super(props);
        this.el1 = React.createRef();
        this.el2 = React.createRef();
        this.state = {
            //showMinimizeArrow: false,
            width: 0, 
            height: 0,
            showBanner:true,
            sideBarMinimized:false ,
            showSaveMsg: false,
        };
        this.msgVisible = false;
        this.showBanner=true;
        this.checkedRemoveLogo = false;
        this.AppletY=100;
        this.info={PA:"hidden",PLA:"hidden",INA:"hidden",EP:"hidden",WL:"hidden",LIFO:"hidden",CA:"hidden",EB:"hidden",BR:"hidden",IR:"hidden",CSW:"hidden"}
        this.infoDefault={PA:"hidden",PLA:"hidden",INA:"hidden",EP:"hidden",WL:"hidden",LIFO:"hidden",CA:"hidden",EB:"hidden",BR:"hidden",IR:"hidden",CSW:"hidden"}
        //this.minimizeSideBar=false
    }
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      };
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);

        window.addEventListener('mousemove', this.mousemove);
      }

      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
        window.removeEventListener('mousemove', this.mousemove);
      }

    componentWillReceiveProps(nextProps) {
    //    if (this.props.redirectTo !== "")
    //        this.props.redirectClear(this.props.redirectTo);
    }


  

    mousemove=(event)=>{
        this.AppletY= event.clientY;
    }
    
    changeLogo = () => {
        //window.location.href = "https://test-tkdirect.ppi.ca/?wa=wsignout1.0"
        var iframe = document.getElementById("goh");
        var elmnt = iframe.contentWindow.document.getElementsByid("saveButton");
        
        //elmnt.style.display = "none";

      

       
       // this.msgVisible === false;
        //this.props.changeLogo(true);
    }
     
    fadeBackground = () => {
        // this.setState({showBanner: false})
        var iframe = document.getElementById("goh");
        var banner = document.getElementById("banner");
        if (banner!==undefined && banner!==null) banner.style.opacity= 0.5
        if (iframe!==undefined && iframe!==null) iframe.style.opacity= 0.5
    }

    focusBackground = () => {
        // this.setState({showBanner: false})
        var iframe = document.getElementById("goh");
        var banner = document.getElementById("banner");
        if (banner!==undefined && banner!==null) banner.style.opacity= 1
        if (iframe!==undefined && iframe!==null) iframe.style.opacity= 1
    }

    sideBarHideShow  = () => {
        
        const sb=!this.state.sideBarMinimized 
        this.props.minimizeSideBar();
        this.setState({sideBarMinimized : sb})
        
    }

    

    fetchTest = () => {

		//fetch("https://test-tkdirectapi.ppi.ca/api/MCC_Carriers", {
		//	method: 'GET',
		//	redirect: 'follow',
		//	credentials: 'same-origin',
		//	withCredentials: 'true'
		//	})
		//	.then(response => {
		//		return response.json();
		//	})
		//	.then(data => {
		//		console.log(data);
		//	}
		//	)
		//	.catch(error => {
		//		console.log('error, test failed', error);
		//	});
        
	}

    /* handleClick = (show) => {
        this.setState({showMinimizeArrow: show})
    }
 */
    handleMouseIn(e) {
        this.info = {
            ...this.infoDefault
        };
           //const id=e.target.id===""?e.target.parentNode.id:e.target.id
        const showTips= !(isTablet());// false; // until ready to go

        if(showTips ) this.info[e.target.id]= "visible"
        
        e.target.style.color="white"
        const showMsg= !(e.target.innerHTML.includes(this.props.selectedApplet) || this.props.selectedApplet.includes("Home") )  


        this.setState({showSaveMsg:showMsg})
        
      }

      
      handleMouseOut(e) {
        const id=e.target.id===""?e.target.parentNode.id:e.target.id
        //this.info[e.target.id]="hidden"
        
        if (e.target.innerHTML.includes(this.props.selectedApplet)===false) e.target.style.color="rgb(157,157,157)";"#9d9d9d"
        this.setState({showSaveMsg:false})
        
      }

      handleInfoMouseIn2(applet) {
        this.info = {
            ...this.infoDefault
        };
           //const id=e.target.id===""?e.target.parentNode.id:e.target.id
        this.info[applet]="visible"
    }        
  
      handleInfoMouseIn(e) {
            
       this.fadeBackground()
      }
      
      handleInfoMouseOut(e) {
         this.focusBackground()
      }
      

    render() {

       
        const lang = this.props.language;
        const style = { width:"216px",marginTop:'4px',marginBottom:'4px', maxWidth: "100%"};
        const lang2 = this.props.language === "en" ? "Français" : "English";
        //const style4 = { width: this.props.sideBarWidth };
        const screenShareMsg = lang === "en" ? screenShareMsgEn : screenShareMsgFr;
        //const newINAMsg = lang === "en" ? newInToolkitMsgEn : newInToolkitMsgFr;
        const imgTips = lang === "en" ? imgTipsEn : imgTipsFr;

         const styleButt = this.props.visible ? "buttonClose hide" : "buttonClose hide" // dont show
        const arrowLeft = <span style={{ color: "#f5f6f6" }}>&#9668;</span>
        const arrowRight = <span style={{ color: "#f5f6f6" }}>&#9658;</span>
        const styleMsg1 = { bottom: this.props.language === "en" ? '32%' : '30%' }
        const styleMsg2 = { bottom: this.props.language === "en" ? '20%' : '18%' }
        //const styleButt1Hidden = { bottom: this.props.language === "en" ? '32%' : '30%', width: '8%', height: '5%', visibility: this.props.visible === true ? "visible" : "hidden" }
        //const styleButt2Hidden = { bottom: this.props.language === "en" ? '20%' : '18%', width: '8%', height: '5%', visibility: this.props.visible === true ? "visible" : "hidden" }
        const availH=window.screen.availHeight
        const sideBarContent = { visibility: this.state.sideBarMinimized === true ? "hidden" : "visible"} 
        
        const saveMessage = {visibility: this.state.showSaveMsg === false ? "hidden" : "visible"} 

        const bannersStyle = { position: 'relative', float: 'left', marginLeft: '10px', marginTop: '-10px', visibility: this.state.sideBarMinimized === true ? "hidden" : "visible" }
        const noApplets=NO_APPLETS;
        const minHeight=(2+1+noApplets)*(lang === "en"? 80:availH>1080?65:86);
        // console.log(window.innerHeight,window.screen.availHeight,window.innerWidth)
        let appletNavHeight= 2*Math.max(minHeight,(lang === "en" ?370:265)*window.innerHeight/availH);
        let banner1Hide=lang === "en" ?11.2*availH/20:13*availH/20;
        let banner2Hide=lang === "en" ?14.2*availH/20:16.7*availH/20;
        const styleBanner = this.props.visible ? "msgBanner" : "msgBanner hide";
       
        
        


        if(isTablet()){
            banner1Hide=0;
            banner2Hide=0;
            if(window.innerHeight > window.innerWidth)
                appletNavHeight=420;
            else{
                appletNavHeight=lang === "en" ?405:460;
                banner2Hide=availH;
            }
        }
        const top=window.innerWidth<(lang === "en" ?1111:1377)? "0px": "10px"
        const styleTips={fontSize:"16px", width:"92%", height:"40px", paddingLeft: "6px", paddingTop: top, borderStyle: "double"}
        const styleFB={fontSize:"16px", width:"92%", height:"40px", paddingLeft: "6px", paddingTop: top, borderStyle: "none"}
        const removeBanner =lang === "en" ?830:960
        appletNavHeight=window.innerHeight;
        let marginLeft={ marginLeft: isTablet()?"20px":"30px"}
        let marginLeftTips={ marginLeft: isTablet()?"20px":"30px",marginTop: "0px",   marginBottom: "0px"}

        let isWindowsOS;

        const wd=23*this.state.width/100
        let pos={left:window.innerWidth<900?wd/2:wd, top:this.props.selectedApplet==="Home"? (window.innerWidth<900?50:180):70}
     //   let pos={left:wd, top:this.AppletY-10}
       
        // if(pos.top> 2*window.innerHeight/3)pos.top= 2*window.innerHeight/3


        
        try {
            isWindowsOS=navigator.userAgentData.platform.indexOf("Windows") !== -1 ?true:false;
        } catch (error) {
            isWindowsOS=false;
        }
        
        if(isWindowsOS===false)
        {
        
            try {
                isWindowsOS=navigator.userAgent.indexOf("Win") !== -1 ?true:false;
            } catch (error) {
                isWindowsOS=false;
            }
        }

        let applets=["PA","PLA", "INA", "EP","WL","LIFO","CA","EB","BR","IR", "CSW"] //"CSW" done seperately
        

        if(this.props.tokenValid===false)
        {
            return (
            <Navbar inverse relative fluid collapseOnSelect className={this.state.sideBarMinimized === false ? "navbar" : "navbarMinimized"}>
                {window.innerWidth > NAVBAR_SWITCH_WIDTH && <button className="arrow" onClick={this.sideBarHideShow} >{this.state.sideBarMinimized === false ? arrowLeft : arrowRight}</button>}
               
               <Navbar.Header>
					<Navbar.Brand>
                        <div  > <span>  <img id="img" onClick={this.changeLogo} src={this.props.logoSource} style={style}/>
                        </span><span style={{
										fontWeight: 'normal', fontSize: '10px', marginLeft:"6px"}}>({global.appVersion}) </span>
                         </div>
            
                    </Navbar.Brand>
                    

					<Navbar.Toggle />
				</Navbar.Header>
                <div style={sideBarContent}>{/*<span className="browser"> {"Google Chrome Microsoft Edge (18+) iPad/iPhone: Safari Firefox"} </span>*/}
                            <span  className="language" style={{width:'160px', top:'10%', color: 'white'}}> Login is not valid </span>
                   </div>   
            </Navbar>
            )
        }
        else
        return (
            
            <Navbar inverse fixedTop fluid collapseOnSelect className={this.state.sideBarMinimized === false ? "navbar" : "navbarMinimized"}>
                {/* {this.state.showMinimizeArrow == true && window.innerWidth > NAVBAR_SWITCH_WIDTH && <button className="arrow" onClick={this.sideBarHideShow} >{this.state.sideBarMinimized === false ? arrowLeft : arrowRight}</button>} */}
                {window.innerWidth > NAVBAR_SWITCH_WIDTH && <button className="arrow" onClick={this.sideBarHideShow} >{this.state.sideBarMinimized === false ? arrowLeft : arrowRight}</button>}
               
               <Navbar.Header>
					<Navbar.Brand>
                        <div  ><span    data-tip data-for='HM' onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>  <img onClick={this.changeLogo} src={this.props.logoSource} style={style}/>
                        </span> <span style={{
										fontWeight: 'normal', fontSize: '10px', marginLeft:"6px"}}>({global.appVersion}) </span>
							</div>
                      
                    </Navbar.Brand>
                   
                   

					<Navbar.Toggle />
				</Navbar.Header>
                <div style={sideBarContent}>
				<Navbar.Collapse>
                        <Nav style={{ height: appletNavHeight+"px" }}>
                            <LinkContainer to={'/'} style={{ marginLeft: '2px' }}  exact>
							<NavItem>
									<Glyphicon glyph='home'  /><span   data-tip data-for='HM' onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}> {TOOLKIT[lang].Home +"        "}     </span>
									
                                    <span><input className="language" onClick={this.props.changeLang} type="button" value={lang2} /> </span>
                                    <AppletDescTooltip pos={pos} applet="HM" lang={lang}/>

                                    
							</NavItem>
						</LinkContainer>

						{/*<Navbar.Header>
							<Navbar.Brand>
								<span style={{ color: '#E4E5E6', marginLeft: '9px', fontSise: '14px' }}><Glyphicon glyph='th-list' /><span style={{ marginLeft: '10px' }}>Applets</span></span>
							</Navbar.Brand>
							<Navbar.Toggle />
						</Navbar.Header>

						
							<NavItem style={marginLeft}>
							<span>Applet 1</span>
									</NavItem>

						<NavItem style={marginLeft}>
							<span>Applet 2</span>
									</NavItem>	   */}
                   {/*      <AppletNavMenu  info={this.info["PA"]} handleMouseIn={this.handleInfoMouseIn2.bind(this)} applet={"PA"} path={PATHS.PA} selectedApplet={this.props.selectedApplet} wd={wd} lang={lang}/>
                        <AppletNavMenu  info={this.info["PLA"]} handleMouseIn={this.handleInfoMouseIn2.bind(this)} applet={"PLA"} path={PATHS.PLA} selectedApplet={this.props.selectedApplet} wd={wd} lang={lang}/>
                        <AppletNavMenu   info={this.info["INA"]} handleMouseIn={this.handleInfoMouseIn2.bind(this)} applet={"INA"} path={PATHS.INA} selectedApplet={this.props.selectedApplet} wd={wd} lang={lang}/>
					 */}			

                       {applets.map((item, i) => {
                                    const selectedApplet=TOOLKIT[lang][item].includes(this.props.selectedApplet)
                                    const showCSW= isWindowsOS && item==="CSW"
                                    return (
                                        <LinkContainer key={i}  to={PATHS[item]} style={marginLeft}>
                              
                                <NavItem>
                                {showCSW && <LineSeperator/>}
                                {(showCSW || item!=="CSW") &&
                                  ( <div><span   id={item}  onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}  style={{color:selectedApplet?"white":"rgb(157,157,157)", marginRight:"10px"}} >{TOOLKIT[lang][item]}</span>{(item==="IR")  && <span className="newMsg">{MENU_TEXT[lang].NEW} </span>}{(item==="EB")  && <span className="newMsg">{MENU_TEXT[lang].UPDATED} </span>}
                                    <span data-tip data-for={item} ><img  onMouseOver={this.fadeBackground.bind(this)} onMouseOut={this.focusBackground.bind(this)} style={{visibility:this.info[item]}} height={this.info[item]==="visible"?"15px":"0px"} Width={this.info[item]==="visible"?"15px":"0px"} src={selectedApplet?infoG:info} /></span>
                                    <AppletDescTooltip pos={pos} applet={item} lang={lang}/></div>)}
                               
                                </NavItem>
                                
                        
                        </LinkContainer>
                        
                                    );})}

                      {/*   {(isWindowsOS)&&       
                           <LineSeperator/> 
                        }
                        {(isWindowsOS)&& 
                         
                      <LinkContainer key={20}  to={PATHS["CSW"]} style={marginLeft}   >
                      <NavItem>
                          <span id={"CSW"}  onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} style={{color:TOOLKIT[lang]["CSW"].includes(this.props.selectedApplet)?"white":"rgb(157,157,157)"}} >{TOOLKIT[lang]["CSW"]}</span>
                          <span data-tip data-for={"CSW"} ><img  style={{marginLeft:"8px", visibility:this.info["CSW"]}} height="15px" src={TOOLKIT[lang]["CSW"].includes(this.props.selectedApplet)?infoG:info} /></span>
                          <AppletDescTooltip pos={pos} applet={"CSW"} lang={lang}/>
                      </NavItem>
                    </LinkContainer>}
               */}
{/* 
                        <LinkContainer  to={PATHS.PA} style={marginLeft}   >
                                <NavItem  >
                                    <span id="PA"  onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} style={{color: TOOLKIT[lang].PA.includes(this.props.selectedApplet)===false?"grey":"white"}}>{TOOLKIT[lang].PA}</span>
                                    <span data-tip data-for='PA' ><img  style={{marginLeft:"8px", visibility:this.info.PA}} height="15px" src={TOOLKIT[lang].PA.includes(this.props.selectedApplet)?infoG:info} /></span>
                                    <AppletDescTooltip pos={pos} applet="PA" lang={lang}/>
                                </NavItem>
                        </LinkContainer>
                        <LinkContainer  to={PATHS.PLA} style={marginLeft}   >
                                <NavItem  >
                                    <span id="PLA"  onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>{TOOLKIT[lang].PLA}</span>
                                    <span data-tip data-for='PLA' ><img  style={{marginLeft:"8px", visibility:this.info.PLA}} height="15px" src={TOOLKIT[lang].PLA.includes(this.props.selectedApplet)?infoG:info} /></span>
                                    <AppletDescTooltip pos={pos} applet="PLA" lang={lang}/>
                                </NavItem>
                        </LinkContainer>
                            <LinkContainer to={PATHS.INA} style={marginLeft} id='INA' onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}  >
                                <NavItem  >
                                <span onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].INA}</span>
                                <span data-tip data-for='INA'>  <img style={{visibility:this.info.INA}} onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} height="15px" src={info} /></span>
                                   
                                <AppletDescTooltip pos={pos} applet="INA" lang={lang}/>
                                </NavItem>
                                
                            </LinkContainer>
                        <LinkContainer to={ PATHS.EP} style={marginLeft}  >
                                    <NavItem >
									   <span id='EP' onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].EP}</span>
                                       <span data-tip data-for='EP' onMouseOver={this.handleInfoMouseIn.bind(this)} onMouseOut={this.handleInfoMouseOut.bind(this)}>  <img style={{visibility:this.info.EP}} height="15px" src={info} /></span>
                                   
                                       <AppletDescTooltip pos={pos} applet="EP" lang={lang}/>
									</NavItem>

								</LinkContainer>
						<LinkContainer to={ PATHS.WL} style={marginLeft}>
                                <NavItem >
								<span data-tip data-for='WL'  onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>{TOOLKIT[lang].WL}</span>
                                <AppletDescTooltip pos={pos} applet="WL" lang={lang}/>
                                
                              	</NavItem>

							</LinkContainer>
                        <LinkContainer to= {PATHS.LIFO} style={marginLeft}  >
                            <NavItem >
                               <span  data-tip data-for='LIFO' onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].LIFO}</span>
                               <AppletDescTooltip pos={pos} applet="LIFO" lang={lang}/>
                            </NavItem>

                        </LinkContainer>
                        { <LinkContainer to= {PATHS.CA} style={marginLeft}  >
                            <NavItem>
                               <span  data-tip data-for='CA' onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].CA}</span>
                               <AppletDescTooltip pos={pos} applet="CA" lang={lang}/>
                            </NavItem>

                        </LinkContainer> }
                        <LinkContainer to={ PATHS.EB} style={marginLeft}  >
                                    <NavItem >
									   <span  data-tip data-for='EB' onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].EB}</span> <span className="newMsg">{MENU_TEXT[lang].NEW} </span>
                                       <AppletDescTooltip pos={pos} applet="EB" lang={lang}/>
									</NavItem>

								</LinkContainer>
                        <LinkContainer to={ PATHS.BR} style={marginLeft}  >
                                    <NavItem >
									   <span  data-tip data-for='BR' onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].BR + MENU_TEXT[lang].BR_NAME}</span> <span className="newMsg">{MENU_TEXT[lang].NEW} </span>
                                       <AppletDescTooltip pos={pos} applet="BR" lang={lang}/>
									</NavItem>

								</LinkContainer>
                        <LinkContainer to={ PATHS.IR} style={marginLeft}  >
                                    <NavItem >
									   <span  data-tip data-for='IR' onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].IR + MENU_TEXT[lang].IR_NAME}</span> <span className="newMsg">{MENU_TEXT[lang].NEW} </span>
                                       <AppletDescTooltip pos={pos} applet="IR" lang={lang}/>
									</NavItem>

								</LinkContainer>
                       


                      	 {(isWindowsOS)&&       
                           <LineSeperator/> 
                        }
                        {(isWindowsOS)&&
                                <LinkContainer to= {PATHS.CSW} style={marginLeft}  >
                            <NavItem>
                               <span  onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].CSW}</span> <span className="newMsg">{MENU_TEXT[lang].NEW} </span>
                               
                               
                            </NavItem>

                        </LinkContainer> 
                        
                        }
                      */}
                        <SaveMessage message={MENU_TEXT[lang].SAVE} saveMessageStyle={saveMessage}/>
                        
                         {/*  <LinkContainer to= {PATHS.DBCL} style={marginLeftTips}  >
                               <NavItem>
                               <div style={styleTips}><span style={{ color:"white", paddingTop:"2px", overflowWrap: "break-word"}}  >{TOOLKIT[lang].DBCL}</span></div>
                             
                               </NavItem>

                         </LinkContainer> 
                         <LinkContainer to= {PATHS.DB} style={marginLeftTips}  >
                               <NavItem> 
                               <div style={styleTips}><span style={{ color:"white", paddingTop:"2px", overflowWrap: "break-word"}}  >{TOOLKIT[lang].DB}</span></div>
                             
                               </NavItem>

                         </LinkContainer>   */}
                        
                        {this.props.loginUsageAccess===true && <LinkContainer to= {PATHS.AU} style={marginLeftTips}  >
                               <NavItem> 
                               <div style={styleTips}><span style={{ color:"white", paddingTop:"2px", overflowWrap: "break-word"}}  >{TOOLKIT[lang].AU}</span></div>
                             
                               </NavItem>

                         </LinkContainer>  }
                        
                        <LinkContainer to= {PATHS.TIPS} style={marginLeftTips}  >
                               <NavItem  style={{backgroundcolor: "transparent"}}>
                               <div style={styleTips}><span style={{ color:"white", paddingTop:"2px", overflowWrap: "break-word"}}  >{TOOLKIT[lang].TIPS}</span></div>
                              {/* <div style={{fontSize:"20px", width:"92%", height:"48px", paddingBottom:"10px", borderStyle: "double", overflowWrap: "break-word"}}><div style={{ color:"white", paddingLeft:"13px", paddingTop:"8px", overflowWrap: "break-word"}}  >{TOOLKIT[lang].TIPS}</div></div>  */}
                             
                               </NavItem>

                         </LinkContainer> 
                         <LinkContainer to= {PATHS.FB} style={marginLeftTips}  >
                               <NavItem>
                               <div style={styleFB}>
                                
                               
                               <span className="saveMsg" style={{float:"right", marginTop:"5px"}} >{TOOLKIT[lang].FB}</span></div>
                              {/* <div style={{fontSize:"20px", width:"92%", height:"48px", paddingBottom:"10px", borderStyle: "double", overflowWrap: "break-word"}}><div style={{ color:"white", paddingLeft:"13px", paddingTop:"8px", overflowWrap: "break-word"}}  >{TOOLKIT[lang].TIPS}</div></div>  */}
                             
                               </NavItem>

                         </LinkContainer> 

                         <Coushin/>  
                        
                          </Nav>
                           <div style={sideBarContent}>{/*<span className="browser"> {"Google Chrome Microsoft Edge (18+) iPad/iPhone: Safari Firefox"} </span>*/}
                           
                         </div>
                      {/* {this.state.showBanner===true && window.innerWidth > NAVBAR_SWITCH_WIDTH   && window.innerHeight>banner2Hide && <div style={sideBarContent} ref={this.el2} > <img style={sideBarContent} src={screenShareMsg} className={styleBanner} onClick={this.removeBanner} /></div>} */}
                        
                    </Navbar.Collapse>
                </div>
                {this.props.redirectTo !== "" &&
                    <Redirect to={this.props.redirectTo} />}
            </Navbar>
            
		);
	}
}
