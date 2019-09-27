//Start importing variables ********************************
import React, { Component } from 'react';
import '/home/jeff/git_workspace/JeffAbney/src/app_styles/quote.scss';
import logo from '/home/jeff/git_workspace/JeffAbney/src/static/images/JEFF_ICON.png'

const APIURL = 'https://rqm-api.herokuapp.com';
const tweetUrl = "https://twitter.com/intent/tweet?text=";
let randomNumber = () => Math.floor((Math.random() * 4)) + 1;
//End importing *********************************************


//Start App Component *************************************************

class RandomQuoteMachine extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colorCount: randomNumber(),
      quoteCount: "",
      data: [],
      quote: "Your quote is loading",
      author: "Random Quote Machine",
      btnDisabled: true,
      ready: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.APIFetch = this.APIFetch.bind(this);
    this.reset = this.reset.bind(this);
  }

  async APIFetch() {
    const response = await fetch(APIURL)
    const data = await response.json();
    this.setState({
        quoteCount: 0,
        cache: data,
        quote: data[0].content,
        author: data[0].author,
        btnDisabled: false,
        ready: true
      })
  }

  reset() {
    this.setState({
      btnDisabled: true,
    })
    this.APIFetch();
  }

  handleClick() {
    this.state.quoteCount === this.state.cache.length - 1 ?
      this.reset()
      :
      this.setState({
        colorCount: Math.floor((Math.random() * 4) + 1),
        quoteCount: this.state.quoteCount + 1,
        quote: this.state.cache[this.state.quoteCount + 1].content,
        author: this.state.cache[this.state.quoteCount + 1].author
      });
  }


  //Start API call****************************************

  componentDidMount() {
    this.APIFetch();
  }
  //End API call*******************************************

  //Start render HTML ****************************************************
  render() {
    const { colorCount } = this.state;

    return (
      <div className={`page color-${colorCount}`}>
        <div className="logo-container">
          <a class-name="logo-link" href="https://jeffabney.com">
            <img src={logo} alt="Jeff Abney logo" className="logo" />
          </a>
        </div>
        <div
          className={"app-container color-" + this.state.colorCount}
          id="quote-box"
        >
          <div className="quote-container">
            <p className="quote-mark quote-mark-start">“</p>
            <div className="text-container">
              {
                this.state.ready ?
                  <p
                    className="quote-text"
                    id="text">{this.state.quote}</p>
                  :
                  <div
                    className="lds-ellipsis"
                  >
                    <div></div><div></div><div></div><div></div>
                  </div>
              }
            </div>

            <p className="quote-mark quote-mark-stop">”</p>
          </div>

          <div className="author-container">
            <p className="author-text" id="author">
              {this.state.author}
            </p>
            <div className="twitter-link-container">
              <div className="twitter-icon">
                <a
                  className="twitter-share-button"
                  id="tweet-quote"
                  href={tweetUrl + this.state.quote + " -" + this.state.author}
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <button
            disabled={this.state.btnDisabled}
            className={"new-quote-btn color-" + this.state.colorCount}
            id="new-quote"
            onClick={this.handleClick}>New Quote</button>
        </div>
        <footer className="credit">
          <p>
            Designed by&nbsp;
            <a
              href="http://daniela-trujillo.com/"
            >Daniela Trujillo
            </a>
            &nbsp;and Developed by&nbsp;
            <a
              href="mailto: jeffmabney@gmail.com"
            >
              Jeff Abney
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default RandomQuoteMachine;


//End App Component **********************************************

