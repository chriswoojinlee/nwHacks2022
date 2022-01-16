import React from 'react';
import Button from '../components/Button';
import Page from '../pages/Page';
import { warning } from '../pages/data';


function Phish() {
    return(
        <div>
             <Page {...warning}/>

        </div>
    )

}

export default Phish;