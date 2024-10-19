import React, { useState, useEffect } from 'react';

const App = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [teamName, setTeamName] = useState('');
    const [team, setTeam] = useState(null);

    // Mock player data
    useEffect(() => {
        const mockPlayers = [
            { _id: 1, name: 'Player 1', role: 'Batsman', points: 50 },
            { _id: 2, name: 'Player 2', role: 'Bowler', points: 70 },
            { _id: 3, name: 'Player 3', role: 'All-rounder', points: 60 },
            { _id: 4, name: 'Player 4', role: 'Batsman', points: 40 },
            { _id: 5, name: 'Player 5', role: 'Bowler', points: 90 },
        ];
        setPlayers(mockPlayers);
    }, []);

    const addPlayerToTeam = (player) => {
        if (selectedPlayers.length < 11 && !selectedPlayers.includes(player)) {
            setSelectedPlayers([...selectedPlayers, player]);
        }
    };

    const createTeam = () => {
        const totalPoints = selectedPlayers.reduce((sum, player) => sum + player.points, 0);
        const newTeam = {
            name: teamName,
            players: selectedPlayers,
            totalPoints: totalPoints,
        };
        setTeam(newTeam);
    };

    return (
        <div>
            <h1>Create Fantasy Team</h1>
            <input
                type="text"
                placeholder="Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
            />
            <div>
                <h2>Available Players</h2>
                <ul>
                    {players.map(player => (
                        <li key={player._id}>
                            {player.name} ({player.role}) - {player.points} pts
                            <button onClick={() => addPlayerToTeam(player)}>Add</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Your Team</h2>
                <ul>
                    {selectedPlayers.map(player => (
                        <li key={player._id}>{player.name} - {player.points} pts</li>
                    ))}
                </ul>
                <button onClick={createTeam}>Create Team</button>
            </div>
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
    );
};

export default App;
