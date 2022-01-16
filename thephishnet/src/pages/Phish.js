import React from 'react';
import Button from '../components/Button';
import Page from '../pages/Page';
import { phish} from '../pages/data';


function Phish() {
    return(
        <div>
             <Page {...phish}/>
        </div>
    )

}

export default Phish;