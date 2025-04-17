import React, { useState } from "react";

const DestinationSelector = ({ tours, onSelectDestination, onRemove }) => {
    const [selectedTourId, setSelectedTourId] = useState("");

    const handleSelectChange = (e) => {
        const selectedId = e.target.value;
        setSelectedTourId(selectedId);
        onSelectDestination(selectedId);
    };

    const selectedTour = tours.find((tour) => tour.id === selectedTourId);

    return (
        <div className="destination-selector">
            <select onChange={handleSelectChange} value={selectedTourId}>
                <option value="">Select a Tour</option>
                {tours.map((tour) => (
                    <option key={tour.id} value={tour.id}>
                        {tour.name}
                    </option>
                ))}
            </select>

            {selectedTour && (
                <div className="tour-detail">
                    <h3>{selectedTour.name}</h3>
                    <p>{selectedTour.info}</p>
                    <img
                        src={selectedTour.image}
                        alt={selectedTour.name}
                        className="tour-image"
                    />
                    <h4>Price: ${selectedTour.price}</h4>
                    <button
                        className="remove-btn"
                        onClick={() => onRemove(selectedTour.id)}
                    >
                        Not Interested
                    </button>
                </div>
            )}
        </div>
    );
};

export default DestinationSelector;