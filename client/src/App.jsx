import React, { useState, useEffect } from 'react';

import './App.css';
import AvailablePlayers from './components/AvailablePlayers';
import SelectedTeam from './components/SelectedTeam';
import TeamCreationForm from './components/TeamCreationForm';

const App = () => {
    

    return (
        <div>
          <AvailablePlayers/>
          <SelectedTeam/>
          <TeamCreationForm/> 
        </div>
    );
};

export default App;
