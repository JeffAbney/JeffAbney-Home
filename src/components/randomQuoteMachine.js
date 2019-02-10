//Start importing variables ********************************
import React, { Component } from 'react';
import '/home/jeff/git_workspace/JeffAbney/src/app_styles/quote.scss';
import logo from '/home/jeff/git_workspace/JeffAbney/src/static/images/JEFF_ICON.png'

const APIURL = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40';
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

  APIFetch() {
    let regEx = /\&/gi;
    fetch(APIURL)
      .then(response => response.json())
      .then(data => this.setState({

        quoteCount: 0,
        cache: data.filter((post) => !regEx.test(post.content)),
        quote: data[0].content,
        author: data[0].title,
        btnDisabled: false,
        ready: true
      }))
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
        author: this.state.cache[this.state.quoteCount + 1].title
      });
    console.log(this.state.cache)
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
        <a href="https://jeffabney.com" className="logo-container">
          <img src={logo} alt="Jeff Abney logo" className="logo" />
        </a>
        <div
          className={"grid-container color-" + this.state.colorCount}
          id="quote-box"
        >
          <p className="quote-mark quote-mark-start">“</p>
          <div className="text-container">
            {
              this.state.ready ?
                <p
                  className="quote-text"
                  id="text">{this.state.quote.slice(3, -5).replace("&#8217;", "'")}</p>
                :
                <div
                  className="lds-ellipsis"
                >
                  <div></div><div></div><div></div><div></div>
                </div>
            }


          </div>
          <p className="quote-mark quote-mark-stop">”</p>
          <div className="author-container">
            <p className="auto-text" id="author">
              {this.state.author.replace("&#8217;", "'").replace("&#038;", "&")}
            </p>
          </div>
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

