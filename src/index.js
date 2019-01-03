import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Pomodoro from '/home/jeff/git_workspace/JeffAbney/src/components/pomoApp.js';
import DrumMachine from '/home/jeff/git_workspace/JeffAbney/src/components/projects/drum_machine/drumMachine.js';
import './myStyles.scss';



class App extends React.Component {

  state = {
    Navbar: null,
    Hero: null,
    Projects: null,
    About: null,
    Contact: null,
    Footer: null
  };

  componentDidMount() {
    import(/* webpackChunkName: 'Navbar' */ './components/nav.js').then(Navbar => {
      this.setState({ Navbar: Navbar.default})
    });
    import(/* webpackChunkName: 'Hero' */ './components/hero.js').then(Hero => {
      this.setState({ Hero: Hero.default})
    });
    import(/* webpackChunkName: 'Projects' */ './components/projects.js').then(Projects => {
      this.setState({ Projects: Projects.default})
    });
    import(/* webpackChunkName: 'Footer' */ './components/footer.js').then(Footer => {
      this.setState({ Footer: Footer.default})
    });
    import(/* webpackChunkName: 'About' */ './components/about.js').then(About => {
      this.setState({ About: About.default})
    });
    import(/* webpackChunkName: 'Contact' */ './components/contact.js').then(Contact => {
      this.setState({ Contact: Contact.default})
    });

  }
  

  render() {
    const { Navbar, Hero, Projects, About, Contact, Footer } = this.state;

    return (
      <Router>
        <Route exact={true} path="/" render={() =>(
          <div className="app">
            {Navbar ? <Navbar/> : <p>Loading...</p>}
            {Hero ? <Hero/> : <p>Loading...</p>}
            {About ? <About/> : <p>Loading...</p>}
            {Projects ? <Projects/> : <p>Loading...</p>}
            {Contact ? <Contact/> : <p>Loading...</p>}
            {Footer ? <Footer/> : <p>Loading...</p>}
          </div>
        )}/>
        
        <Route exact={true} path='/pomodoro'render={() =>(
          <div className="app">
          <Pomodoro/>
          </div>
        )}/>

        <Route exact={true} path='/drumMachine'render={() =>(
          <div className="app drum-machine">
          <DrumMachine/>
          </div>
        )}/>
      </Router>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));