import React from 'react'
import  './MobileNavbar.scss'
import BurgerMenu from "../../../src/images/BurgerMenu.svg?url"
import InfoMenu from "../../../src/images/InfoMenu.svg?url"
import { useState } from 'react'
import MenuCross from "../../../src/images/MenuCross.svg?url";
import { Link } from 'react-router-dom'

const MobileNavbar = ({infoText, setModalPresetVisible}: {infoText: string, setModalPresetVisible: Function}) => {
const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
const [mobileInfoVisible, setMobileInfoVisible] = useState(false)

  return (
    <div className="menu">
      {mobileMenuVisible ?
      <div className="navbarMenuWrapper" onClick={() => setMobileMenuVisible(false)}>
        <div className="navbarMenu" onClick={(e) => e.stopPropagation()}>
          <img src={MenuCross} onClick={() => setMobileMenuVisible(false)} className="closeVector"></img>
          <div className="navbarMenuPresetLink" onClick={() => {setModalPresetVisible(true); setMobileMenuVisible(false)}} >Выбрать инструмент</div>
          <Link to='/frethelper/edit' className="navbarMenuEditLink">Настроить инструмент</Link>
        </div>
      </div>:<></>}

      <img className="menuBurger" onClick={() => setMobileMenuVisible(true)} src={BurgerMenu}></img>
      <span className="navbarProjectName">frethelper</span>
      <img className="menuInfo" onClick={() => setMobileInfoVisible(true)} src={InfoMenu}></img>

      {mobileInfoVisible ?
      <div className="navbarInfoWrapper" onClick={() => setMobileInfoVisible(false)}>
        <div className="navbarInfo" onClick={(e) => e.stopPropagation()}>
          <img src={MenuCross} onClick={() => setMobileInfoVisible(false)} className="closeVector"></img>
          <span className="navbarInfoText">{infoText}</span>
        </div>
      </div>:<></>}

    </div>
    
  )
}

export default MobileNavbar