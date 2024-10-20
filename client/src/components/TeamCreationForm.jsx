export default function TeamCreationForm({teamName,setTeamName}){
    return (
        <div>
            <input
                type="text"
                placeholder="Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
            />
        </div>
    );
} 