import {buildMode}   from '../../package.json';

export const TOOLKIT = {
	en: {
		Title: 'PPI Toolkit Direct',
		Home: 'Home',
		Applets:'Applets',
		INA: 'Insurance Needs Analysis',
		WL: 'Insurance for Your Whole Life',
		EP: 'Protecting Your Estate',
        EB: 'Estate Bond',
        PA: 'Practice Assistant',
        PLA: 'Planning Assistant',
        LIFO: 'Life Insurance Funding Options',
        CA: 'Capital Alternatives',
        CSW: 'Carrier Software and Websites',
        TIPS: 'Quick Tips',
        DB: 'Presentations',
        DBCL: 'Clients'
	},
	fr: {
		Title: 'Boîte à outils directe- PPI',
		Home: 'Principal',
		Applets: 'Applets',
		INA: "Analyse des besoins en matière d'assurance",
		WL: 'L\'assurance pour votre vie entière',
        EP: 'Protection de votre patrimoine',
        EB: 'Estate Bond ^F',
        PA: 'Assistant à la conformité',
        PLA: 'Planning Assistant ^F',
        LIFO: "Modes de financement de l'assurance vie",
        CA: 'Options de capital',
        CSW: 'Carrier Software and Websites ^F',
        TIPS: 'Conseils Rapide',
        DB: 'Presentations ^F',
        DBCL: 'Clients ^F'
	}
}


export const PATHS = {
		Home: '/',
        PA: '/PracticeAssistant',
        PLA: '/PlanningAssistant',
        INA:'/INA',
        EP:'/EstateProtection',
        EB: '/EstateBond',
        WL:'/WholeLife',
        LIFO:'/LIFO',
        CA: '/CapitalAlternatives',
        CSW: '/CarrierSoftware',
        TIPS: '/TIPS',
        DB: '/DB',
        DBCL: '/DBCL',
}

export const APPLETS = {
    PA: 'PA',
    PLA: 'PLA',
    INA:'INA',
    EP:'EP',
    EB:'EB',
    IFYWL:'IFYWL',
    LIFO:'LIFO',
    CA: 'CA',
    EB:'EB'
}

const APP_SITE_INA=[
    //const APP_SITE_INA_AZURE: "https://ppitoolkitdirectina.azurewebsites.net/INA",
    "http://localhost:8085/", // APP_SITE_INA_LOCAL: 
    "https://test-tkdirectsnap.ppi.ca", // APP_SITE_INA_TEST: 
    "https://toolkitdirectsnap.ppi.ca", // APP_SITE_INA_PROD: 
]

const APP_SITE_LIFO = [
    "http://localhost:8089/", // APP_SITE_LIFO_LOCAL:
    "https://test-tkdirectlifo.ppi.ca", // APP_SITE_LIFO_TEST: 
    "https://toolkitdirectlifo.ppi.ca", //APP_SITE_LIFO_PROD: ,
]


const APP_SITE_WHOLELIFE = [
    "http://localhost:8086/", //APP_SITE_WHOLELIFE_LOCAL: 
    "https://test-tkdirectwholelife.ppi.ca", //APP_SITE_WHOLELIFE_TEST: 
    "https://toolkitdirectwholelife.ppi.ca", // APP_SITE_WHOLELIFE_PROD: 

]

const APP_SITE_PRACTICEASSISTANT = [
    "http://localhost:8087/", 
    "https://test-tkdirectpracticeassistant.ppi.ca", //APP_SITE_PRACTICEASSISTANT_TEST: 
    "https://toolkitdirectpracticeassistant.ppi.ca", //APP_SITE_PRACTICEASSISTANT_PROD: 
]

const APP_SITE_PLANNINGASSISTANT = [
    "http://localhost:8095/", 
    "https://test-tkdirectplanningassistant.ppi.ca", 
    "https://toolkitdirectplanningassistant.ppi.ca", 
]

const APP_SITE_ESTATEPROTECTION = [
    "http://localhost:8088/", 
    "https://test-tkdirectestateprotection.ppi.ca", // TEST: 
    "https://toolkitdirectestateprotection.ppi.ca", // PROD: 
]   

