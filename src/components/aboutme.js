import React, {Component} from 'react';
import{Grid, Cell} from 'react-mdl';
import img2 from '../img/IMG_3601.jpg';

class About extends Component{
    render(){
        return(
            <div className='aboutMe'>
                <Grid>
                    <Cell col={6} tablet={12}>
                        <div className='pic' style={{textAlign:'center'}}>
                            <img src={img2} alt='Mohammed-Yasir Suara' style={{height: '300px'}} />
                        </div>
                        <h2 className='name'>
                            Mohammed-Yasir Suara
                        </h2>
                        <h4>Front-End Web Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                        <h5>Phone</h5>
                        <p> (604)-445-1684</p>
                        <h5>Email</h5>
                        <p>yasir_suara@yahoo.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                    </Cell>

                    <Cell col={6} tablet={12}>
                        <div className='info'>
                            <h2 style={{textTransform:'uppercase'}}>
                                <span>A little about</span>
                                <span> myself</span>
                            </h2>
                            <p className='para'>
                                Hi there, I'm Mohammed-Yasir Suara, a mouthful, I know, everyone calls me Moh; based in Ottawa, ON.
                            </p>
                            <p className='para'>
                                I am a Front-End Web Developer who is pursuing a Bachelor's
                                Degree at <span
                                    ><a href="https://carleton.ca/engineering-design/">
                                     Carleton University</a>
                                    </span>
                                    ; earned my Full Stack Certificate from a coding boot camp in
                                Carleton University.
                            </p>
                            <p className='para'>
                                I am a person who is passionate about web design, improving
                                web accessiblity and the user's experience. I enjoy making web
                                applications and putting them out there to the world.
                            </p>
                            <h4>Skills:</h4>
                            <ul className='list'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>MongoDB</li>
                                <li>NodeJS</li>
                            </ul>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;