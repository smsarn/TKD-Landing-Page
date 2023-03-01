import React from "react";
//import toolkit from './toolkit.png';
import { TOOLKIT } from "../Utils/util";

import { APPLETS } from "../Utils/util";
import './tooltip.css';

// copy here
/* const APPLETS = {
    PA: 'PA',
    PLA: 'PLA',
    INA:'INA',
    EP:'EP',
    EB:'EB',
    IFYWL:'IFYWL',
    LIFO:'LIFO',
    CA: 'CA',
    BR: 'BR',
    IR: 'IR',
    CSW: 'CSW'
} */
export const OUTPUTDESC = {
  en: {
    HM:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["en"].Title}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Helping you enhance productivity and grow your business</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;For more information or training, contact your local Collaboration Centre and Digital Sales Enablement Team</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;For technical assistance, contact the HelpDesk at 1-855-824-7526 or helpdesk@ppi.ca</li>
    </ul>
    </span>, 
    
    PA:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["en"].PA}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Managing a compliant practice</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;A library of customizable letters, documents, and regulations and guidelines for your compliant client-facing, personal and corporate needs</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Includes <span style={{color: "white"}}><b>The Reason Why</b></span> letter and other important documents</li>
    </ul>
    </span>, 
    PLA:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["en"].PLA}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Planning Documents</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Client Investment Profile questionnaire</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Financial Pyramid of Needs presentation</li>
    </ul>
    </span>, 

    INA:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["en"].INA}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Gathering information and determining insurance needs</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Collect details of your clients’ income, sources of cash, liabilities, and survivors’ needs for income at death</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Calculate and compare funding permanent and temporary needs at death for different periods, for a  <span style={{color: "white"}}><b>family or a single parent</b></span>, with your clients’ sources of cash and income and with life insurance </li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Produce and personalize PDFs, graphs, spreadsheet, and export to Excel and to several other applets</li>
    </ul>
    </span>, 

    EP:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["en"].EP}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Calculating and funding a growing estate liability</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Enter or integrate your client’s financial data from the Insurance Needs Analysis</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Calculate your client’s immediate and long-term estate <span style={{color: "white"}}><b>tax or total liability</b></span> at death, demonstrate the impact to their estate value, and review funding alternatives</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Produce and personalize PDFs, graphs, spreadsheet, and export to Excel and to several other applets</li>
    </ul>
    </span>, 

    EB:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["en"].EB}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Maximizing your individual and corporate client’s estate</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Enter or integrate your client’s financial data from the Insurance Needs Analysis to calculate permanent insurance solutions </li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Demonstrate the difference in your client’s personal or corporate estate value for a conventional investment portfolio and a permanent life insurance product</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Produce and personalize a PDF presentation, or a spreadsheet and export to Excel</li>
    </ul>
    </span>, 
    
    WL:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["en"].WL}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Exploring Whole Life Insurance</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Introduce Whole Life, demonstrate the Value of PAR and highlight the benefits of a mutual insurance company  </li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Enter or integrate your client’s financial data from the Insurance Needs Analysis to calculate Equitable’s Equimax whole life insurance presentation</li>
    </ul>
    </span>, 

    LIFO:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["en"].LIFO}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Examining the various life insurance product categories </i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Enter or integrate your client’s financial data from the Insurance Needs Analysis to calculate temporary and permanent insurance solutions </li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Explore the features and financial benefits of various life insurance categories and products to determine the best options for your clients and demonstrate the long-term benefits and flexibility of permanent products</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Produce and personalize a PDF presentation</li>
    </ul>
    </span>, 

    
    CA:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["en"].CA}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Presenting Sources of Capital to fund needs at death</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Enter or integrate your client’s financial data from the Insurance Needs Analysis </li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Demonstrate the various means for acquiring capital to fund needs at death, including liquidating assets, borrowing funds, creating a reserve fund, and purchasing life insurance</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Produce and personalize a PDF presentation</li>
    </ul>
    </span>, 
  
  BR:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["en"].BR}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Addressing Critical Illness insurance needs</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Present common insurable risks such as car and home losses with <span style={{color: "white"}}><b>Critical Illness</b></span>, and the probability of making related claims </li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Calculate a lump sum benefit based on lost income and other health recovery related expenses</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Produce and personalize a PDF presentation</li>
    </ul>
    </span>, 

  IR:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["en"].IR}</h3>
  <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Demonstrating Disability insurance needs</i></b></h4>
  <ul>
    <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Present the statistical risk and duration of <span style={{color: "white"}}><b>disability</b></span>, quantify your client’s earning potential, explore alternatives to fund a loss of income and demonstrate the wide demographic accessing disability benefits in Canada</li>
    <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Produce a PDF presentation</li>
  </ul>
