import React, { useEffect, useState } from 'react'
import logo from '../images/pledge_up_logo.png'
import styles from "./NavBar.module.css"
import { NavLink } from 'react-router-dom'



function NavBar() {
  const links = [
    {name: "Home", link:"/"},
    {name: "Campaigns", link:"/campaigns"},
    { name:'+ Add Campaign', link:"/campaigns/new"}    
  ]

  // displaying black background on scrolling down
  const [blackBG, setBlackBG] = useState(false)

  function changeNavBackground(){
    window.scrollY>100 ? setBlackBG(true) : setBlackBG(false);
  }

  useEffect(()=>{
    window.addEventListener('scroll', changeNavBackground);
    return ()=> window.removeEventListener('scroll',changeNavBackground)//cleanup
  },[])

  return (
    <div className={`${styles.nav} ${blackBG && `${styles.nav_black}`}`}>
      <div className={styles.mainNav}>
        <img className={styles.logo} src={logo} alt="Netflix Logo"/>      
        <ul className={styles.navItems}>
        {
            links.map((link)=>{
              return(<li key={link.name}>
                <NavLink className={styles.Link} to={link.link}>{link.name}</NavLink>
              </li>)
            })
          }
        </ul> 
      </div>
      <button className={styles.home_button}>
        Login
      </button>
    </div>
    // <header>
    //     <h1>Pledge up</h1>
    //     <h2>campaigns</h2>
    //     <button className="home-button">
    //         + add campaign
    //     </button>
    //     <button className="home-button">
    //         Login
    //     </button>
        

    // </header>
  )
}

export default NavBar