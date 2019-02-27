import React from 'react';

const Carousel = (props) => {
    return ( 
        <div className="row row-carousel">
           { props.randomImages.map((img, index) => (
               <div className="col" key={index}>
                    <img src={img} alt="what"/>
                </div>
            ))}
           }
        </div>
     );
}
 
export default Carousel;