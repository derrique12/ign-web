import React from 'react'
import MainNav from './main-nav'
import SubMenu from './sub-menu'
import logo from '../../assets/logo.png'

var today =  Date();

function Header() {
  return (
    <header>
        <div className="main-content">
            <div className="logo-date">
                <img src={logo} alt="Logo"/>
                <div className="date-setting">
                   <div className="day">Saturday,</div>
                  <div className="month-day">April 16</div> 
                </div>
            </div>
            <MainNav/> 
        </div>
       <SubMenu/>
    </header>
  )
}

export default Header