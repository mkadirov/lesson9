import React, {useContext, useMemo} from 'react'
import './Main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../../Contexts/ThemeContext'

function Main() {
    const {users, theme, dispatch} = useContext(ThemeContext);


    const userList = useMemo(() => {
        return (
            users.map((user, index) => {
                
                if(index !== 0) {
                    return   <div className="col col-12">

                    <div className="user">
                    <div className="img-box">
                        <img src={user.image} alt="" />
                    </div>
                    <div className="info-box">
                        <div className="info-box-top">
                            <spaan className="left">{user.userName}</spaan>
                            <span className="right">{user.time}</span>
                        </div>

                        <div className="info-box-bottom">
                            <FontAwesomeIcon icon={faCheckDouble}/>
                            <span>{user.message}</span>
                        </div>
                    </div>
                    </div>

                </div>
                }
            })
        )
    }, [users])

  return (
    <main className={`py-2 px-2 ${theme}`}>
        <div className=".container">
            <div className="row">
              {userList}
            </div>
        </div>
    </main>
  )
}

export default React.memo(Main)