import React from 'react'
import './Header.scss'
import {useState, useEffect, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBattery, faPlus, faSignal, faWifi } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../../Contexts/ThemeContext'




function Header() {
    const {users, theme, dispatch} = useContext(ThemeContext);
    const [currentTime, setCurrentTime]= useState("")
    

    useEffect(()=> {
        const interval = setInterval(()=>{
            const data = new Date();
            const time = data.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})
            setCurrentTime(time)
        }, 1000)
        return ()=> {
            clearInterval(interval)
        }

    }, [])
  return (
    <header className={`d-flex justify-content-between py-2 px-2 ${theme}`}>
        <span>{currentTime}</span>
        <div className='right'>
        <FontAwesomeIcon icon={faSignal} />
        <FontAwesomeIcon icon={faWifi}/>
        <FontAwesomeIcon icon={faBattery}/>
        </div>
    </header>
  )
}

export default React.memo(Header)