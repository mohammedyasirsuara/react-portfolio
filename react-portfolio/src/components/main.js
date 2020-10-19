import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import AboutMe from './aboutme'
import Contact from './contact'
import Projects from './projects'
import Resume from './resume'

function Main(){
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/aboutMe' component={AboutMe}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/resume' component={Resume}/>
        </Switch>
    ); 
}

export default Main;