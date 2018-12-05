import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pomodoro from '/home/jeff/git_workspace/JeffAbney/src/components/pomoApp.js';
import './myStyles.scss';



class App extends React.Component {

  state = {
    Navbar: null,
    Hero: null,
    Projects: null,
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

  }
  

  render() {
    const { Navbar, Hero, Projects, Footer } = this.state;

    return (
      <div className="app">
      {Navbar ? <Navbar/> : <p>Loading...</p>}
      {Hero ? <Hero/> : <p>Loading...</p>}
      {Projects ? <Projects/> : <p>Loading...</p>}
      <Pomodoro />
      {Footer ? <Footer/> : <p>Loading...</p>}
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));