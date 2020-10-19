import React, {Component} from 'react';
//import { MDLComponent } from 'react-mdl';
import './App.css'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from "./components/main";
import {Link} from 'react-router-dom';
import Footer from './components/footer';

class App extends Component{
  render(){
    return (
      <div className="demo-big-content">
      <Layout>
          <Header title={<Link style={{textDecoration: 'none', color: 'white'}} to="/"> My Portfolio</Link>} className="header-color" scroll>
              <Navigation>
                  <Link to="/aboutMe">About Me</Link >
                  <Link to="/projects">Projects</Link >
                  <Link to="/resume">Resume</Link >
                  <Link to="/contact">Contact</Link >
              </Navigation>
          </Header>
          <Drawer style={{background:'whitesmoke'}} title={<Link style={{textDecoration: 'none', color: 'Black'}} to="/">My Portfolio</Link>}>
              <Navigation>
                <Link to="/aboutMe">About Me</Link >
                <Link to="/projects">Projects</Link >
                <Link to="/resume">Resume</Link >
                <Link to="/contact">Contact</Link >
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
          <Footer/>
      </Layout>
  </div>
   );
  }
}

export default App;
