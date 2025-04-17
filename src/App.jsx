import React, {useState, useEffect} from "react";

const App = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch("https://course-api.com/react-tours-project");
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
        fetchTours();
    }, []);
    return (
        <div>
            <h1>Tours</h1>
            {/* Pass the tours, loading, error, filter, and setFilter to the child component */}
            <ChildComponent
                tours={tours}
                loading={loading}
                error={error}
                filter={filter}
                setFilter={setFilter}
            />
        </div>
    )
}

// Child component to display tours
// This component will receive the tours, loading, error, and filter props
const ChildComponent = ({tours, loading, error, filter, setFilter}) => {
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: {error}</p>
    }
    const filteredTours = tours.filter((tours) => {
        tours.name.toLowerCase().includes(filter.toLowerCase)
    });
    return (
        <div>
            {/* Filter input */}
            <input
                type="text"
                placeholder="Filter tours"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul>
                {filteredTours.map((tour) => (
                    <li key={tour.id}>{tour.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;