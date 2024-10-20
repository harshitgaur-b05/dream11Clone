export default function AvailablePlayers  ({ players, addPlayerToTeam }) {
    return (
        <div>
            <h2>Available Players</h2>
            <ul>
                {players.map(player => (
                    <li key={player._id}>
                        {player.name} ({player.position}) - {player.points} pts
                        <button onClick={() => addPlayerToTeam(player)}>Add</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}