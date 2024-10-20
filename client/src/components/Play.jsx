import React, { useState, useEffect } from 'react';
import axios  from 'axios';
import TeamCreationForm from './TeamCreationForm'
import AvailablePlayers from './AvailablePlayers';
import SelectedTeam from './SelectedTeam';


function Play() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [team, setTeam] = useState(null);

  useEffect(() => {
      axios.get('http://localhost:2000/players')
          .then(response => setPlayers(response.data))
          .catch(error => console.log(error));
  }, []);

  const addPlayerToTeam = (player) => {
      if (selectedPlayers.length < 11 && !selectedPlayers.includes(player)) {
          setSelectedPlayers([...selectedPlayers, player]);
      }
  };
  const createTeam = () => {
    axios.post('http://localhost:2000/teams', {
        name: teamName,
        players: selectedPlayers.map(p => p._id)
    }).then(response => {
        setTeam(response.data);
    }).catch(error => console.log(error));
};
  return (
    <div>
            <h1>Create Fantasy Team</h1>
            <TeamCreationForm teamName={teamName} setTeamName={setTeamName} />
            <AvailablePlayers players={players} addPlayerToTeam={addPlayerToTeam} />
            <SelectedTeam selectedPlayers={selectedPlayers} createTeam={createTeam} />
            
            {team && (
                <div>
                    <h2>Team Created: {team.name}</h2>
                    <ul>
                        {team.players.map(player => (
                            <li key={player._id}>{player.name} - {player.points} pts</li>
                        ))}
                    </ul>
                    <p>Total Points: {team.totalPoints}</p>
                </div>
            )}
        </div>
  )
}

export default Play