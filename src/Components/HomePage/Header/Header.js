import React from 'react';
import fakedata from "../../Fakedata/fakedata.json"
const Header = () => {

    return (
        <div id="home" style={{ height: '700px' }} className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
            <div className=" col-md-6  col-sm-6 col-12 my-5 py-5 ">
                <h1 className="text-light display-2">Best Blog Site About Retro Tech In Bangladesh</h1>
                <h1 className="text-light  display-6">By Mohammad Eusha </h1>
                <button className="btn btn-secondary btn-lg p-4 text-light  col-md-4 rounded-pill btn-block">Read More</button>
            </div>
            <div className="col-md-6">
                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_h8QgeI.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>

        </div>
    );
};

export default Header;