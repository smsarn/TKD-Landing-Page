import React from 'react';
//import toolkit from './toolkit.png';
import './NA.css';
import Pdf from './TKD Guidev2.1.pdf';
import PdfFr from './TKD Guide FRN.pdf';
import PdfPYE_LIFO from './PYE_LIFO.pdf';
/* import {fetchAppletUsageFromDB} from '../Utils/util';
import EnhancedTable from "./EnhancedTable/Table";
import { Collapsible } from "./EnhancedTable/Collapsible";
 */
export class AppletTIPS2 extends React.Component {
/* 	constructor(props) {
		super(props);
		this.state = {
			loading:true,
		  data:[],
		  openCollapsible: {open:true,id:1}
		};
		
		
	  }
 
	handleCollapsibleClick = async () => {
		const collapsible=!this.state.openCollapsible.open;
		
		if (this.state.openCollapsible.open)
		{
			let dataAll= await fetchAppletUsageFromDB(true,true,true);
			this.setState({data: dataAll,loading: false, openCollapsible:{open:collapsible,id:1}})
		}
		else{
			this.setState({openCollapsible:{open:collapsible,id:1}})
		}
		
	};
	
 */
	render() {
		const lang = this.props.language === "en" ? "Français" : "English";
		let url = this.props.language === "en" ? "https://www.ppi.ca/en/toolkit-direct-intro" : "https://www.ppi.ca/fr/toolkit-direct-intro";
		let style="font-family: Trebuchet MS; color:#864b94; padding-top:4%"
		let style2="font-family: Trebuchet MS; color:#864b94"
		let htm;
		if(this.props.language === "en")
{

		htm ="<h2 style='" + style +"'><u>Notes:</u></h2>"
		htm +="<h3><ul style='" + style2 +"'>"
		htm +="<li>Quebec premium tax rate: <ul style='" + style2 +"'>"
		htm +="<li style='padding:10px'>Toolkit direct reflects the new rate of 3.3% that has been in effect since early 2022</li>" 
		htm +="<li style='padding:10px'>Some carriers may not have updated their illustration software but their administration systems would be up to date</li>" 
		htm +="</li></ul></h3>"
		htm +="<h2 style='" + style +"'><u>Quick Tips:</u></h2>"
		htm +="<h3><ul style='" + style2 +"'>"
		htm +="<li style='padding:10px'>Carrier Software and Websites Guide:<br/><div className='App'><iframe src='" + Pdf + "#zoom=148'  width='70%'   height='520px' frameborder='4' ></iframe> </div></li>"
		htm +="<li style='padding:10px'>How to add your logo:<br/><iframe src=https://player.vimeo.com/video/555463883?h=f27f9293d1  width='427' height='240' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></li>"
		htm +="<li style='padding:10px'>How to save and load a client file:<br/><iframe src=https://player.vimeo.com/video/555463911?h=8305375147  width='427' height='240' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></li>"
		htm +="<li style='padding:10px'>How to stay compliant:<br/><iframe src=https://player.vimeo.com/video/555463929?h=1df05274ac  width='427' height='240' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></li>"
		htm +="<li>In Insurance Needs Analysis you can delete the spouse and: <ul style='" + style2 +"'>"
		htm +="<li style='padding:10px'>calculate insurance needs based on the Estate's required money, or stream of income at death of a Single Person</li>" 
		htm +="<li style='padding:10px'>add children to calculate insurance needs based on family's required money, or stream of income at death of a Single Parent</li>" 
		htm +="</li></ul>"
		htm +="<li style='padding:10px'>Screenshare Toolkit Direct with your clients</li>"
		// until ready to go

		//htm +="<li style='padding:10px'><div name ='LIFO_PYE' id ='LIFO_PYE'>Explore targeting death benefit amount at Life Expectancy</div></li>"
		//htm +="<li style='padding:10px'>Protecting Your Estate: explore targeting death benefit<br/><div className='App'><iframe src='" + PdfPYE_LIFO + "#zoom=148'  width='70%'   height='520px' frameborder='4' ></iframe> </div></li>"
		htm +="</ul></h3>" 
}
else{
	htm ="<h2 style='" + style +"'><u>Remarques:</u></h2>"
		htm +="<h3><ul style='" + style2 +"'>"
		htm +="<li>Taux de taxe sur les primes du Québec: <ul style='" + style2 +"'>"
		htm +="<li style='padding:10px'>La boîte à outils directe reflète le nouveau taux de taxe sur les primes du Québec (3,3 %) qui est en vigueur depuis le début de 2022.</li>" 
		htm +="<li style='padding:10px'>Certains assureurs n'ont peut-être pas mis à jour leur logiciel d'illustration, mais leurs systèmes d'administration seraient à jour.</li>" 
		htm +="</li></ul></h3>"
		htm +="<h2 style='" + style +"'><u>Conseils Rapide:</u></h2>"
	htm +="<h3><ul style='" + style2 +"'>"
	htm +="<li style='padding:10px'>Guide de logiciels et sites web des compagnies d'assurance:<br/><div className='App'><iframe src='" + PdfFr + "#zoom=148'  width='70%'   height='520px' frameborder='2' ></iframe> </div></li>"
	htm +="<li style='padding:10px'>Comment ajouter votre logo:<br/><iframe src=https://player.vimeo.com/video/591708400?h=6858e6a755  width='427' height='240' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></li>"
	htm +="<li style='padding:10px'>Comment enregistrer et charger un dossier client:<br/><iframe src=https://player.vimeo.com/video/591708381?h=ef1cfd2fd4  width='427' height='240' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></li>"
	htm +="<li style='padding:10px'>La conformité:<br/><iframe src=https://player.vimeo.com/video/591708352?h=bcda7108a8 width='427' height='240' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></li>"
	htm +="<li>Dans l'outil d'analyse des besoins en matière d'assurance, vous pouvez retirer le conjoint et :  <ul style='" + style2 +"'>"
	htm +="<li style='padding:10px'>Calculer les besoins d'assurance selon le montant requis pour les ayants droit ou les sources de revenus au décès de la personne.</li>" 
	htm +="<li style='padding:10px'>Ajouter les enfants pour calculer les besoins d'assurance selon l'argent nécessaire à la famille ou les sources de revenus au décès d'un parent seul</li>" 
	htm +="</li></ul>"
htm +="<li style='padding:10px'> Partager sur ècran la boîte à outils PPI Directe aves vos clients</li>"
	htm +="</ul></h3>"
}

//let data1=fetchAppletUsageFromDB(true,true,true);		
	
/* const optionsAll = {
	filter: true,
	sort: true,
	header: {
	  Row_Counter: {
		title: "",
		align: "center",
	  },	
	  agentEmail: {
		title: "Email",
		align: "center",
	  },
	  appletNameEn: {
		title: "Applet",
		align: "center",
	  },
		agentName: {
		title: "name",
		align: "center",
	  },
		loginDate: { title: "Date", align: "center" },
	},
	data: {
		Row_Counter	: { align: "left" },
	  agentEmail: { align: "left" },
	  appletNameEn: { align: "left" },
	  agentName: { align: "left" },
	  loginDate: { align: "left" },
	},
  };
  const optionsDistinct = {
	filter: true,
	sort: true,
	header: {
	  Row_Counter: {
		title: "",
		align: "center",
	  },	
	  agentEmail: {
		title: "Email",
		align: "center",
	  },
	  	agentName: {
		title: "name",
		align: "center",
	  }
	},
	data: {
	  Row_Counter	: { align: "left" },
	  agentEmail: { align: "left" },
	  agentName: { align: "left" },
	  
	},
  };
  let widthAll=["15%","35%","45%","0%","20%"]
 let minWidthAll=["60px","110px","100px","0px","100px"]
 let widthDistinct=["12%","44%","44%"]
 let minWidthDistinct=["60px","180px","180px"]
		

  	
		//let data1=fetchAppletUsageFromDB(true,true,true);		
		//fetchAppletUsageFromDB(false,true,true);	
		console.log(this.state.data)
 */
		
/* 
		if(this.state.loading)
		{
		  return(
		  <div style={{marginTop: "-50px"}}>
		  Please wait  <br/> <div class="loader-container"><div class="loader"></div></div> 
		  </div>
		  )
		} */
//	  else
		return (
			<div className="appletDiv">
				<div style={{paddingLeft: "5%",   width: "80%"}}>
 			{/* <Collapsible
            id={1}
            title={"Applet Usage"}
           // openParent={this.openParent}
		    openCollapsible={this.state.openCollapsible }
            handleCollapsibleClick={this.handleCollapsibleClick}
          	>

				  {this.state.loading=== false &&  
				<div style={{overflow:"auto", paddingLeft: "5%",   width: "100%",  maxHeight: "52vh"}}> 
					<EnhancedTable data={this.state.data} options={optionsDistinct} sort={this.sort} language={this.props.language} 
					width={widthDistinct} 
					minWidth={minWidthDistinct} /></div>}
		
		  	</Collapsible> */}
			</div>
			<iframe className="appletiFrame" style={{ width: '100%', border: '0', alt: 'Null', marginLeft:"2%" }} srcdoc={htm}    />

				
				</div>
			
		);
	}
}


