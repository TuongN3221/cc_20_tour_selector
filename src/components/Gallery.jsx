import React, {useState, useEffect} from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, setTours, onRemove}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch("https://course-api.com/react-tours-project")
                const data = await response.json();
                setTours(data); // Direct set the fetch tours
                setLoading(false);
            }
            catch(error) {
                setError(error.message);
                console.error("Error Fetching Tours:", error);
            }
        }
        fetchTours();
    }, [setTours])// Dependency array to avoid infinite loop;
};

if (loading) {
    return <div className="loading">Loading...</div>;
}
if (error) {
    return <div className="error">Error: {error}</div>;
}

return (
    <section className="gallery">
        {tours.map((tour) => (
            <TourCard
                key ={tour.id}
                id ={tour.id}
                name = {tour.name}
                info = {tour.info}
                price = {tour.price}
                image = {tour.image}
                onRemove = {onRemove}
            />
        ))}
    </section>
)


export default Gallery;