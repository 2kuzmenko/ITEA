import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import Artists from './Artists';
import { Album } from './Album';

const Root = () => {
    return(
		<div>
			<BrowserRouter>        
				<Route path="/" component={Artists}></Route>
				<Route path="/artist" render={()=><Album />}/>
			</BrowserRouter>
		</div>
        
    )
}

// <Artists/>
 

// const Composition = ({tracks}) => {
//     let totalTime = 0;
//     tracks.map(item => {
//         let time = item.duration.split(":");
//         let min = time[0] * 60;
//         totalTime += min + parseInt(time[1], 10);
//         totalTime /= 60;
//     });
                
//     return (
//         <div>{`total time is ${totalTime} min`}</div>
//     )
// }

export default Root;

