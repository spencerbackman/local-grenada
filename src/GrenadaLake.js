import React from 'react';
import './styles/css/grenadaLake.css';
import lakePic from './images/grenadaLake.jpg';
import picnicPic from './images/GrenadaPicnic.png';
import { Helmet } from 'react-helmet';

class GrenadaLake extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div className="lake-page-wrapper">
                <Helmet>
                    <title> Grenada Lake ~ Local Grenada </title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Grenada Lake is one of the best things Grenada has to offer. With great Crappie fishing, boating, beaches, and camping you'll find it hard to pass up a day at Grenada Lake." />
                    <link rel="canonical" href="https://www.localgrenada.com"/>
                </Helmet>
                <div className="lake-header-container">
                    <h1 className="lake-header"> Grenada Lake </h1>
                    <img className="lake-picture" src={lakePic} alt="Grenada Lake"/>
                </div>
                <div className="lake-about-wrapper">
                    <p className="lake-par">
                        Grenada Lake, the largest lake in Mississippi, is the go-to place for Crappie fishing. With a dam that is 80 feet deep and 13,900 feet-long there is plenty of opportunity to catch a trophy-sized fish.
                    </p>
                    <p className="lake-par">
                        Don’t worry if you aren’t into fishing though. Grenada Lake has picnic areas, boat ramps and beaches to keep the non-fisherman busy during the day. With over 300 campsites, you and the whole family will have plenty of space to relax, start a fire and run around. Whether you prefer to camp or lodge in a cabin, Grenada Lake has a variety of both.
                    </p>
                    <div className="lake-row">
                    <iframe className="lake-video" title="vimeo-player Grenada Lake is getting high" src="https://player.vimeo.com/video/332499091" frameBorder="0" allowFullScreen></iframe>
                    <img className="lake-picture" src={picnicPic} alt="Grenada Lake Picnic Table - Grenada Mississippi" />
                    </div>
                </div>
            </div>
        )
    }
}

export default GrenadaLake;