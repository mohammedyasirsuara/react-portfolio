import React, {Component} from 'react';
import { Cell, Tab, Tabs, Grid, Card, CardTitle, CardActions, Button, IconButton, CardMenu, CardText } from 'react-mdl';
import HTML from '../components/projects/html';
import NodeJS from '../components/projects/nodejs';
import Mongo from '../components/projects/mongo';
import SQL from '../components/projects/sql'

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }

    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <HTML/>
            )
        }
        else if(this.state.activeTab===1){
            return (
                <NodeJS/>
            )
        }else if(this.state.activeTab===2){
            return (
                <Mongo/>
            )
        }else if(this.state.activeTab===3){
            return (
                <SQL/>
            )
        }else if(this.state.activeTab===4){
            return (
                <div><h1>This is React</h1></div>
            )
        }
    }

    render(){
        return(
            <div>
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
                        <Tab>HTML/CSS/JS</Tab>
                        <Tab>NodeJS</Tab>
                        <Tab>MongoDB</Tab>
                        <Tab>SQL</Tab>
                        <Tab>React</Tab>
                    </Tabs>
                        <Grid>
                            <Cell col={12} tablet={12}>
                                <div>{this.toggleCategories()};</div>
                            </Cell>
                        </Grid>
                </div>
            </div>
        )
    }
}

export default Projects;