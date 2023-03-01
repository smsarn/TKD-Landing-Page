import React from 'react';

import { TOOLKIT } from "./util";
import { APPLETS } from "./util";

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
    PA: 'PA',
    PLA: 'PLA',
    INA:(<div> <h2>{TOOLKIT["en"].INA}</h2><br/>
                <span style= {{width:"100%", display: "block", whiteSpace:"nowrap"}} >This presentation (INA) analyzes the life insurance needs of your client by collecting details <br/>
                on their income, the family needs for cash and for income at death, the family sources<br/> 
                for cash and income, and the resulting insurance requirements to cover any shortfall. <br/> <br/> 
                INA illustrates the figures in easy-to-view graphs. <br/> <br/> 
                INA can also be used for Single Family and their temporary insurance needs.</span>

            </div>),
    EP:'EP',
    EB:'EB',
    IFYWL:'IFYWL',
    LIFO:'LIFO',
    CA: 'CA',
    BR: 'BR',
    IR: 'IR',
    CSW: 'CSW'
  },
  fr: {
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
}
