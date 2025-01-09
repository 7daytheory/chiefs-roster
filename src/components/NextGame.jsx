import { useEffect, useState } from "react";

const NextGame = () => {
    const apiKey = import.meta.env.VITE_SPORTSDATA_KEY;

    useEffect(() => {
        const getCurrentSeason = async () => {
            try {
                // Get current season
                const response = await fetch(`https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Network Response error.');
                }
                const data = await response.json();
                const currentSeason = data;

                // Fetch the next game data from the API
                const fetchNextGame = async () => {
                    const response = await fetch(`https://api.sportsdata.io/v3/nfl/scores/json/Schedules/${currentSeason}?key=${apiKey}`);
                    if (!response.ok) {
                        throw new Error('Network Response error.');
                    }
                    const data = await response.json();
                };

                fetchNextGame();
            } catch (error) {
                console.log("There has been an error." , error);
            }
        };

        getCurrentSeason();
    }, [apiKey]);

    return (
        <div className="flex justify-center w-450px">
            <div className="game-card bg-white p-6 rounded-lg shadow-lg border border-gray-300 text-center">
                <h2 className="text-2xl font-bold mb-4">Next Kansas City Game</h2>
                    <>
                        <p className="text-lg mb-2">vs Other Team</p>
                        <p className="text-gray-700">Date of new game</p>
                    </>
            </div>
        </div>
    );
}

export default NextGame;