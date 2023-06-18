import React, { useContext } from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactCard, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import ThemeContext from '../../Contexts/ThemeContext';

function Footer() {
  const { users, theme, changeMode } = useContext(ThemeContext);

  return (
    <footer className={`foot ${theme}`}>
      <div className="container">
        <div className="row">
          <div className="col col-4 nav">
            <FontAwesomeIcon icon={faMessage} />
            <span className="text-center">Chat</span>
          </div>
          <div className="col col-4 nav">
            <FontAwesomeIcon icon={faPhone} />
            <span className="text-center">Calls</span>
          </div>
          <div className="col col-4 nav">
            <FontAwesomeIcon icon={faContactCard} />
            <span className="text-center">Contacts</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
