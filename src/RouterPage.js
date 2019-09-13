import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

export const RouterPage = () => {
    return (
        <div>
            Home Page header
            
            <BrowserRouter>
            <div>
                <div>
                    <Link to="/"> homePage </Link>
                    <Link to="/list"> list </Link>
                    <Link to="/list/item/itemId"> item </Link>
                    <Link to="/contacts"> contacts </Link>
                    <Link to="/about"> about </Link>
                    <Link to="/about-new-item"> about new item </Link>
                </div>
                
                <Switch>
                    <Route path="/" exact component={HomePage}></Route>
                    <Route path="/list/" exact component={List}></Route>
                    <Route path="/list/item/:itemId" exact component={Item}></Route>
                    <Route path="/about/" exact component={About}></Route>
                    <Route path="/contacts/" exact component={Contacts}></Route>
                </Switch>
            </div>
                
            </BrowserRouter>    
        </div>
    )
}

const HomePage = () => {
    return (
        <div>
            HomePage
        </div>
    )
}

const List = () => {
    return (
        <div>
            List
        </div>
    )
}

const Item = () => {
    return (
        <div>
            Item
        </div>
    )
}

const About = () => {
    return (
        <div>
            About
        </div>
    )
}

const Contacts = () => {
    return (
        <div>
            Contacts
        </div>
    )
}


