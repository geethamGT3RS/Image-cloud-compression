import React from 'react';
import './App.css';
import Drive from './components/Drive' ;
import Auth from './components/Auth';
import {Routes,Route} from 'react-router-dom' ;
import app from './firebaseConfig'

function App() {
    return ( 
      <div className = "App" >
        <Routes>
          <Route path="" element={<Auth />}/>
          <Route path="/drive/:id" element={<Drive />}/>
        </Routes>
      </div>
    );
}

export default App;