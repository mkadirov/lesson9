import React, { useContext } from 'react'
import "./Top.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faMoon, faSearch, faSun, faSunPlantWilt } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../../Contexts/ThemeContext'

function Top() {

   const {users, theme, dispatch} = useContext(ThemeContext);

  return (
    <div className={`top ${theme}`}>
        <div className='top-top d-flex justify-content-between 
                        align-items-center py-2 px-2'>
            <h4>WhatsApp</h4>
            <div className="top-top-right">
                <FontAwesomeIcon icon={faSearch} className='me-3'/>
                <FontAwesomeIcon icon={faMoon} className='btn night ' onClick={() => dispatch({type: 'dark'})}/>
                <FontAwesomeIcon icon={faSun} className='btn day' onClick={() => dispatch({type: 'light'})}/>
            </div>
        </div>

        <div className="top-bottom py-2 pe-3 ps-2" >
            <div className="row">

               {
                  users.map((user) => {
                     if(user.selected) {
                        return  <div className="col col-3">
                        <div className="image-box">
                        <div className="img-top">
                            <img src={user.image} alt="" />
                         </div>
                         <div className="img-bottom">
                            <span>{user.userName}</span>
                         </div>
                      </div>
                     </div>
                     }
                  })
               }
               
            </div>
        </div>
    </div>
  )
}

export default React.memo(Top)