import React from 'react';
import KirkAutoCo from './images/KirkAutoCo_black.png';
import grenadaDental from './images/grenadaDentalLogo.jpg';
import grenadaBadBoys from './images/grenadaBad.png';
import kirkTrucks from './images/kirkTruck.png';
import dk from './images/dkTruckOutfitters.png';
import kirkSun from './images/KirkSunset_blue-01.png';
import sayle from './images/sayle.png';
import caldwell from './images/caldwell-tree-service-01.png';
import kirkToy from './images/KirkToyota_black.png';
import csbLogo from './images/csblogo.png';
import holcombClinic from './images/holcombClinic-01.png';
import bryantFarms from './images/bryantFarmsLogo-01.png';
import nsmc from './images/nsmc-01.png';
import buick from './images/buickGMC.png';
import { Helmet } from 'react-helmet';
import './styles/css/business.css';

class Business extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return (
                <div className="business-page-wrapper">
                    <Helmet>
                        <title>Local Grenada Businesses</title>
                        <link rel="canonical" href="https://www.localgrenada.com/business"/>
                        <meta charSet="utf-8"/>
                        <meta name="description" content="Grenada isn't the biggest city but it still has tons to offer! Whether you are looking for locally raised beef to buying a new tractor Local Grenada has put together businesses that you can trust." />
                    </Helmet>
                    <div className="business-top-container">
                        <h1 className="business-header"> Local Businesses </h1>
                        <div className="business-container">
                            <div className="business-box">
                                <img className="business-partner-logo" src={KirkAutoCo} alt="Kirk Auto Company"/>
                                <iframe src="https://player.vimeo.com/video/365621330" title="Kirk Auto Company Lincoln" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                            </div>
                            <div className="business-box">
                                <img className="business-partner-logo" src={grenadaDental} alt="Grenada Dental Associates" />
                                <iframe title="vimeo-player Grenada Dental Associates January 2019" src="https://player.vimeo.com/video/360892714" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="business-box">
                                <img className="business-partner-logo" src={grenadaBadBoys} alt="Grenada Bad Boys" />
                                <iframe title="vimeo-player Grenada Bad Boys May 2019" src="https://player.vimeo.com/video/358386121" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="business-box">
                                <img className="business-partner-logo" src={kirkTrucks} alt="Kirk Brothers Truck Center" />
                                <iframe title="vimeo-player Kirk Brothers Truck Center Commercial" src="https://player.vimeo.com/video/280412605" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="business-box">
                                <img className="business-partner-logo" src={dk} alt="DK Truck Outfitters" />
                                <iframe title="vimeo-player DK Truck Outfitters" src="https://player.vimeo.com/video/201933562" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="business-box">
                                <img className="business-partner-logo" src={kirkSun} alt="Kirk Brothers Sunset - Chrysler, Dodge, Jeep, Ram" />
                                <iframe src="https://player.vimeo.com/video/366340894" title="vimeo-player Kirk Brothers Sunset - Chrysler, Dodge, Jeep, Ram" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                            </div>
                            <div className="business-box">
                                <img className="business-partner-logo" src={sayle} alt="Sayle Oil Co." />
                                <iframe title="vimeo-player Sayle Oil Co." src="https://player.vimeo.com/video/367032509" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="business-box">
                                <img className="business-partner-logo" id="caldwell-logo" src={caldwell} alt="Caldwell Tree Service" />
                                <iframe title="vimeo-player Caldwell Tree Service" src="https://player.vimeo.com/video/218074020" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="business-box">
                                <img className="business-partner-logo" src={kirkToy} alt="Kirk Brothers Toyota" />
                                <iframe title="vimeo-player Kirk Brothers Toyota" src="https://player.vimeo.com/video/365120789" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="business-box">
                                <img className="business-partner-logo" src={csbLogo} alt="Cleveland State Bank" />
                                <iframe title="vimeo-player Cleveland State Bank Commercial" src="https://player.vimeo.com/video/353666510" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="business-box">
                                <img className="business-partner-logo" src={holcombClinic} alt="The Holcomb Clinic" />
                                <iframe title="vimeo-player The Holcomb Clinic" src="https://player.vimeo.com/video/332325195" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="business-box">
                                <h2 className="business-header2"> The Sports Center </h2>
                                <iframe title="vimeo-player The Sports Center" src="https://player.vimeo.com/video/310375946" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="business-box">
                                <img className="business-partner-logo" id="bryant-farms-logo" src={bryantFarms} alt="Bryant Farms" />
                                <iframe title="vimeo-player Bryant Farms" src="https://player.vimeo.com/video/327348653" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="business-box">
                                <img className="business-partner-logo" id="nsmc-logo" src={nsmc} alt="North Sunflower Medical Clinic" />
                                <iframe title="vimeo-player North Sunflower Medical Clinic" src="https://player.vimeo.com/video/362629595" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="business-box">
                                <h2 className="business-header2"> Winona Tractor & Equipment </h2>
                                <iframe title="vimeo-player Winona Tractor & Equipment" src="https://player.vimeo.com/video/355119368" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="business-box">
                                <img className="business-partner-logo" src={buick} alt="Kirk Brothers Buick Gmc" />
                                <iframe title="vimeo-player Kirk Brothers Buick Gmc" src="https://player.vimeo.com/video/340976866" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Business;