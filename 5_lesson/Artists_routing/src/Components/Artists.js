import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Album } from './Album';

class Artists extends Component {

    state = {
        data : "",
        isLoaded: false
    }

    componentDidMount = () => {
        this.getList();
    }

    getList = () => {
        fetch("http://www.json-generator.com/api/json/get/cuKKbBWWXm?indent=2")
            .then(res => res.json())
            .then(response => {this.setState({data: response, isLoaded: true})});
    }

    render = () => {
		const {isLoaded} = this.state;
		
        if (isLoaded) {
			return (
				<div>
					{this.state.data.map(item => (
						<div key={item.index}>
							
							<Link to = {{ 
									pathname : `/artist/:artist${item.index}`,
									state : {album: item.album}
								}}
								> {item.name} </Link>					
						</div>    
					))}
				</div>
			)
        }
        return (
            <div>Loading ... </div>
        )
    }
}

export default Artists;


// <Switch>
// 						<Route path="/artist" render={()=><Album />}/>
// 					</Switch>	
// 					{this.state.data.map(item => (
// 						<div key={item.index}>
// 							<Link to = {{ 
// 									pathname : `/artist/:artist${item.index}`,
// 									state : {album: item.album}
// 								}}
// 								> {item.name} </Link>					
// 						</div>    
// 					))}