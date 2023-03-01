import {buildMode}   from '../../package.json';

export const TOOLKIT = {
	en: {
		Title: 'PPI Toolkit Direct',
		Home: 'Home',
		Applets:'Applets',
		INA: 'Insurance Needs Analysis',
		WL: 'Insurance for Your Whole Life',
		EP: 'Protecting Your Estate',
        EB: 'Creating an Estate Bond',
        PA: 'Practice Assistant',
        PLA: 'Planning Assistant',
        LIFO: 'Life Insurance Funding Options',
        CA: 'Capital Alternatives',
        BR: 'Bridging Risk',
        IR: 'Income Replacement',
        CSW: 'Carrier Software and Websites',
        TIPS: 'Tips and Notes',
        DB: 'Presentations',
        DBCL: 'Clients',
        AU: 'Applet Usage',
        FB: 'Feedback'
	},
	fr: {
		Title: 'Boîte à outils directe- PPI',
		Home: 'Principal',
		Applets: 'Applets',
		INA: "Analyse des besoins en matière d'assurance",
		WL: 'L\'assurance pour votre vie entière',
        EP: 'Protection de votre patrimoine',
        EB: "Création d'un bon successoral",
        PA: 'Assistant à la conformité',
        PLA: 'Assistant de Planification',
        LIFO: "Modes de financement de l'assurance vie",
        CA: 'Options de capital',
        BR: "Les ponts où l'on se hasarde",
        IR: 'Remplacement du revenu',
        CSW: 'Logiciels et sites web de la compagnie d’assurance',
        TIPS: 'Conseils et remarques',
        DB: 'Presentations ^F',
        DBCL: 'Clients ^F',
        AU: "Utilisation d'applet",
        FB: 'Commentaires'

	}
}

export const MENU_TEXT = {
	en: {
        BR_NAME: " (critical illness)",
        IR_NAME: " (disability)",
        NEW: "-- new",
        SAVE: "Save any unsaved data...",
        UPDATED:"-- updated"
        },
    fr: {
        BR_NAME: " (maladies graves)",
        IR_NAME: " (invalidité)",
        NEW: "-- nouveau",
        SAVE: "Enregistrer...",
        UPDATED:"-- mise à jour"
        }
}



export const PATHS = {
		Home: '/',
        PA: '/PA',
        PLA: '/PLA',
        INA:'/INA',
        EP:'/EP',
        EB: '/EB',
        WL:'/WL',
        LIFO:'/LIFO',
        CA: '/CA',
        BR: '/BR',
        IR: '/IR',
        CSW: '/CSW',
        TIPS: '/TIPS',
        DB: '/DB',
        DBCL: '/DBCL',
        AU: '/AU',
        FB: '/FB',        
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
    BR: 'BR',
    IR: 'IR',
    CSW: 'CSW'
}

export function getAppletNames (lang) {
    
    return [
    TOOLKIT[lang].Title,
    TOOLKIT[lang].PA,
    TOOLKIT[lang].PLA,
    TOOLKIT[lang].INA,
    TOOLKIT[lang].EP,
    TOOLKIT[lang].WL,
    TOOLKIT[lang].LIFO,
    TOOLKIT[lang].CA,
    TOOLKIT[lang].EB,
    TOOLKIT[lang].BR,
    TOOLKIT[lang].IR,
    TOOLKIT[lang].CSW]
}

export function getAppletCode (appletIndex) {    
    if (appletIndex=== 0)
        return "ALL"
    else if (appletIndex=== "1")
        return "PA"
    else if (appletIndex=== "2")
        return "PLA"
    else if (appletIndex=== "3")
        return "INA"
    else if (appletIndex=== "4")
        return "EP"
    else if (appletIndex=== "5")
        return "WL"
    else if (appletIndex=== "6")
        return "LIFO"
    else if (appletIndex=== "7")
        return "CA"
    else if (appletIndex=== "8")
        return "EB"
    else if (appletIndex=== "9")
        return "BR"
    else if (appletIndex=== "10")
        return "IR"
    else if (appletIndex=== "11")
        return "CSW"
    else
        return "ALL"
    
    
}
       
