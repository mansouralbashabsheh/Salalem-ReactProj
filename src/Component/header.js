import React from 'react';
import Logo from '../images/logo.png'

const Header = () =>{
  return(
    <header>
      <div className="container top-menu">
            <div className="clearfix">
                <div className="float-left wow bounce">
                    <img src={Logo} />
                </div>
                <div className="float-right">
                    <div className="menu-toggle">

                    
                        <div className="hamburger hamburger--3dx">
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                

              
                </div>

          
            </div>
       

        </div>

</header>
  )

 
}

export default Header;