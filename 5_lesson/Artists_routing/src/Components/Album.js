import React from 'react';
import {Composition} from './Composition';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';

export const Album = () => {
    return (
		<div>some data THAT I NEED</div>
        // album.map((item, index) => (
        //     <div key={index}> 
        //         <Link to = {{ pathname : '/artist/:artistid/album/:albumid'}}>
        //             Album: {item.name} 
        //         </Link>
        //         <Route path='/artist/:artistid/album/:albumid' component ={<Composition list={item.compositions}/>}/>

        //         <div>Number of compositions: {item.compositions.length}</div>
                
        //     </div>
        // ))
    )
}