export const OFFICE_NAMES=[
    "AB",
"BC",
"MB",
"NF",
"NS",
"ON",
"QC",
"N/A"

]

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
const APP_SITE_BR = [
    "http://localhost:8094/", // APP_SITE_BR_LOCAL:
    "https://test-tkdirectbridgingrisk.ppi.ca", // APP_SITE_BR_TEST: 
    "https://toolkitdirectbridgingrisk.ppi.ca", //APP_SITE_BR_PROD: ,
]
const APP_SITE_IR = [
    "http://localhost:8095/", // APP_SITE_BR_LOCAL:
    "https://test-tkdirectincomereplacement.ppi.ca", // APP_SITE_BR_TEST: 
    "https://toolkitdirectincomereplacement.ppi.ca", //APP_SITE_BR_PROD: ,
]
const APP_SITE_FB = [
    "http://localhost:8085/", // APP_SITE_INA_LOCAL: 
    "https://test-tkdirectsnap.ppi.ca", // APP_SITE_INA_TEST: 
    "https://toolkitdirectsnap.ppi.ca", // APP_SITE_INA_PROD: 
]  

export const NAVBAR_SWITCH_WIDTH = 1025

const API_SITE = [
    "http://localhost:8082",
    "https://test-tkdirectapi.ppi.ca",
    "https://privateapi.ppi.ca/ToolkitDirect"
]

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
    else if (appletPath===PATHS.BR)
        return APP_SITE_BR[buildMode] 
    else if (appletPath===PATHS.IR)
        return APP_SITE_IR[buildMode] 
    else if (appletPath===PATHS.CSW)
        return APP_SITE_CSW[buildMode] 
    else
        return APP_SITE_INA[buildMode] 

}

export function unloadSpinner()
{
    const loader=document.getElementById("gohLoader");
    const frame=document.getElementById("goh");
    if (loader!== null && loader!== undefined)
        loader.style.display = 'none'
    if (frame!== null && frame!== undefined && frame.style.display==="none")
    {
        frame.style.display="block"
        frame.style.visibility="visible"           
    }
}

export function getAppletLoadImageArray()
{
    let appleImageArray=[]
    const img="/minimalAppletPreloadTopassCreds.png"
    appleImageArray.push(APP_SITE_INA[buildMode]+img) 
    appleImageArray.push(APP_SITE_LIFO[buildMode] +img)
    appleImageArray.push(APP_SITE_WHOLELIFE[buildMode] +img)
    appleImageArray.push(APP_SITE_PRACTICEASSISTANT[buildMode] +img)
    appleImageArray.push(APP_SITE_PLANNINGASSISTANT[buildMode] +img)
    appleImageArray.push(APP_SITE_ESTATEPROTECTION[buildMode] +img)
    appleImageArray.push(APP_SITE_ESTATEBOND[buildMode] +img)
    appleImageArray.push(APP_SITE_CA[buildMode] +img)
    appleImageArray.push(APP_SITE_BR[buildMode] +img)
    appleImageArray.push(APP_SITE_IR[buildMode] +img)
    appleImageArray.push(APP_SITE_CSW[buildMode] +img)
    return appleImageArray
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
    else if (APP_SITE_BR.includes(appletURL))
        return TOOLKIT[lang].BR
    else if (APP_SITE_IR.includes(appletURL))
        return TOOLKIT[lang].IR
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

  export function clearListCookies() {
  
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var spcook = cookies[i].split("=");
    
    //deleteCookie(spcook[0]);
  }
  /* function deleteCookie(cookiename) {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    var expires = ";expires=" + d;
    var name = cookiename;
    var value = "";
    document.cookie = name + "=" + value + "; " + expires + "; path=/acc/html";
  } */
  localStorage.clear();
  //window .location = ""; // TO REFRESH THE PAGE
}

