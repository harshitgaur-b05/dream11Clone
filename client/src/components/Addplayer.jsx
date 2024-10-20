import React, { useState } from "react";
import axios from "axios";
import CardWrapper from "./CardWrapper";
import player from "../assets/Cricket_pitch.jpg";

export default function AddPlayer() {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [team, setTeam] = useState("");
    const [points, setPoints] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents page reload
        try {
            const res = await axios.post("https://dream11clone.onrender.com/players", {
                name: name,
                position: position,
                team: team,
                points: points,
            });
            console.log("Player added successfully:", res.data);
        } catch (error) {
            console.error("Error adding player:", error);
        }
    };

    const isFormValid = () => {
        // Check if any field is empty
        return name !== "" && position !== "" && team !== "" && points !== 0;
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
                backgroundImage: `url(${player})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
            }}
        >
            <CardWrapper>
                <h2>Add a New Player</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>NAME: </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>POSITION: </label>
                        <input
                            type="text"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>TEAM: </label>
                        <input
                            type="text"
                            value={team}
                            onChange={(e) => setTeam(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>POINTS: </label>
                        <br />
                        <input
                            type="number"
                            value={points}
                            onChange={(e) => setPoints(parseInt(e.target.value))}
                            required
                        />
                    </div>
                    <br />
                    <button
                        type="button"
                        onClick={() =>
                            isFormValid()
                                ? handleSubmit() // Call handleSubmit if form is valid
                                : alert("Field is missing")
                        }
                    >
                        Add Player
                    </button>
                </form>
            </CardWrapper>
        </div>
    );
}




