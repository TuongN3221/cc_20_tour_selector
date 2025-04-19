import React, { useState, useEffect } from "react";
import DestinationSelector from "./components/DestinationSelector";

const App = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState("");

    const fetchTours = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setTours(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    const handleRemoveTour = (id) => {
        setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
    };

    const handleRefresh = () => {
        fetchTours();
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div>
            <h1>Tours</h1>
            {tours.length === 0 ? (
                <div className="no-tours">
                    {/* No tours left, show a message and refresh button */}
                    {/* Refresh button will only show up once all tours have been exhausted*/}
                    <p>No tours left. Refresh to reload.</p>
                    <button onClick={handleRefresh} className="refresh-btn">
                        Refresh List
                    </button>
                </div>
            ) : (
                <DestinationSelector
                tours={tours}
                    onSelectDestination={(destination) => {
                        setFilter(destination);
                    }}
                    onRemove={handleRemoveTour}
                />
            )}
        </div>
    );
};

export default App;