const APP_SITE_CA = [
    "http://localhost:8090/", // LOCAL: 
    "https://test-tkdirectcapitalalternatives.ppi.ca", // TEST: 
    "https://toolkitdirectcapitalalternatives.ppi.ca", // PROD: 
] 
const APP_SITE_ESTATEBOND = [
    "http://localhost:8096/", 
    "https://test-tkdirectestatebond.ppi.ca", 
    "https://toolkitdirectestatebond.ppi.ca", 
] 
const APP_SITE_CSW = [
    "http://localhost:8092/", // LOCAL: 
    "https://test-tkdirectcarriersoftware.ppi.ca", // TEST: 
    "https://toolkitdirectcarriersoftware.ppi.ca", // PROD: 
]   
const APP_SITE_TIPS = [
    "http://localhost:8091/", // LOCAL: 
    "https://test-tkdirectcapitalalternatives.ppi.ca", // TEST: 
    "https://toolkitdirectcapitalalternatives.ppi.ca", // PROD: 
]   
const APP_SITE_DB = [
    "http://localhost:8092/", // LOCAL: 
    "https://test-tkdirectcapitalalternatives.ppi.ca", // TEST: 
    "https://toolkitdirectcapitalalternatives.ppi.ca", // PROD: 
]   
const APP_SITE_DBCL = [
    "http://localhost:8093/", // LOCAL: 
    "https://test-tkdirectcapitalalternatives.ppi.ca", // TEST: 
    "https://toolkitdirectcapitalalternatives.ppi.ca", // PROD: 
]   

export const NAVBAR_SWITCH_WIDTH = 1025

export function getURL(appletPath)
{
    
    if (appletPath===PATHS.INA)
        return APP_SITE_INA[buildMode] 
    else  if (appletPath===PATHS.LIFO)
        return APP_SITE_LIFO[buildMode] 
    else  if (appletPath===PATHS.WL)
        return APP_SITE_WHOLELIFE[buildMode] 
    else  if (appletPath===PATHS.PA)
        return APP_SITE_PRACTICEASSISTANT[buildMode] 
    else  if (appletPath===PATHS.PLA)
        return APP_SITE_PLANNINGASSISTANT[buildMode] 
    else if (appletPath===PATHS.EP)
        return APP_SITE_ESTATEPROTECTION[buildMode] 
    else if (appletPath===PATHS.EB)
        return APP_SITE_ESTATEBOND[buildMode] 
    else if (appletPath===PATHS.CA)
        return APP_SITE_CA[buildMode] 
    else if (appletPath===PATHS.CSW)
        return APP_SITE_CSW[buildMode] 
    else
        return APP_SITE_INA[buildMode] 

}

export function  getAppletName(appletURL, lang){
  
    if (APP_SITE_INA.includes(appletURL))
        return TOOLKIT[lang].INA
    else if (APP_SITE_LIFO.includes(appletURL))
        return TOOLKIT[lang].LIFO
    else if (APP_SITE_WHOLELIFE.includes(appletURL))
        return TOOLKIT[lang].WL
    else if (APP_SITE_PRACTICEASSISTANT.includes(appletURL))
        return TOOLKIT[lang].PA
    else if (APP_SITE_PLANNINGASSISTANT.includes(appletURL))
        return TOOLKIT[lang].PLA
    else if (APP_SITE_ESTATEPROTECTION.includes(appletURL))
        return TOOLKIT[lang].EP
    else if (APP_SITE_ESTATEBOND.includes(appletURL))
        return TOOLKIT[lang].EB
    else if (APP_SITE_CA.includes(appletURL))
        return TOOLKIT[lang].CA
    else if (APP_SITE_CSW.includes(appletURL))
        return TOOLKIT[lang].CSW
    else
        return TOOLKIT[lang].INA
}

export const DIALOG = {
    en: {
      deleteTitle:"Are you sure you wish to delete this case",
      deleteOK:"Confirm",
      deleteCancel:"Cancel",
      
    },
    fr: {
        deleteTitle:"Are you sure you wish to delete this case ^F",
        deleteOK:"Confirm ^F",
        deleteCancel:"Cancel ^F",
        }
  }
