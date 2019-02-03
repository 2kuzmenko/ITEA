import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';


const Root = () => {
    return(
        <BrowserRouter>        
            <Route path="/" component={Artists}></Route>
        </BrowserRouter>
    )
}

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
                
                    <List dataList={this.state.data}/> 
            )
        }
        return (
            <div>Loading ... </div>
        )
    }
}

const List = ({dataList}) => {
    return(
        dataList.map(item => (
            <div key={item.index}>
                <Link 
                        to = {{ 
                            pathname : `item${item.index}`,
                            state : {album: item.album, id: item.index}
                        }}
                    > {item.name} </Link>
                    <Route path ={`/item${item.index}`} render = {()=> (<Album id={item.index} album={item.album}/ >)}/>   
                                             
            </div>    
        ))
    )
    
};

const Album = ({id, album}) => {
    return (
        album.map((item, index) => (
            <div key={index}> 
                <Link to = {{ pathname : `/item${id}/album${index}`}}>
                    Album: {item.name} 
                </Link>
                <Route path={`/item${id}/album${index}`} render = {()=>(<Compositions list={item.compositions}/>)}/>

                <div>Number of compositions: {item.compositions.length}</div>
                
            </div>
        ))
    )
}

const Compositions = ({list}) => {     
    return (
        list.map( item=>( <div key={item.id}> Song name: {item.name} </div> ))
    )
}


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

