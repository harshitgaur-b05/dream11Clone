
export default function SelectedTeam  ({ selectedPlayers, createTeam })  {
    return (
        <div>
            <h2>Your Team</h2>
            <ul>
                {selectedPlayers.map(player => (
                    <li key={player._id}>{player.name} - {player.points} pts</li>
                ))}
            </ul>
            <button onClick={createTeam}>Create Team</button>
        </div>
    );
} 