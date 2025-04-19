// Displays tour details: name, info, image, price
//Include a "Not Interested" button to remove the tour from the list
import React, {useState} from "react";

const TourCard = ({ id, name, info, price, image, onRemove}) => {
    const [readMore, setReadMore] = useState(false);

    return (
        // Tour card component to display tour details
        // Includes a "Not Interested" button to remove the tour from the list
        <article className = "tour-card">
            <h3>{ name }</h3>
            <h5>{ info } </h5>
            <img src={ image } alt={ name } className="tour-image" />
            <h4> Price: ${ price }</h4>
            <p>
                {/* Shows full description if readMore is true. Otherwise, slice */}
                { readMore ? info : `${ info.substring(0, 200) }...` }
                <button onClick={() => setReadMore(!readMore)}>
                    {/* Toggles betweeen Read More and Show Less*/}
                    { readMore ? "Show Less" : "Read More" }
                </button>
            </p>
            <button className ="remove-btn" onClick={() => onRemove(id)}>
                Not Interested
            </button>
        </article>
    )

}
export default TourCard