import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import './App.scss';
import Header from './Components/Header';
import Top from './Components/Top';
import Main from './Components/Main';
import Footer from './Components/Footer';
import ThemeContext from './Contexts/ThemeContext';
import React, {useState, useReducer} from 'react'

import image1 from './Images/Ellipse 6.png'
import image2 from './Images/Ellipse 7.png'
import image3 from './Images/Ellipse 8.png'
import image4 from './Images/Ellipse 9.png'
import image5 from './Images/Ellipse 10.png'
import image6 from './Images/Ellipse 11.png'

const users = [
  {
    image: image1,
    userName: 'My Status',
    message: '',
    time: '3:20 pm',
    selected: true
  },
  {
    image: image2,
    userName: 'Digital',
    message: 'https://drive.google.com/file/d/...',
    time: '3:05 pm',
    selected: true
  },
  {
    image: image3,
    userName: 'Cinemaghar',
    message: 'Photo',
    time: '3:10 pm',
    selected: true
  },
  {
    image: image4,
    userName: 'Abhishek Bro',
    message: 'Ma dami caption ma post garchu hai vai...',
    time: '3:20 pm',
    selected: true
  },
  {
    image: image5,
    userName: 'Sagar Bro',
    message: 'euta ticket ma 18 flim tyo pani barsae vari v...',
    time: '10:03 am',
    selected: false
  },
  {
    image: image6,
    userName: 'Sagar Bro',
    message: 'euta ticket ma 18 flim tyo pani barsae vari v...',
    time: '10:03 am',
    selected: false
  }
  
]

function App() {

  //const [theme, setTheme] = useState("light")

  const initialState = {theme: 'light'}

  const reducer = (state, action) => {
    switch(action.type){
      case 'light': 
        return {...state, theme: 'light'}
      case 'dark' : 
        return {...state, theme: "dark"}
      default:
        return state
    }
  }

  const[state, dispatch] = useReducer(reducer, initialState);

  // function changeMode() {
  //   setTheme(prev => (prev != "dark")? "dark" : "light")
  // }

  return (
    <ThemeContext.Provider value={{users: users, theme: state.theme, dispatch: dispatch}} >
      <div className="App d-flex justify-content-center align-items-center">
      <div className="main-box rounded ">
        <Header/>
        <Top/>
        <div className='mainSection'>
          <Main/>
        </div>
        <Footer/>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
