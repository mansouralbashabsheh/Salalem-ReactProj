
import React from 'react';
import Uniq1 from '../images/uniq1.png'
import Uniq2 from '../images/uniq2.png'
import Uniq3 from '../images/uniq3.png'
const uniqueTraining = () =>{
  return(

    <article className="unique-training-ex">
    <h3 className="text-center">Unique Training Experience</h3>
    <br /> <br />
    <div className="row">
        <div className="col-md-4">
            <div className="item">
                <div className="img-contain wow bounceIn">
                    <img src={Uniq1}/>
                </div>
                <h6>Engaging Courses </h6>
                <p> Interactive animated videos, flexible<br />
                 learning schedule, trackable progress</p>
             </div>

        </div>
        <div className="col-md-4">
            <div className="item">
                <div className="img-contain wow bounceIn">
                    <img src={Uniq2}/>
                </div>
                <h6>Centralized HR Admin Area </h6>
                <p>
                    Full visibility, absolute control, real-time<br />
                     reporting


                </p>
            </div>

        </div>
        <div className="col-md-4">
            <div className="item">
                <div className="img-contain wow bounceIn">
                    <img src={Uniq3} />
                </div>
                <h6>Online Learner Support </h6>
                <p>
                    A dedicated team providing guidance and<br />
                     clarifications to learners when needed

                </p>
            </div>

        </div>

    </div>


</article>

  )

 
}

export default uniqueTraining;

