import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useState } from "react"
import "./image-slider.css"

export const ImageSlider = ( { imageURLs } ) => {

    const [imageIndex, setImageIndex] = useState(0);

    const showPrevImage = () => {
        setImageIndex(index => {
            if ( index === 0 ) return imageURLs.length - 1;
            return index - 1;
        })
    }

    const showNextImage = () => {
        setImageIndex(index => {
            if ( index === imageURLs.length - 1 ) return 0;
            return index + 1;
        })
    }


    return (
        <div className="upper-slider-container" >
            <div className="slider-container" >
                {imageURLs.map(url => (
                    <img key= { url } src={ url } className="img-slider-img" style={{
                        translate: `${-100 * imageIndex}%` }}
                    />
                ))}
            </div>


            <button onClick = { showPrevImage }  className="img-slider-btn" style={ { left: 0 } }>
                <ArrowBigLeft />
            </button>

            <button onClick = { showNextImage } className="img-slider-btn" style={ { right: 0 } }>
                <ArrowBigRight />
            </button>

        </div>
    )
}
