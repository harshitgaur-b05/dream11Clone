import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import AvailablePlayers from './components/AvailablePlayers.jsx';
import SelectedTeam from './components/SelectedTeam.jsx';
import TeamCreationForm from './components/TeamCreationForm.jsx';
import Home from './components/Home.jsx'
import AddPlayer from './components/Addplayer.jsx';
import Play from './components/Play.jsx';

const App = () => {
    
    

    return (
        <>
        
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/AvailablePlayers' element={<AvailablePlayers/>}/>
                <Route path='/SelectedTeam' element={<SelectedTeam/>}/>
                <Route path='/TeamCreationForm' element={<TeamCreationForm/>}/>
                <Route path='/AddPlayer' element={<AddPlayer/>}/>
                <Route path='/Play' element={<Play/>}/>
            </Routes>
          </BrowserRouter>
         
        </>
            
          
        
    );
};

export default App;
