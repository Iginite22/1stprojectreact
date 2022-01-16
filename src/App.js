import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
    const removeBodyClasses=()=>{
      document.body.classList.remove('bg-success');
      document.body.classList.remove('bg-primary');
      document.body.classList.remove('bg-danger');
      document.body.classList.remove('bg-warning');
    }
   const toggleMode=(cls)=>{
     removeBodyClasses();
     document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#375069';
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='#cddceb';
      showAlert("light mode has been enabled","success")
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="learnReact" home="welcomeHome" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    <div className="container my-3">
        {/* <Switch>
            <Route exact path="/"> */}
              <TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>
              <About/>
            {/* </Route>
            <Route exact path="/about">
            </Route>
        </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
