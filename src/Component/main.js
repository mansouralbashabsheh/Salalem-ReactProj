import React from 'react';
import Services from '../Component/services'
import Unique from '../Component/uniqueTraining'
import WhyChoseSalalem from '../Component/WhyChoseSalalem'
import WeWorkWith from '../Component/WeWorkWith'
import MainBanner from '../Component/MainBannerContent'






const Main = () =>{
   return(
 
    <main>
          <div className="container">
        

           <MainBanner/>
  
            <WeWorkWith />
          <Services />
           <Unique />
           <WhyChoseSalalem />



          </div>
  
    </main>
   )


  
}

export default Main;