import React from 'react';
import Button from '../components/Button';
import Page from '../pages/Page';
import { safe } from '../pages/data';


function Main() {
    return(
        <Page {...safe}/>
    )

}

export default Main;