import React from 'react';
//import toolkit from './toolkit.png';
import './NA.css';
export class AppletTIPS extends React.Component {
	render() {
		const lang = this.props.language === "en" ? "Français" : "English";
		let url = this.props.language === "en" ? "https://www.ppi.ca/en/toolkit-direct-intro" : "https://www.ppi.ca/fr/toolkit-direct-intro";
		let style="font-family: Trebuchet MS; color:#864b94; padding-left:5%"
		let htm;
		if(this.props.language === "en")
{

		htm ="<h2 style='" + style +"'> Quick Tips:</h2>"
		htm +="<h3><ul style='" + style +"'>"
		htm +="<li style='padding:10px'>How to add your logo:<br/><iframe src=https://player.vimeo.com/video/555463883?h=f27f9293d1  width='427' height='240' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></li>"
		htm +="<li style='padding:10px'>How to save and load a client file:<br/><iframe src=https://player.vimeo.com/video/555463911?h=8305375147  width='427' height='240' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></li>"
		htm +="<li style='padding:10px'>How to stay compliant:<br/><iframe src=https://player.vimeo.com/video/555463929?h=1df05274ac  width='427' height='240' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></li>"
		htm +="<li>In Insurance Needs Analysis you can delete the spouse and: <ul style='" + style +"'>"
		htm +="<li style='padding:10px'>calculate insurance needs based on the Estate's required money, or stream of income at death of a Single Person</li>" 
		htm +="<li style='padding:10px'>add children to calculate insurance needs based on family's required money, or stream of income at death of a Single Parent</li>" 
		htm +="</li></ul>"
		htm +="<li style='padding:10px'>Screenshare Toolkit Direct with your clients</li>"
		htm +="</ul></h3>"
}
else{
	htm ="<h2 style='" + style +"'> Conseils Rapide:</h2>"
	htm +="<h3><ul style='" + style +"'>"
	htm +="<li style='padding:10px'>Comment ajouter votre logo:<br/><iframe src=https://player.vimeo.com/video/591708400?h=6858e6a755  width='427' height='240' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></li>"
	htm +="<li style='padding:10px'>Comment enregistrer et charger un dossier client:<br/><iframe src=https://player.vimeo.com/video/591708381?h=ef1cfd2fd4  width='427' height='240' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></li>"
	htm +="<li style='padding:10px'>La conformité:<br/><iframe src=https://player.vimeo.com/video/591708352?h=bcda7108a8 width='427' height='240' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe></li>"
	htm +="<li>Dans l'outil d'analyse des besoins en matière d'assurance, vous pouvez retirer le conjoint et :  <ul style='" + style +"'>"
	htm +="<li style='padding:10px'>Calculer les besoins d'assurance selon le montant requis pour les ayants droit ou les sources de revenus au décès de la personne.</li>" 
	htm +="<li style='padding:10px'>Ajouter les enfants pour calculer les besoins d'assurance selon l'argent nécessaire à la famille ou les sources de revenus au décès d'un parent seul</li>" 
	htm +="</li></ul>"
htm +="<li style='padding:10px'> Partager sur ècran la boîte à outils PPI Directe aves vos clients</li>"
	htm +="</ul></h3>"
}


		return (
			<div className="appletDiv">

			
				<iframe className="appletiFrame" style={{ width: '100%', border: '0', alt: 'Null' }} srcdoc={htm}    />

				
				</div>
			
		);
	}
}
