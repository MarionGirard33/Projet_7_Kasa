import { useEffect, useState } from "react";
import previousArrow from '../../assets/previousArrow.svg';
import nextArrow from '../../assets/nextArrow.svg';

function Slideshow({ props }) {
    const [currentImage, updateImage] = useState(0);
    const [mousedOver, setMousedOver] = useState(false);
    const length = props.length;

    const previousImage = () => {
       updateImage(currentImage === 0 ? length - 1 : currentImage - 1)
    };
    const nextImage = () => {
        updateImage(currentImage === length - 1 ? 0 : currentImage + 1)
    };

    useEffect(() => {
        if (!mousedOver) {
            const timer = setInterval(() => {
                updateImage((index) => (index + 1) % length)
            }, 2000);
            return () => clearInterval(timer);
        } else {
            updateImage(currentImage);
        }
    }, [mousedOver, currentImage, length]);

    return (
        <section className="slideshow" onMouseOut={() => setMousedOver(false)} onMouseOver={() => setMousedOver(true)}>
            {props.map((picture, index) => {
                return ( 
                    <div className="image-container" key={`Image-${index}`}>
                        {index === currentImage && (
                            <>
                            <img className="slideshow__image" src={picture} alt='logement' />
                            <p className="slideshow__number" >{`${index+1}/${length}`}</p>
                            </>
                        )}
                    </div>
                )})}
                {length > 1 ? (
                    <>
                        <img className="slideshow__previous-arrow" onClick={previousImage} src={previousArrow} alt='flèche: précédent'/>
                        <img className="slideshow__next-arrow" onClick={nextImage} src={nextArrow} alt='flèche: suivant' />    
                    </>
                ) : null }
        </section>
    )
};

export default Slideshow;