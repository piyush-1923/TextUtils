import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === "dark")
    {
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
    else
      {
        setMode("dark");
        document.body.style.backgroundColor="#050239";
        showAlert("Dark mode has been enabled", "success");
        document.title = "TextUtils - Dark Mode";
      }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
          <About/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the Text" mode={mode}/>
          </Route>
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
