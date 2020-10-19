import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {} from '@material-ui/core';
class Contact extends Component{
    render(){
        return(
            <div className='contact-body'>
                <h1>Contact Me</h1>
                <div><h4 className='info'>Feel free to contact me on any of the methods below....Let's Talk</h4></div>
                <Grid className='contact-grid'>
                    <Cell col={4} tablet={12}>
                        <a href="tel:+16044451684"><i className='icons' class="fa fa-phone" aria-hidden="true"></i></a>
                        <div><a href="tel:+16044451684"><p className='pieces' style={{fontWeight:'bolder', fontSize:'20px'}}>+1(604)-445-1684</p></a></div>
                    </Cell>
                    <Cell col={4} tablet={12}>
                        <a href="mailto:suara373@gmail.com"><i className='icons' class="fa fa-envelope" aria-hidden="true"></i></a>
                        <div><a href="mailto:suara373@gmail.com"><p className='pieces' style={{fontWeight:'bolder', fontSize:'20px'}}>Email</p></a></div>
                    </Cell>
                    <Cell col={4} tablet={12}>
                        <a href="https://www.instagram.com/_mohammedsuara/?hl=en"><i className='icons' class="fa fa-instagram" aria-hidden="true"></i></a>
                        <div>
                            <a href="https://www.instagram.com/_mohammedsuara/?hl=en"><p className='pieces' style={{fontWeight:'bolder', fontSize:'20px'}}>Instagram</p></a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;