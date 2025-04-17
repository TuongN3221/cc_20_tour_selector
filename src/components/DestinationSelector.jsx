import React, { usestate } from "react";

const DestinationSelector = ({tours, onSelectDestination}) =>{
    const [selectedDestination, setSelectedDestination] = usestate("");

    const handleDestinationChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedDestination(selectedValue);
        onSelectDestination(selectedValue);
    };

    return (
        <div className="destination-selector">
            <label htmlFor="destination">Select a Destination:</label>
            <select id="destination" value={selectedDestination} onChange={handleDestinationChange}>
                <option value="">All</option>
                {tours.map((tour) => (
                    <option key={tour.id} value={tour.name}>
                        {tour.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DestinationSelector;