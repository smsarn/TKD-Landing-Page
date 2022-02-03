import React, { Component } from 'react';
import { useLocation, Link } from 'react-router'

import { Redirect } from 'react-router';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './NavMenu.css';
import screenShareMsgEn from '../Images/toolkit.direct_quick.tip_20.8.14.gif';
import screenShareMsgFr from '../Images/toolkit.direct_quick.tip_20.8.14_Fr.gif';
//import newInToolkitMsgEn from '../Images/tkd_new.applets_21.01.gif';
import newInToolkitMsgFr from '../Images/toolkit.direct_new.features.and.applets_21.09_FR.gif';//tkd_new.applets_21.01_FR.gif';
import newInToolkitMsgEn from '../Images/toolkit.direct_new.features.and.applets_21.08.gif';
import imgTipsEn from '../Images/tips.jpg';
import imgTipsFr from '../Images/tips.jpg';


import { NAVBAR_SWITCH_WIDTH, PATHS, TOOLKIT } from  '../Utils/util';

const NO_APPLETS = 5

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
        //this.minimizeSideBar=false
    }
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      };
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }

    componentWillReceiveProps(nextProps) {
    //    if (this.props.redirectTo !== "")
    //        this.props.redirectClear(this.props.redirectTo);
    }


    changeLogo = () => {
        this.msgVisible === false;
        this.props.changeLogo(true);
    }
     
    removeBanner = () => {
        this.setState({showBanner: false})
        
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
        const showMsg= !(e.target.innerHTML.includes(this.props.selectedApplet) || this.props.selectedApplet.includes("Home"))
        this.setState({showSaveMsg:showMsg})
      }
      
      handleMouseOut() {
        this.setState({showSaveMsg:false})
      }
      

    render() {

       
        const lang = this.props.language;
        const style = { width: '100%',marginTop:'6px'};
        const lang2 = this.props.language === "en" ? "Français" : "English";
        //const style4 = { width: this.props.sideBarWidth };
        //console.log(this.props);
        const screenShareMsg = lang === "en" ? screenShareMsgEn : screenShareMsgFr;
        const newINAMsg = lang === "en" ? newInToolkitMsgEn : newInToolkitMsgFr;
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
       
        const userAgent = navigator.userAgent.toLowerCase();
        let isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
        isTablet=isTablet ||  (navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 2 &&
        /MacIntel/.test(navigator.platform));
        if(isTablet){
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
        const removeBanner =lang === "en" ?830:960
        appletNavHeight=window.innerHeight;
        let marginLeft={ marginLeft: isTablet?"20px":"30px"}
        let marginLeftTips={ marginLeft: isTablet?"20px":"30px",marginTop: "0px",   marginBottom: "0px"}

        return (
            <Navbar inverse fixedTop fluid collapseOnSelect className={this.state.sideBarMinimized === false ? "navbar" : "navbarMinimized"}>
                {/* {this.state.showMinimizeArrow == true && window.innerWidth > NAVBAR_SWITCH_WIDTH && <button className="arrow" onClick={this.sideBarHideShow} >{this.state.sideBarMinimized === false ? arrowLeft : arrowRight}</button>} */}
                {window.innerWidth > NAVBAR_SWITCH_WIDTH && <button className="arrow" onClick={this.sideBarHideShow} >{this.state.sideBarMinimized === false ? arrowLeft : arrowRight}</button>}
               <Navbar.Header>
					<Navbar.Brand>
                        <div  > <img onClick={this.changeLogo} src={this.props.logoSource} style={style}/>
							</div>
							
                    </Navbar.Brand>
                    

					<Navbar.Toggle />
				</Navbar.Header>
                <div style={sideBarContent}>
				<Navbar.Collapse>
                        <Nav style={{ height: appletNavHeight+"px" }}>
                            <LinkContainer to={'/'} style={{ marginLeft: '2px' }}  exact>
							<NavItem>
									<Glyphicon glyph='home' /> {TOOLKIT[lang].Home}
									<span style={{
										fontWeight: 'normal', float: 'right', fontSize: '8px', marginTop: '2px', marginRight: '-8px' }}> {global.appVersion} </span>

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

								
                            <LinkContainer to={PATHS.PA} style={marginLeft}  >
                                <NavItem  /* onClick={() => this.handleClick(false)} */>
                                    <span onMouseOver={e => this.handleMouseIn(e)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].PA}</span>
                                </NavItem>

                        </LinkContainer>
                        <LinkContainer to={PATHS.PLA} style={marginLeft}  >
                                <NavItem  /* onClick={() => this.handleClick(false)} */>
                                    <span onMouseOver={e => this.handleMouseIn(e)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].PLA}</span>
                                </NavItem>

                        </LinkContainer>
                            <LinkContainer to={PATHS.INA} style={marginLeft}  >
                                <NavItem   /* onClick={() => this.handleClick(true)} */>
                                   <span  onMouseOver={e => this.handleMouseIn(e)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].INA}</span>
                                </NavItem>

                            </LinkContainer>
                        <LinkContainer to={ PATHS.EP} style={marginLeft}  >
                                    <NavItem /* onClick={() => this.handleClick(false)} */>
									   <span  onMouseOver={e => this.handleMouseIn(e)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].EP}</span>
									</NavItem>

								</LinkContainer>
						<LinkContainer to={ PATHS.WL} style={marginLeft}>
                                <NavItem /* onClick={() => this.handleClick(false)} */>
								<span   onMouseOver={e => this.handleMouseIn(e)} onMouseOut={this.handleMouseOut.bind(this)}>{TOOLKIT[lang].WL}</span>
									</NavItem>

							</LinkContainer>
                        <LinkContainer to= {PATHS.LIFO} style={marginLeft}  >
                            <NavItem/* onClick={() => this.handleClick(true)} */>
                               <span  onMouseOver={e => this.handleMouseIn(e)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].LIFO}</span>
                            </NavItem>

                        </LinkContainer>
                        { <LinkContainer to= {PATHS.CA} style={marginLeft}  >
                            <NavItem>
                               <span  onMouseOver={e => this.handleMouseIn(e)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].CA}</span>
                            </NavItem>

                        </LinkContainer> }
                        <LinkContainer to={ PATHS.EB} style={marginLeft}  >
                                    <NavItem /* onClick={() => this.handleClick(false)} */>
									   <span  onMouseOver={e => this.handleMouseIn(e)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].EB}</span>
									</NavItem>

								</LinkContainer>
						 <hr style={{marginLeft:"45px", marginRight:"20px",marginBottom:"5px",marginTop:"5px", borderTop: "2px solid rgba(150, 150, 150, 0.3)"}}/>
                        { <LinkContainer to= {PATHS.CSW} style={marginLeft}  >
                            <NavItem>
                               <span  onMouseOver={e => this.handleMouseIn(e)} onMouseOut={this.handleMouseOut.bind(this)} >{TOOLKIT[lang].CSW}</span>
                            </NavItem>

                        </LinkContainer> }
                         
                        <span><input className="saveMsg" style={saveMessage} type="button" value={lang==="en"?"Save any unsaved data...": "Enregistrer..."} /> </span>{/*  les données non enregistrées"} /> </span> */}

                         <LinkContainer to= {PATHS.DBCL} style={marginLeftTips}  >
                               <NavItem>
                               <div style={styleTips}><span style={{ color:"white", paddingTop:"2px", overflowWrap: "break-word"}}  >{TOOLKIT[lang].DBCL}</span></div>
                              {/* <div style={{fontSize:"20px", width:"92%", height:"48px", paddingBottom:"10px", borderStyle: "double", overflowWrap: "break-word"}}><div style={{ color:"white", paddingLeft:"13px", paddingTop:"8px", overflowWrap: "break-word"}}  >{TOOLKIT[lang].TIPS}</div></div>  */}
                             
                               </NavItem>

                         </LinkContainer> 
                         <LinkContainer to= {PATHS.DB} style={marginLeftTips}  >
                               <NavItem> 
                               <div style={styleTips}><span style={{ color:"white", paddingTop:"2px", overflowWrap: "break-word"}}  >{TOOLKIT[lang].DB}</span></div>
                              {/* <div style={{fontSize:"20px", width:"92%", height:"48px", paddingBottom:"10px", borderStyle: "double", overflowWrap: "break-word"}}><div style={{ color:"white", paddingLeft:"13px", paddingTop:"8px", overflowWrap: "break-word"}}  >{TOOLKIT[lang].TIPS}</div></div>  */}
                             
                               </NavItem>

                         </LinkContainer> 
                        
                        <LinkContainer to= {PATHS.TIPS} style={marginLeftTips}  >
                               <NavItem>
                               <div style={styleTips}><span style={{ color:"white", paddingTop:"2px", overflowWrap: "break-word"}}  >{TOOLKIT[lang].TIPS}</span></div>
                              {/* <div style={{fontSize:"20px", width:"92%", height:"48px", paddingBottom:"10px", borderStyle: "double", overflowWrap: "break-word"}}><div style={{ color:"white", paddingLeft:"13px", paddingTop:"8px", overflowWrap: "break-word"}}  >{TOOLKIT[lang].TIPS}</div></div>  */}
                             
                               </NavItem>

                         </LinkContainer> 
                         
                         
                         {/* {this.state.showBanner===true && window.innerWidth > NAVBAR_SWITCH_WIDTH && window.innerHeight>removeBanner && <div style={sideBarContent} ref={this.el1} > <img style={sideBarContent} src={newINAMsg} className={styleBanner} onClick={this.removeBanner} /></div>} */}
                         <div style={sideBarContent}>{/*<span className="browser"> {"Google Chrome Microsoft Edge (18+) iPad/iPhone: Safari Firefox"} </span>*/}
                            <span><input className="language" onClick={this.props.changeLang} type="button" value={lang2} /> </span>
                         </div>
                        </Nav>
                        {/* {this.state.showBanner===true && window.innerWidth > NAVBAR_SWITCH_WIDTH   && window.innerHeight>banner2Hide && <div style={sideBarContent} ref={this.el2} > <img style={sideBarContent} src={screenShareMsg} className={styleBanner} onClick={this.removeBanner} /></div>} */}
                        
                    </Navbar.Collapse>
                </div>
                {this.props.redirectTo !== "" &&
                    <Redirect to={this.props.redirectTo} />}
            </Navbar>
            
		);
	}
}
