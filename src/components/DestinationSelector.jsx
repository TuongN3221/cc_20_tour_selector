import React, { useState } from "react";

const DestinationSelector = ({ tours, onSelectDestination, onRemove }) => {
    const [selectedTourId, setSelectedTourId] = useState("");

    const handleSelectChange = (e) => {
        const selectedId = e.target.value;
        setSelectedTourId(selectedId);
        onSelectDestination(selectedId);
    };
    /// Finding the selected tour based on the selectedTourId
    /// This will be used to display the details of the selected tour
    const selectedTour = tours.find((tour) => tour.id === selectedTourId);

    return (
        /// Destination selector component to select a tour from the dropdown
        /// Displays the selected tour details and a "Not Interested" button
        <div className="destination-selector">
            <select onChange={handleSelectChange} value={selectedTourId}>
                <option value="">Select a Tour</option>
                {tours.map((tour) => (
                    <option key={tour.id} value={tour.id}>
                        {tour.name}
                    </option>
                ))}
            </select>
            {/* Displaying the selected tour details */}
            {/* If a tour is selected, show its details */}
            {selectedTour && (
                <div className="tour-detail">
                    {/* Displaying the selected tour details */}
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