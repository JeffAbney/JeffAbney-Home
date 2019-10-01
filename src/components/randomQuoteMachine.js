//Start importing and global variables ********************************
import React, { useState, useEffect } from 'react';
import '/home/jeff/git_workspace/JeffAbney/src/app_styles/quote.scss';
import logo from '/home/jeff/git_workspace/JeffAbney/src/static/images/JEFF_ICON.png'

const APIURL = 'https://rqm-api.herokuapp.com';
const tweetUrl = "https://twitter.com/intent/tweet?text=";
let getColorNumber = () => Math.floor((Math.random() * 4)) + 1;
//End importing *********************************************

//Start App with HOOKS *********************************************
function RandomQuoteMachine(props) {
  const [colorCount, setColorCount] = useState(getColorNumber());
  const [quoteNumber, setQuoteNumber] = useState(0);
  const [ready, setReady] = useState(false);

  const [quoteData, setQuoteData] = useState([{ author: 'Random Quote Machine', content: "Loading..." }]);
  const quoteDataFetch = async () => {
    const response = await fetch(APIURL)
    const data = await response.json();
    setQuoteData(data);
    setReady(true);
    console.log("something's going", data)
  };

  useEffect(() => {
    quoteDataFetch();
  }, []);

  const [shareDataReady, setShareDataReady] = useState(false);
  const [shareData, setShareData] = useState(null);
  const shareDataFetch = async () => {
    const response = await fetch(`${APIURL}/shares`);
    const data = await response.json();
    let result =
      data.reduce((c, v) => {
        c[v.quote_id] = c[v.quote_id] || {};
        c[v.quote_id][v.platform] = c[v.quote_id][v.platform] || {};
        c[v.quote_id][v.platform] = v.count;
        return c;
      }, {});

    setShareData(result);
    setShareDataReady(true);
    console.log(result);
  };

  useEffect(() => {
    shareDataFetch();
  }, []);

  const handleClick = () => {
    if (quoteNumber === quoteData.length - 1) {
      reset()
    } else {
      setColorCount(getColorNumber())
      setQuoteNumber(quoteNumber + 1);
    }
  }

  const reset = () => {
    setReady(false);
    setQuoteNumber(0);
    console.log('resetting');
    quoteDataFetch();
  }

  const addShare = async (quote_id) => {

    const id = quote_id;
    const response = await fetch(`${APIURL}/addShare/${id}`)
    const data = await response.json();
    console.log('share added ', data);
    shareDataFetch();
  };

  return (
    <div className={`page color-${colorCount}`}>
      <div className="logo-container">
        <a class-name="logo-link" href="https://jeffabney.com">
          <img src={logo} alt="Jeff Abney logo" className="logo" />
        </a>
      </div>
      <div
        className={"app-container color-" + colorCount}
        id="quote-box"
      >
        <div className="quote-container">
          <p className="quote-mark quote-mark-start">“</p>
          <div className="text-container">
            {
              ready ?
                <p
                  className="quote-text"
                  id="text">{quoteData[quoteNumber].content}</p>
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
            {ready ?
              quoteData[quoteNumber].author
              :
              ""}
          </p>
          <div className="twitter-link-container">
            <div className="twitter-icon">
              <a
                className="twitter-share-button"
                id="tweet-quote"
                href={ready ?
                  tweetUrl + quoteData[quoteNumber].content + " -" + quoteData[quoteNumber].author
                  : 'twitter.com'}
                target="_blank"
                onClick={() => addShare(quoteData[quoteNumber].id)}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <p>
                {function () {
                  if (shareDataReady && shareData[quoteData[quoteNumber].id] !== undefined) {
                    return shareData[quoteData[quoteNumber].id].twitter
                  } else {
                    return "No shares yet"
                  }
                }()}
              </p>
            </div>
          </div>
        </div>

        <button
          disabled={!ready}
          className={"new-quote-btn color-" + colorCount}
          id="new-quote"
          onClick={handleClick}>New Quote</button>
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

export default RandomQuoteMachine;
//End App Component **********************************************

