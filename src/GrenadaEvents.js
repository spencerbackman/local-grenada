import React from 'react';
import { Helmet } from 'react-helmet';

class GrenadaEvents extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div className="tv-page-wrapper">
                <Helmet>
                    <title> Grenada Events ~ Local Grenada </title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Find out about upcoming events and past events that are likely to come again if you missed them!" />
                    <link rel="canonical" href="https://www.localgrenada.com/grenada-events"/>
                </Helmet>
                <div id="tv-top-anchor" style={{position: 'absolute', top: 0, left: 0}}></div>
                <div className="tv-top-container">
                    <h1 className="tv-header"> Grenada Events </h1>
                    <iframe title="Local Grenada - Upcoming Event - Fox Hunt" src="https://player.vimeo.com/video/350843530" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="tv-mid-container">
                    <h2 className="tv-header2"> Missed an Episode? </h2>
                    <a className="tv-video-link"  href="https://vimeo.com/306552300" target="_blank" rel="noopener noreferrer"> Grenada Elementary Musical </a>
                    <a className="tv-video-link" href="https://vimeo.com/337607858" target="_blank" rel="noopener noreferrer"> Thunder on Water </a>
                </div>
            </div>
        )
    }
}

export default GrenadaEvents;