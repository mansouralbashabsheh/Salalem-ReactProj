import React from 'react';
import Salalem1 from '../images/salalem1.png'
import Salalem2 from '../images/salalem2.png'
import Salalem3 from '../images/salalem3.png'

const WhyChoseSalalem = () =>{
  return(

    <article className="who-chose-salalem">
    <h3 className="text-center">Why Choose Salalem</h3>
    <div className="row">
        <div className="col-md-4">
            <div className="item">
                <div className="img-contain wow bounceIn">
                    <img src={Salalem1}/>

                </div>
                <p>Low-cost and time-efficient training <br />
                programs</p>

            </div>

        </div>
        <div className="col-md-4">
            <div className="item">
                <div className="img-contain wow bounceIn">
                    <img src={Salalem2} />

                </div>
                <p>Enriching and effective learning <br />
                experience</p>

            </div>

        </div>
        <div className="col-md-4">
            <div className="item">
                <div className="img-contain wow bounceIn">
                    <img src={Salalem3} />

                </div>
                <p>Cutting edge technology and smooth 
                <br />user experience</p>

            </div>

        </div>

    </div>
</article>


)

 
}

export default WhyChoseSalalem;