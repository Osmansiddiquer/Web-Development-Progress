import { useState, ChangeEvent } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/Navbar'
import DismissingAlert from './components/DismissingAlert';
// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faItalic, faBold, faVolumeHigh, faClipboard } from '@fortawesome/free-solid-svg-icons'

import { AlertState, AlertType, ThemeColors } from './interfaces'

import logo from './logo.svg'
import logoDark from './logo-dark.svg'

import {
  Routes,
  Route,
} from "react-router-dom";

import Home from './views/Home';
import About from './views/About'
import Error from './views/Error'

library.add(fab, faItalic, faBold, faVolumeHigh, faClipboard)


function App() {

  // Boolean(someString) where someString isn't empty always returns true. See the line below on how to parse it
  const [isDark, setIsDark] = useState(localStorage.getItem('dark-mode-enabled') === 'true');
  // state must be set using the set* function provided.
  const [color, setColor] = useState(((localStorage.getItem('color-theme') === null) ? 'blue' : localStorage.getItem('color-theme')) as ThemeColors);
  const [alert, setAlert] = useState({ type: 'primary', msg: '' } as AlertState)

  function toggleDark(e: ChangeEvent) {
    setIsDark(s => !s); //note: this is asynchronous
    localStorage.setItem('dark-mode-enabled', String(!isDark));
    console.log(localStorage.getItem('dark-mode-enabled'));
  }

  function showAlert(msg: string, type: AlertType) {
    setAlert({
      type: type,
      msg: msg,
      active: true
    });

    setTimeout(() => {
      setAlert({ type: type, msg: msg, active: false });
    }, 1000)
  }

  function changeColor(color: ThemeColors) {
    setColor(color)
    localStorage.setItem('color-theme', color);
  }

  return (
    <div className={["App", isDark && 'dark', 'pb-3'].join(' ')} data-bs-theme={isDark && "dark"} data-color-theme={color}>
      <Navbar logo={isDark ? logoDark : logo} title='Text-Utility' toggleMode={toggleDark} toggleState={isDark} changeColor={changeColor} currentColor={color} />
      <DismissingAlert type={alert.type} msg={alert.msg} active={alert.active} />
      <Routes>
        <Route path="/" element={<Home showAlert={showAlert} />} />
        <Route path="/about" element={<About />} />
        {/* Show for all URLS */}
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;