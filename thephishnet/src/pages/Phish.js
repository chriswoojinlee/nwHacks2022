import React from 'react';
import Button from '../components/Button';
import Page from '../pages/Page';
import { safe, phish, warning } from '../pages/data';


function Phish() {
    return(
        <div>
            
             <Page {...phish}/>
             <Page {...safe}/>
             <Page {...warning}/>

        </div>
    )

}

export default Phish;