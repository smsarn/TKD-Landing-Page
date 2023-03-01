import React from 'react';
//import toolkit from './toolkit.png';
import './NA.css';
import Pdf from './TKD Guidev2.1.pdf';
import PdfFr from './TKD Guide FRN.pdf';
import PdfPYE_LIFO from './PYE_LIFO.pdf';
import { Collapsible } from "./AppletUsageFolder/Collapsible";

/* import {fetchAppletUsageFromDB} from '../Utils/util';
import EnhancedTable from "./EnhancedTable/Table";
import { Collapsible } from "./EnhancedTable/Collapsible";
 */
export class AppletTIPS extends React.Component {

    constructor(props) {
        super(props);
   this.state={
    displaySNAP:false,
    displayCSW:false,
    displaySave:false,
    displayCompl:false,
    displayLogo:false,
   }
    this.openCollapsible = [
        { open: false, id: 0 },
        { open: false, id: 1 },
        { open: false, id: 2 },
      ];
    }
    resizeIframe(iframe) {
        iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
      }
      handleCollapsibleClick = (collapsible) => {
        const mode = collapsible.open;
        
        this.openCollapsible[collapsible.id].open = !mode;
      };
      handleSnapClick = () => {
        let val=this.state.displaySNAP
        this.setState({displaySNAP:!val})
       
      };

      handleSaveClick = () => {
        let val=this.state.displaySave
        this.setState({displaySave:!val})
       
      };

      handleCSWClick = () => {
        let val=this.state.displayCSW
        this.setState({displayCSW:!val})
       
      };

      handleLogoClick = () => {
        let val=this.state.displayLogo
        this.setState({displayLogo:!val})
       
      };

      handleComplClick = () => {
        let val=this.state.displayCompl
        this.setState({displayCompl:!val})
       
      };


