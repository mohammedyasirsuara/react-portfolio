import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import avatar from '../img/download.png'

class Home extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto', height:'98%'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img 
                        src={avatar}
                        alt='avatar'
                        className='avatar-image'
                        />
                        <div className="banner">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML | CSS | Javascript | Bootstrap | MongoDB | React | NodeJS | MySQL</p>
                            <div className="socials">
                                {/*Linkedn Profile*/}
                            <a href="/" target="_blank" rel="noopener noreferrer" >
                                <i className='fa fa-linkedin-square' aria-hidden="true"></i>
                            </a>

                            {/*github Profile*/}
                            <a href="/" target="_blank" rel="noopener noreferrer" >
                                <i className='fa fa-github-square' aria-hidden="true"></i>
                            </a>
                            
                            {/*twitter Profile*/}
                            <a href="/" target="_blank" rel="noopener noreferrer" >
                                <i className='fa fa-twitter-square' aria-hidden="true"></i>
                            </a>

                            {/*instagram Profile*/}
                            <a href="/" target="_blank" rel="noopener noreferrer" >
                                <i className='fa fa-instagram' aria-hidden="true"></i>
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;