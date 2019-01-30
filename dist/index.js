import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './myStyles.scss';



class App extends React.Component {

  state = {
    Navbar: null,
    Hero: null,
    Projects: null,
    About: null,
    Contact: null,
    Footer: null,
    Pomodoro: null,
    DrumMachine: null,
    RandomQuoteMachine: null,
    Calculator: null
  };

  componentDidMount() {
    import(/* webpackChunkName: 'Navbar' */ './components/nav.js').then(Navbar => {
      this.setState({ Navbar: Navbar.default })
    });
    import(/* webpackChunkName: 'Hero' */ './components/hero.js').then(Hero => {
      this.setState({ Hero: Hero.default })
    });
    import(/* webpackChunkName: 'Projects' */ './components/projects.js').then(Projects => {
      this.setState({ Projects: Projects.default })
    });
    import(/* webpackChunkName: 'Footer' */ './components/footer.js').then(Footer => {
      this.setState({ Footer: Footer.default })
    });
    import(/* webpackChunkName: 'About' */ './components/about.js').then(About => {
      this.setState({ About: About.default })
    });
    import(/* webpackChunkName: 'Contact' */ './components/contact.js').then(Contact => {
      this.setState({ Contact: Contact.default })
    });
    import(/* webpackChunkName: 'Pomodoro' */ './components/pomoApp.js').then(Pomodoro => {
      this.setState({ Pomodoro: Pomodoro.default })
    });
    import(/* webpackChunkName: 'DrumMachine' */ './components/drumMachine.js').then(DrumMachine => {
      this.setState({ DrumMachine: DrumMachine.default })
    });
    import(/* webpackChunkName: 'RandomQuoteMachine' */ './components/randomQuoteMachine.js').then(RandomQuoteMachine => {
      this.setState({ RandomQuoteMachine: RandomQuoteMachine.default })
    });
    import(/* webpackChunkName: 'Calculator' */ './components/calculator.js').then(Calculator => {
      this.setState({ Calculator: Calculator.default })
    });
  }


  render() {
    const { Navbar, Hero, Projects, About, Contact, Footer, Pomodoro, RandomQuoteMachine, Calculator } = this.state;

    return (
      <Router>
        <Route exact={true} path="/" render={() => (
          <div className="app">
            {Navbar ? <Navbar /> : <p>Loading...</p>}
            {Hero ? <Hero /> : <p>Loading...</p>}
            {About ? <About /> : <p>Loading...</p>}
            {Projects ? <Projects /> : <p>Loading...</p>}
            {Contact ? <Contact /> : <p>Loading...</p>}
            {Footer ? <Footer /> : <p>Loading...</p>}
          </div>
        )} />

        <Route exact={true} path='/pomodoro' render={() => (
          <div className="app pomodoro">
            <Pomodoro />
          </div>
        )} />

        <Route exact={true} path='/drumMachine' render={() => (
          <div className="app drum-machine">
            <DrumMachine />
          </div>
        )} />

        <Route exact={true} path='/randomQuote' render={() => (
          <div className="app quote-machine">
            <RandomQuoteMachine />
          </div>
        )} />

        <Route exact={true} path='/calculator' render={() => (
          <div className="app calculator-app">
            <Calculator />
          </div>
        )} />
      </Router>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));