    render() {
	const lang = this.props.language === "en" ? "Français" : "English";
	let style={fontFamily: "Trebuchet MS", color: "#864b94", paddingTop:"2%"}
	let style2={fontFamily: "Trebuchet MS", color: "#864b94", fontSize:"18px"}
	
    const showPYEPDF = false // until ready to go

    const arrDown = <span style={{paddingLeft:"6px", marginTop:"5px", fontSize: "16px", float: "right", height: "19px"}}>&#9650;</span>
    const arrUp =       <span style={{paddingLeft:"6px", marginTop:"5px", fontSize: "16px", float: "right", height: "19px" }}>&#9660;</span>
      

	if(this.props.language === "en")
    {

	return (
		<div className="appletDiv" style={{ overflow: "auto" }}>
		  <div className="UsageDiv">
          <h2 style={style}>Tips and Notes:
          
          </h2>
          

          
          <Collapsible
            id={1}
            title={"General Tips"}
            // openParent={this.openParent}
            style={{color: "#D11242"}}
            openCollapsible={this.openCollapsible[1]}
            handleCollapsibleClick={this.handleCollapsibleClick}
          >
            {
              (
                <div
                  style={{
                    overflow: "auto",
                    paddingLeft: "3%",
                    width: "100%",      
                    maxHeight: "62vh",
                  }}
                >

            <h3>
            <ul style= {style2}>
	            
                <li style={{padding:"10px", paddingTop:"0px"}}>Screenshare Toolkit Direct with your clients</li>
                <li style={{padding:"10px"}}>
                <button style={{border:"none",backgroundColor: "rgba(0,0,0,0)"}} onClick={this.handleLogoClick} >How to add your logo (video) {this.state.displayLogo?arrDown:arrUp}</button>  {this.state.displayLogo?<br/>:""}
                
                {this.state.displayLogo?<div className="wrapper">
                    <iframe className="main" src="https://player.vimeo.com/video/555463883?h=f27f9293d1"  frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>
                </div>
	            :""}
                </li>
                
                <li style={{padding:"10px"}}>
                <button style={{border:"none",backgroundColor: "rgba(0,0,0,0)"}} onClick={this.handleSaveClick} >How to save and load a client file (video) {this.state.displaySave?arrDown:arrUp}</button>  {this.state.displaySave?<br/>:""}
                
                {this.state.displaySave?<div className="wrapper">
                <iframe className="main"  src="https://player.vimeo.com/video/555463911?h=8305375147"  rameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>
                </div>
	            :""}
                </li>
                

                <li style={{padding:"10px"}}>
                <button style={{border:"none",backgroundColor: "rgba(0,0,0,0)"}} onClick={this.handleComplClick} >How to stay compliant (video) {this.state.displayCompl?arrDown:arrUp}</button>  {this.state.displayCompl?<br/>:""}
                
                {this.state.displayCompl?<div className="wrapper">
                <iframe className="main"  src= "https://player.vimeo.com/video/555463929?h=1df05274ac"  frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>
                </div>
	            :""}
                </li>
                
                
	              </ul>
	    
                </h3>



                </div>
              )}
          </Collapsible>

          
          <Collapsible
            id={2}
            title={"Applet Tips"}
            // openParent={this.openParent}
            style={{color: "#D11242"}}
            openCollapsible={this.openCollapsible[2]}
            handleCollapsibleClick={this.handleCollapsibleClick}
          >
            {
              (
                <div
                  style={{
                    overflow: "auto",
                    paddingLeft: "3%",
                    width: "100%",      
                    maxHeight: "62vh",
                  }}
                >

            <h3>
            <ul style= {style2}>
                <li  style={{padding:"10px", paddingTop:"0px"}}>Insurance Needs Analysis (INA): 
                    <ul style= {style2}>
	                    <li style={{padding:"10px"}}>You can delete the spouse and calculate insurance needs based on the Estate's required money, or stream of income at death of a Single Person</li> 
	                    <li style={{padding:"10px"}}>You can delete the spouse and add children to calculate insurance needs based on family's required money, or stream of income at death of a Single Parent</li> 
                    </ul>
                </li>
            
                
                
                <li style={{padding:"10px"}}>
                <button style={{border:"none",backgroundColor: "rgba(0,0,0,0)"}} onClick={this.handleSnapClick} >Converting Security Needs Analysis Plan (SNAP) files to INA (video) {this.state.displaySNAP?arrDown:arrUp}</button>  {this.state.displaySNAP?<br/>:""}
                
                
                {this.state.displaySNAP?<div className="wrapper"><iframe className="main" src= "https://player.vimeo.com/video/795382819?h=8f289f363b"  frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></div>:""}
                </li>
               
                <li style={{padding:"10px"}}>
                <button style={{border:"none",backgroundColor: "rgba(0,0,0,0)"}} onClick={this.handleCSWClick} >Carrier Software and Websites Guide  (PDF) {this.state.displayCSW?arrDown:arrUp}</button>  {this.state.displayCSW?<br/>:""}
                
                
                {this.state.displayCSW?<div className='App'>
                <object data={Pdf} type="application/pdf" width="100%" height="580px"> </object>
                   {/*  <iframe src='" + Pdf + "#zoom=148'  width='70%'   height='520px' frameborder='4' ></iframe> */} </div>:""}
                </li>
           
               
                {/* <li style={{padding:"10px"}}>Carrier Software and Websites Guide:<br/><div className='App'>
                <object data={Pdf} type="application/pdf" width="100%" height="580px"> </object>
                    </div></li> */}
                  
	            {showPYEPDF && <div><li style={{padding:"10px"}}><div name ='LIFO_PYE' id ='LIFO_PYE'>Explore targeting death benefit amount at Life Expectancy</div></li>
	            <li style={{padding:"10px"}}>Protecting Your Estate: explore targeting death benefit<br/><div className='App'>
                <object name="PYE_LIFO" id="PYE_LIFO" data={PdfPYE_LIFO} type="application/pdf" width="100%" height="580px">
    
                    </object>   </div></li></div>}
	        
	            
                  </ul>
	    
                </h3>



                </div>
              )}
          </Collapsible>

          <Collapsible
            id={0}
            title={"Notes"}
            // openParent={this.openParent}
            
            openCollapsible={this.openCollapsible[0]}
            handleCollapsibleClick={this.handleCollapsibleClick}
          >
            {
               (
                <div
                  style={{
                    overflow: "auto",
                    paddingLeft: "3%",
                    width: "100%",      
                    maxHeight: "52vh",
                  }}
                >

            <h3>
            <ul style={style2}>
                <li   style={{padding:"10px", paddingTop:"0px"}}>Release Notes: 
                    <ul style= {style2}>                        
	                    <li style={{padding:"10px"}}>Creating an Estate Bond (5.0.2): the new customization toolbar under the Results tab gives you options to include an ‘About Me’ page, to make some edits to presentation content, and to select and sort pages</li>
	                </ul>
                </li>
            	<li style={{padding:"10px"}}>PPI Toolkit: 
                    <ul style= {style2}>                        
	                    <li style={{padding:"10px"}}>The desktop version of PPI Toolkit had a great run, and now it's time to discover an even better user experience on PPI Toolkit Direct!</li>

                        <li style={{padding:"10px"}}>As previously announced, <b style={{color: "#D11242"}}>PPI Toolkit (desktop version) retires on March 31, 2023</b>, and will no longer contain applets and concept presentations. You can access applets and 'Carrier software and websites' through PPI Toolkit Direct.</li>

                    <li style={{padding:"10px"}}>Important: Please do not uninstall PPI Toolkit software from your desktop computer! Due to the complexities involved in uninstalling, leave your software where it is. This will not harm your computer. You can safely remove any shortcuts on your desktop or taskbar.</li> 
	                    
	                </ul>
                </li>
                </ul></h3>



                </div>
              )}
          </Collapsible>


{/* 
			<h2 style={style}><u>Notes:</u>	</h2>
			
			<h3>
            <ul style={style2}>
				<li>PPI Toolkit: 
                    <ul style= {style2}>                        
	                    <li style={{padding:"10px"}}>The desktop version of PPI Toolkit had a great run, and now it's time to discover an even better user experience on PPI Toolkit Direct!</li>

                        <li style={{padding:"10px"}}>As previously announced, <b style={{color: "#D11242"}}>PPI Toolkit (desktop version) retires on March 31, 2023</b>, and will no longer contain applets and concept presentations. You can access applets and 'Carrier software and websites' through PPI Toolkit Direct.</li>

<li style={{padding:"10px"}}>Important: Please do not uninstall PPI Toolkit software from your desktop computer! Due to the complexities involved in uninstalling, leave your software where it is. This will not harm your computer. You can safely remove any shortcuts on your desktop or taskbar.</li> 
	                    
	                </ul>
                </li>
                </ul></h3>
        <h2 style={style}><u>Quick Tips:</u></h2>
	        <h3>
            <ul style= {style2}>
	            <li style={{padding:"10px"}}>Carrier Software and Websites Guide:<br/><div className='App'>
                <object data={Pdf} type="application/pdf" width="100%" height="580px"> </object>
                 </div></li>

	            <li style={{padding:"10px"}}>How to add your logo:<br/>
                <div className="wrapper">
                    <iframe className="main" src="https://player.vimeo.com/video/555463883?h=f27f9293d1"  frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>
                </div></li>
	            <li style={{padding:"10px"}}>How to save and load a client file:<br/>
                <div className="wrapper">
                <iframe className="main"  src="https://player.vimeo.com/video/555463911?h=8305375147"  rameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>
                </div></li>
	            <li style={{padding:"10px"}}>How to stay compliant:<br/>
                <div className="wrapper">
                <iframe className="main"  src= "https://player.vimeo.com/video/555463929?h=1df05274ac"  frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>
                </div></li>
                <li style={{padding:"10px"}}>
                <div className="wrapper">
                <iframe className="main"  src= "https://player.vimeo.com/video/795382819?h=8f289f363b"  frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></div>
                </li>
	            
	            
	            <li>In Insurance Needs Analysis you can delete the spouse and: 
                    <ul style= {style2}>
	                    <li style={{padding:"10px"}}>calculate insurance needs based on the Estate's required money, or stream of income at death of a Single Person</li> 
	                    <li style={{padding:"10px"}}>add children to calculate insurance needs based on family's required money, or stream of income at death of a Single Parent</li> 
                    </ul>
                </li>
            
	            <li style={{padding:"10px"}}>Screenshare Toolkit Direct with your clients</li>
	            {showPYEPDF && <div><li style={{padding:"10px"}}><div name ='LIFO_PYE' id ='LIFO_PYE'>Explore targeting death benefit amount at Life Expectancy</div></li>
	            <li style={{padding:"10px"}}>Protecting Your Estate: explore targeting death benefit<br/><div className='App'>
                <object name="PYE_LIFO" id="PYE_LIFO" data={PdfPYE_LIFO} type="application/pdf" width="100%" height="580px">
    
                    </object>   </div></li></div>}
	        
            </ul>
            </h3> */} 
          
        </div>
      </div>
    );
}
else{

    return (
		<div className="appletDiv" style={{ overflow: "auto" }}>
		  <div className="UsageDiv">
          <h2 style={style}>Conseils et remarques:
          
          </h2>
          

          
          <Collapsible
            id={1}
            title={"Conseils généraux"}
            // openParent={this.openParent}
            style={{color: "#D11242"}}
            openCollapsible={this.openCollapsible[1]}
            handleCollapsibleClick={this.handleCollapsibleClick}
          >
            {
              (
                <div
                  style={{
                    overflow: "auto",
                    paddingLeft: "3%",
                    width: "100%",      
                    maxHeight: "62vh",
                  }}
                >

            <h3>
            <ul style= {style2}>
	            
                <li style={{padding:"10px", paddingTop:"0px"}}>Partager sur ècran la boîte à outils PPI Directe aves vos clients</li>
                <li style={{padding:"10px"}}>
                <button style={{border:"none",backgroundColor: "rgba(0,0,0,0)"}} onClick={this.handleLogoClick} >Comment ajouter votre logo (vidéo) {this.state.displayLogo?arrDown:arrUp}</button>  {this.state.displayLogo?<br/>:""}
                
                {this.state.displayLogo?<div className="wrapper">
                    <iframe className="main" src="https://player.vimeo.com/video/591708400?h=6858e6a755"  frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>
                </div>
	            :""}
                </li>
                
                <li style={{padding:"10px"}}>
                <button style={{border:"none",backgroundColor: "rgba(0,0,0,0)"}} onClick={this.handleSaveClick} >Comment enregistrer et charger un dossier client (vidéo) {this.state.displaySave?arrDown:arrUp}</button>  {this.state.displaySave?<br/>:""}
                
                {this.state.displaySave?<div className="wrapper">
                <iframe className="main"  src= "https://player.vimeo.com/video/591708352?h=bcda7108a8"  frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>
                </div>
	            :""}
                </li>
                

                <li style={{padding:"10px"}}>
                <button style={{border:"none",backgroundColor: "rgba(0,0,0,0)"}} onClick={this.handleComplClick} >La conformité (vidéo) {this.state.displayCompl?arrDown:arrUp}</button>  {this.state.displayCompl?<br/>:""}
                
                {this.state.displayCompl?<div className="wrapper">
                <iframe className="main"  src= "https://player.vimeo.com/video/555463929?h=1df05274ac"  frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>
                </div>
	            :""}
                </li>
                
                
	              </ul>
	    
                </h3>



                </div>
              )}
          </Collapsible>

          
          <Collapsible
            id={2}
            title={"Conseils sur les Applets"}
            // openParent={this.openParent}
            style={{color: "#D11242"}}
            openCollapsible={this.openCollapsible[2]}
            handleCollapsibleClick={this.handleCollapsibleClick}
          >
            {
              (
                <div
                  style={{
                    overflow: "auto",
                    paddingLeft: "3%",
                    width: "100%",      
                    maxHeight: "62vh",
                  }}
                >

            <h3>
            <ul style= {style2}>
                

                <li   style={{padding:"10px", paddingTop:"0px"}}>Analyse des besoins en matière d'assurance: 
                    <ul style= {style2}>
	                    <li style={{padding:"10px"}}>Vous pouvez retirer le conjoint et calculer les besoins d'assurance selon le montant requis pour les ayants droit ou les sources de revenus au décès de la personne.</li> 
	                    <li style={{padding:"10px"}}>Vous pouvez retirer le conjoint et ajouter les enfants pour calculer les besoins d'assurance selon l'argent nécessaire à la famille ou les sources de revenus au décès d'un parent seul</li> 
                    </ul>
                </li>
            
            
                
                
                <li style={{padding:"10px"}}>
                <button style={{border:"none",backgroundColor: "rgba(0,0,0,0)"}} onClick={this.handleSnapClick} >conversion de fichiers SNAP en INA (vidéo) {this.state.displaySNAP?arrDown:arrUp}</button>  {this.state.displaySNAP?<br/>:""}
                
                
                {this.state.displaySNAP?<div className="wrapper">
                <iframe className="main"  src= "https://player.vimeo.com/video/795382899?h=48bde48940"  frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></div>:""}
                </li>
               
                <li style={{padding:"10px"}}>
                <button style={{border:"none",backgroundColor: "rgba(0,0,0,0)"}} onClick={this.handleCSWClick} >Guide de logiciels et sites web des compagnies d'assurance (PDF) {this.state.displayCSW?arrDown:arrUp}</button>  {this.state.displayCSW?<br/>:""}
                
                
                {this.state.displayCSW?<div className='App'>
                <object data={PdfFr} type="application/pdf" width="100%" height="580px"> </object>
                   </div>:""}
                </li>
           
               
                {/* <li style={{padding:"10px"}}>Carrier Software and Websites Guide:<br/><div className='App'>
                <object data={Pdf} type="application/pdf" width="100%" height="580px"> </object>
                    </div></li> */}
                  
	            {showPYEPDF && <div><li style={{padding:"10px"}}><div name ='LIFO_PYE' id ='LIFO_PYE'>Explore targeting death benefit amount at Life Expectancy</div></li>
	            <li style={{padding:"10px"}}>Protecting Your Estate: explore targeting death benefit<br/><div className='App'>
                <object name="PYE_LIFO" id="PYE_LIFO" data={PdfPYE_LIFO} type="application/pdf" width="100%" height="580px">
    
                    </object>   </div></li></div>}
	        
	            
                  </ul>
	    
                </h3>



                </div>
              )}
          </Collapsible>

          <Collapsible
            id={0}
            title={"Remarques"}
            // openParent={this.openParent}
            
            openCollapsible={this.openCollapsible[0]}
            handleCollapsibleClick={this.handleCollapsibleClick}
          >
            {
               (
                <div
                  style={{
                    overflow: "auto",
                    paddingLeft: "3%",
                    width: "100%",      
                    maxHeight: "52vh",
                  }}
                >

            <h3>
            <ul style={style2}>
            <li    style={{padding:"10px", paddingTop:"0px"}} >Notes de mise à jour: 
                    <ul style= {style2}>                        
	                    <li style={{padding:"10px"}}>Création d'un bon successoral (5.0.2): la nouvelle barre d'outils de personnalisation située sous l'onglet "Résultats" vous permet désormais d'inclure une page "À propos de moi", de modifier le contenu de la présentation et de sélectionner et trier les pages.</li>
	                </ul>
                </li>
            <li style={{padding:"10px"}}>la boîte à outils PPI: 
                    <ul style= {style2}>                        
	                    <li style={{padding:"10px"}}>La boîte à outils PPI (version bureau) a connu un grand succès, et il est maintenant temps de découvrir une meilleure expérience utilisateur avec la boîte à outils PPI directe !</li>

                        <li style={{padding:"10px"}}>Comme annoncé précédemment, <b style={{color: "#D11242"}}>la boîte à outils PPI sera retirée le 31 mars 2023</b> et ne contiendra plus d'applets ni de présentations de concepts. Vous pouvez accéder à applets et aux " Logiciels et sites web des compagnies d’assurance" par le biais de la boîte à outils PPI directe.</li>

                        <li style={{padding:"10px"}}>Important : Veuillez ne pas désinstaller le logiciel Boîte à outils PPI (version bureau) de votre ordinateur ! En raison de la complexité de la désinstallation, laissez votre logiciel là où il se trouve. Cela n'endommagera pas votre ordinateur. Vous pouvez supprimer en toute sécurité tous les raccourcis sur votre bureau ou votre barre des tâches.</li> 
	                    
	                </ul>
                </li>
                </ul></h3>


                </div>
              )}
          </Collapsible>

    
        </div>
      </div>
    );

    return (
		<div className="appletDiv" style={{ overflow: "auto" }}>
		  <div className="UsageDiv">
			<h2 style={style}><u>Remarques:</u>	</h2>
			
			<h3>
            <ul style={style2}>
				<li>la boîte à outils PPI: 
                    <ul style= {style2}>                        
	                    <li style={{padding:"10px"}}>La boîte à outils PPI (version bureau) a connu un grand succès, et il est maintenant temps de découvrir une meilleure expérience utilisateur avec la boîte à outils PPI directe !</li>

                        <li style={{padding:"10px"}}>Comme annoncé précédemment, <b style={{color: "#D11242"}}>la boîte à outils PPI sera retirée le 31 mars 2023</b> et ne contiendra plus d'applets ni de présentations de concepts. Vous pouvez accéder à applets et aux " Logiciels et sites web des compagnies d’assurance" par le biais de la boîte à outils PPI directe.</li>

                        <li style={{padding:"10px"}}>Important : Veuillez ne pas désinstaller le logiciel Boîte à outils PPI (version bureau) de votre ordinateur ! En raison de la complexité de la désinstallation, laissez votre logiciel là où il se trouve. Cela n'endommagera pas votre ordinateur. Vous pouvez supprimer en toute sécurité tous les raccourcis sur votre bureau ou votre barre des tâches.</li> 
	                    
	                </ul>
                </li>
                </ul></h3>
        <h2 style={style}><u>Conseils Rapide:</u></h2>
	        <h3>
            <ul style= {style2}>
	            <li style={{padding:"10px"}}>Guide de logiciels et sites web des compagnies d'assurance:<br/><div className='App'>
                <object data={PdfFr} type="application/pdf" width="100%" height="580px"> </object>
                   </div></li>

	            <li style={{padding:"10px"}}>Comment ajouter votre logo:<br/>
                <div className="wrapper">
                    <iframe className="main" src="https://player.vimeo.com/video/591708400?h=6858e6a755"  frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>
                </div></li>
	            <li style={{padding:"10px"}}>Comment enregistrer et charger un dossier client:<br/>
                <div className="wrapper">
                <iframe className="main"  src="https://player.vimeo.com/video/591708381?h=ef1cfd2fd4"  rameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>
                </div></li>
	            <li style={{padding:"10px"}}>La conformité:<br/>
                <div className="wrapper">
                <iframe className="main"  src= "https://player.vimeo.com/video/591708352?h=bcda7108a8"  frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>
                </div></li>
                <li style={{padding:"10px"}}>
                <div className="wrapper">
                <iframe className="main"  src= "https://player.vimeo.com/video/795382899?h=48bde48940"  frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></div>
                </li>
	            
	            <li>Dans l'outil d'analyse des besoins en matière d'assurance, vous pouvez retirer le conjoint et : 
                    <ul style= {style2}>
	                    <li style={{padding:"10px"}}>Calculer les besoins d'assurance selon le montant requis pour les ayants droit ou les sources de revenus au décès de la personne.</li> 
	                    <li style={{padding:"10px"}}>Ajouter les enfants pour calculer les besoins d'assurance selon l'argent nécessaire à la famille ou les sources de revenus au décès d'un parent seul</li> 
                    </ul>
                </li>
            
	            <li style={{padding:"10px"}}>Partager sur ècran la boîte à outils PPI Directe aves vos clients</li>
	            {showPYEPDF && <div><li style={{padding:"10px"}}><div name ='LIFO_PYE' id ='LIFO_PYE'>Explore targeting death benefit amount at Life Expectancy</div></li>
	            <li style={{padding:"10px"}}>Protecting Your Estate: explore targeting death benefit<br/><div className='App'>
                <object name="PYE_LIFO" id="PYE_LIFO" data={PdfPYE_LIFO} type="application/pdf" width="100%" height="580px">
    
                    </object>   </div></li></div>}
	        
            </ul>
            </h3> 
          
        </div>
      </div>
    );
}
    }
}

