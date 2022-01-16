import React from 'react';
import Button from '../components/Button';
import Page from '../pages/Page';
import { safe } from '../pages/data';


function Phish() {
    return(
        <div>
             <Page {...safe}/>
        </div>
    )

}

export default Phish;