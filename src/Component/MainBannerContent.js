import React from 'react';
import HeaderBanner from '../images/header-banner.png'

const MainBannerContent = () =>{
  return(

    <div className="row">
    <div className="col-md-6 pos-relative">
        <div className="content-banner">
            <h1>SALALEM</h1>
            <h6>Elevating your employees’ knowledge and expertise</h6>
            <br /><br />
            <p>We innovate e-solutions to take your learning experience to the next level</p>
            <div className="actions-content wow bounceIn">
                <div className="btn btn-outline-dark"> Salalem Banking</div>
                <div className="btn btn-outline-dark"> All Industries</div>
            </div>

        </div>

    </div>
    <div className="col-md-6">
        <div className="container-banner wow slideInRight">
            <img src={HeaderBanner} />

        </div>
        <div className="menu-humburger pull-right">
            <ul className="items">
                <li><a href="#">Salalem Banking</a></li>
                <li><a href="#">All Industries</a></li>
                <li><a href="#">Our Process</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>

    </div>

</div>

)

 
}

export default MainBannerContent;