export  function deleteCookie(cookiename) {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    var expires = ";expires=" + d;
    var name = cookiename;
    var value = "";
    document.cookie = name + "=" + value + "; " + expires + "; path=/acc/html";
  }
 
 /* 
  export async function fetchAppletUsageFromDB(excludeDevs,excludePPI,dateFrom,dateTo){
    try {
      const url = API_SITE[buildMode] + "/api/TKD_AppletUsage";//?authToken=";
      let data = {excludeDevs: excludeDevs, excludePPI: excludePPI,  dateTo:dateTo, dateFrom: dateFrom}
  
      let fetchData = await fetch(url,
      {
        method: 'GET',
      }
     )
     
    if (fetchData !== undefined)
    {
      console.log(fetchData)
      return fetchData;
    }
   } catch (error) {
      console.log("fetchAppletUsageFromDB", error);
    }
  } 
 */
  
  export async function fetchAppletUsageFromDB(   appletUsageType,    appletUsageMembers,dateFrom,dateTo, agentName, appletName, officeName){
    try {
      const url = API_SITE[buildMode] + "/api/TKD_AppletUsage";//?authToken=";
      let json = {appletUsageType:appletUsageType, appletUsageMembers:appletUsageMembers, dateTo:dateTo, dateFrom: dateFrom, agentName:agentName, appletName:appletName, officeName:officeName}
  
        let fetchData = await fetch(url, {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify(json)
    })
    let data = await fetchData.json();
    if (data !== undefined)
    {
       // console.log(data, json)
        return data;
    }
    } catch (error) {
    console.log("fetchAppletUsageFromDB", error);
  }
}

export async function fetchRecordAppletUsageItselfToDB(authToken){
    try {
        const url = API_SITE[buildMode] + "/api/TKD_ValidateJWT";//?authToken=";
        let jwt = {"authToken": authToken, "applet":"AU"} 
    
        let fetchData = await fetch(url, {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify(jwt)
    })
        let data = await fetchData.json();
    if (data !== undefined)
    {
        //console.log(data,JSON.stringify(jwt))
        return data;
    }
    } catch (error) {
        console.log("fetchRecordAppletUsageItselfToDB", error);
    }
}
   

export async function fetchUserLoginAccess(userEmail){
    try {
        let result={usage:false, feedback:false}
        const url = API_SITE[buildMode] + "/api/TKD_AppletUsageAccess";//?authToken=";
        let json = {email:userEmail, colourLevel:"Rainbow"}
  
        let fetchData = await fetch(url, {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify(json)
        })
        let data = await fetchData.json();
        console.log(data)
        if (data !== undefined)
        {
        // console.log(data)
            result.usage=data
            //return data;
        }

        json = {email:userEmail, colourLevel:"Feedback"}
  
        fetchData = await fetch(url, {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify(json)
        })
        let data1 = await fetchData.json();
        if (data1 !== undefined)
        {
        // console.log(data)
            result.feedback=data1
            //return data;
        }
        console.log(result)
        return result

    } catch (error) {
    console.log("fetchUserLoginAccess", error);
  }
}

export async function fetchUserFeedbackAccess(userEmail){
    try {
      const url = API_SITE[buildMode] + "/api/TKD_AppletFeedbackAccess";//?authToken=";
      let json = {email:userEmail}
  
        let fetchData = await fetch(url, {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify(json)
    })
    let data = await fetchData.json();
    if (data !== undefined)
    {
       // console.log(data)
        return data;
    }
    } catch (error) {
    console.log("fetchUserFeedbackAccess", error);
  }
}


export async function fetchSaveComment(fb_json){
    try {
      const url = API_SITE[buildMode] + "/api/TKD_AddFeedback";//?authToken=";
      //console.log(fb_json)
       
        let fetchData = await fetch(url, {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify(fb_json)
    })
    let data = await fetchData.json();
    if (data !== undefined)
    {
       // console.log(data)
        return data;
    }
    } catch (error) {
    console.log("fetchSaveComment", error);
  }
}



export async function fetchSaveResponseToFeedback(r_json){
    try {
      const url = API_SITE[buildMode] + "/api/TKD_AddResposeToFeedback";//?authToken=";
      //console.log(fb_json)
       
        let fetchData = await fetch(url, {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify(r_json)
    })
    let data = await fetchData.json();
    if (data !== undefined)
    {
       // console.log(data)
        return data;
    }
    } catch (error) {
    console.log("fetchSaveResponseToFeedback", error);
  }
}
