import React from 'react'
import  './MobileNavbar.scss'
import BurgerMenu from "../../../src/images/BurgerMenu.svg?url"
import InfoMenu from "../../../src/images/InfoMenu.svg?url"
import { useState } from 'react'
import MenuCross from "../../../src/images/MenuCross.svg?url";
import { Link } from 'react-router-dom'

const MobileNavbar = ({setModalPresetVisible}: {setModalPresetVisible: Function}) => {
const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
const [mobileInfoVisible, setMobileInfoVisible] = useState(false)

  return (
    <div className="menu">
      {mobileMenuVisible ?
      <div className="navbarMenuWrapper" onClick={() => setMobileMenuVisible(false)}>
        <div className="navbarMenu" onClick={(e) => e.stopPropagation()}>
          <img src={MenuCross} onClick={() => setMobileMenuVisible(false)} className="closeVector"></img>
          <Link to='/edit' className="navbarMenuEditLink">Настроить инструмент</Link>
          <div className="navbarMenuPresetLink" onClick={() => {setModalPresetVisible(true); setMobileMenuVisible(false)}} >Выбрать инструмент</div>
        </div>
      </div>:<></>}

      <img className="menuBurger" onClick={() => setMobileMenuVisible(true)} src={BurgerMenu}></img>
      <img className="menuInfo" onClick={() => setMobileInfoVisible(true)} src={InfoMenu}></img>

      {mobileInfoVisible ?
      <div className="navbarInfoWrapper" onClick={() => setMobileInfoVisible(false)}>
        <div className="navbarInfo" onClick={(e) => e.stopPropagation()}>
          <img src={MenuCross} onClick={() => setMobileInfoVisible(false)} className="closeVector"></img>
          <span className="navbarInfoText">-Для изменения строя или количества струн нажмите “Настроить инструмент”<br/>
                -Для смены пресета инструмента нажмите “Сменить инструмент”</span>
        </div>
      </div>:<></>}

    </div>
    
  )
}

export default MobileNavbar