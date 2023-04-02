import React, { useEffect, useState } from 'react'
import logo from '../images/pu_logo.png'
import styles from "./NavBar.module.css"
import { Link, NavLink } from 'react-router-dom'




function NavBar() {
  const links = [
    {name: "Home", link:"/home"},
    {name: "Campaigns", link:"/campaigns"},
    {name: "About", link:"/about"},
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
        <img className={styles.logo} src={logo} alt="Pledge Up Logo"/> <span style={{color: 'gold', fontSize: '15px'}}>Pledge Up</span>      
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
      <Link to='/login' style={{textDecoration: 'none',color: 'black'}}><span>Log out</span></Link>
      </button>
    </div>
  )
}

export default NavBar