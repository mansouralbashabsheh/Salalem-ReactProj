import React from 'react';
import OurServices from '../images/our-services.png'
import Service2 from '../images/service2.png'
import Service3 from '../images/service3.png'
import Service4 from '../images/service4.png'
const Services = () =>{
  return(
    <article className="our-services">
    <h3 className="text-center">Our Services</h3>
    <section>

        <div className="row">
            <div className="col-md-6 pos-relative">
                <div className="our-services-desc">
                    <h3>Content Development</h3>
                    <p>
                        our content is developed by leading academics<br />
                        and industry expert
                    </p>

                </div>

            </div>
            <div className="col-md-6">
                <div className="our-services-img float-right wow slideInRight">
                    <img src={OurServices} />

                </div>

            </div>

        </div>
    </section>
<section>
    <div className="row">
   
        <div className="col-md-6">
            <div className="our-services-img float-left wow slideInLeft">
                <img src={Service2} />

            </div>

        </div>

        <div className="col-md-6 pos-relative">
            <div className="our-services-desc">
                <h3>Instructional Design</h3>
                <p>
                    Our instructional designers present the content in manner that will
                    <br />
                     transform the way your employees learn to enhance their performance


                </p>

            </div>

        </div>

    </div>
</section>

    <section>

        <div className="row">
            <div className="col-md-6 pos-relative">
                <div className="our-services-desc">
                    <h3>Consulting service</h3>
                    <p>
                        We developed the eNgage methodolgy to support  successful e-learning <br />
                        implementation in your organization


                    </p>

                </div>

            </div>
            <div className="col-md-6">
                <div className="our-services-img float-right wow slideInRight">
                    <img src={Service3} />

                </div>

            </div>

        </div>
    </section>


    <section>
        <div className="row">

            <div className="col-md-6">
                <div className="our-services-img float-left wow slideInLeft">
                    <img src={Service4} />

                </div>

            </div>

            <div className="col-md-6 pos-relative">
                <div className="our-services-desc">
                    <h3>Video Production</h3>
                    <p>
                        Our media team visualizes the learning concepts for the audience through<br />
                         producing videos


                    </p>

                </div>

            </div>

        </div>
    </section>
</article>

  )

 
}

export default Services;