</span>, 


CSW:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["en"].CSW}</h3>
  <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Managing and running carrier software</i></b></h4>
  <ul>
    <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;See the versions and status of your illustration software at a glance and quickly download updates</li>
    <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Access carrier websites </li>
  </ul>
</span>, 
  },

  fr: {
    HM:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["fr"].Title}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Conçue pour améliorer la productivité et le développement de votre entreprise</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Pour plus d'informations ou pour obtenir une formation, veuillez contacter votre centre de collaboration local et l'équipe d'optimisation des ventes numériques</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Pour toute assistance technique, contactez le soutien informatique au 1-855-824-7526 ou par courriel helpdesk@ppi.ca</li>
    </ul>
    </span>, 
    
    PA:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["fr"].PA}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Pour gérer une pratique conforme</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Une bibliothèque de lettres, documents, réglementations et directives personnalisables pour répondre à vos besoins de conformité en matière de relations avec les clients à titre personnel ou professionnel</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Comprend la <span style={{color: "white"}}><b>Lettre explicative</b></span> et d'autres documents importants </li>
    </ul>
    </span>, 
    PLA:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["fr"].PLA}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Documents de planification</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Questionnaire sur le profil de l'investisseur</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Pyramide des besoins de la planification financière</li>
    </ul>
    </span>, 

    INA:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["fr"].INA}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Recueillir des informations et déterminer les besoins d'assurance </i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Recueillir des informations et déterminer les besoins d'assurance </li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Calculer et comparer le financement des besoins permanents et temporaires au décès pour différentes périodes, pour  <span style={{color: "white"}}><b>une famille ou un parent seul</b></span>, avec les sources de liquidités et de revenus de vos clients et avec l'assurance-vie</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Produire et personnaliser des documents en format PDF, des graphiques, des feuilles de calcul et exporter vers Excel et vers plusieurs autres applets</li>
    </ul>
    </span>, 

    EP:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["fr"].EP}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Calculer et financer un passif successoral croissant</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Saisir et intégrer les données financières de votre client à partir de l'analyse des besoins d'assurance</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Calculer <span style={{color: "white"}}><b>l'impôt</b></span> successoral immédiat et à long terme de votre client ou sa <span style={{color: "white"}}><b>responsabilité totale</b></span> au décès, démontrer l'impact sur la valeur de sa succession et examiner les alternatives de financement       </li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Produire et personnaliser des documents en format PDF, des graphiques, des feuilles de calcul et exportez lez vers Excel et vers plusieurs autres applets</li>
    </ul>
    </span>, 

    EB:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["fr"].EB}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Maximiser le patrimoine de vos clients particuliers et des entreprises</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Saisir et intégrer les données financières de votre client à partir de l'analyse des besoins d'assurance pour pouvoir calculer les solutions de l'assurance permanente</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Démontrer la différence de valeur du patrimoine personnel ou de celui de l'entreprise de votre client et proposer un portefeuille de placement conventionnel et un produit d'assurance-vie permanente</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Produire et personnaliser une présentation en format PDF ou en format de feuille de calcul et exportez-la vers Excel</li>
    </ul>
    </span>, 
    
    WL:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["fr"].WL}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Explorez l'assurance vie entière</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Introduire l'assurance vie entière, démontrer la valeur du PAR et souligner les avantages d'une compagnie d'assurance mutuelle</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Saisir ou intégrer les données financières de votre client provenant de l'analyse des besoins d'assurance pour calculer la présentation de l'assurance vie entière Equimax de l'assurance vie Équitable </li>
    </ul>
    </span>, 

    LIFO:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["fr"].LIFO}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Examiner les différentes catégories des produites de l'assurance-vie </i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Saisir ou intégrer les données financières de votre client à partir de l'analyse des besoins d'assurance pour calculer les solutions d'assurance temporaire et permanente </li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Explorer les caractéristiques et les avantages financiers des diverses catégories et produits d'assurance-vie pour déterminer les meilleures options pour vos clients et démontrer les avantages à long terme et la souplesse des produits permanents</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Produire et personnaliser une présentation en format PDF </li>
    </ul>
    </span>, 

    
    CA:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["fr"].CA}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Présenter les sources de capital pour financer les besoins au décès</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;•	Saisir ou intégrer les données financières de votre client provenant de l'analyse des besoins en assurance</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;•	Démontrer les différents moyens d'acquérir un capital pour financer les besoins au décès, y compris la liquidation des actifs, l'emprunt de fonds, la création d'un fonds de réserve et la souscription d'une assurance-vie</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;•	Produire et personnaliser une présentation en format PDF</li>
    </ul>
    </span>, 
  
  BR:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["fr"].BR}</h3>
    <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Répondre aux besoins de l'assurance contre les maladies graves</i></b></h4>
    <ul>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Présenter les risques assurables courants, tels que les pertes de voiture et de maison lors d'une <span style={{color: "white"}}><b>maladie grave</b></span> et la probabilité de faire des réclamations connexes</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Calculer une indemnité forfaitaire en fonction de la perte de revenu et des autres dépenses liées au rétablissement de la santé</li>
      <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Produire et personnaliser une présentation en format PDF</li>
    </ul>
    </span>, 

  IR:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["fr"].IR}</h3>
  <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Démontrer les besoins en assurance invalidité</i></b></h4>
  <ul>
    <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Présenter le risque statistique et la durée de <span style={{color: "white"}}><b>l'invalidité</b></span>, quantifier le potentiel de gain de votre client, explorer les alternatives pour financer une perte de revenu et démontrer le large éventail de personnes ayant accès aux prestations d'invalidité au Canada </li>
    <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Produire une présentation en format PDF</li>
  </ul>
</span>, 


CSW:<span><h3  style={{color: "white", fontSize: "1.5em", marginBottom:"38px"}}>{TOOLKIT["fr"].CSW}</h3>
  <h4 style={{color: "white", marginBottom:"17px"}}><b><i>Gestion et exécution des logiciels des assureurs</i></b></h4>
  <ul>
    <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Consultez les versions et les statuts de vos illustrations en un coup d'œil et téléchargez rapidement les mises à jour </li>
    <li className="liTip">&#8226;&nbsp;&nbsp;&nbsp;Accédez aux sites Web des assureurs   </li>
  </ul>
</span>, 
  }
  
}



export class AppletDesc extends React.Component {
  constructor(props) {
    super(props);
      
  }

  
  render() {
    const style= {fontFamily: "Georgia",
    color: "#beb5ac",
    lineHeight: "2",
    textAlign: "left",
    backgroundColor:this.props.color,
    margin:"30px",marginTop:"40px",marginBottom:"35px", fontSize:"16px", whiteSpace:"nowrap"
    } 
    

    const desc = OUTPUTDESC[this.props.lang][this.props.applet];

    return (
      <div style={style}>
          <span>{desc}</span> 
      </div>
    );
  }
}
