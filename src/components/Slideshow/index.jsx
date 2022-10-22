import { useState } from "react";
import styled from 'styled-components'
import previousArrow from '../../assets/previousArrow.svg'
import nextArrow from '../../assets/nextArrow.svg'

const SlideshowContainer = styled.section`
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 415px;
    width: 100%;
    @media screen and (max-width: 768px) {
        justify-content: left;
        margin-bottom: 22px;
        height: 111px;
        border-radius: 10px;
    }
`

const ImageContainer = styled.div`
position: relative;
`

const HouseImage = styled.img`
    height: 415px;
    width: 100%;
    border-radius: 25px;
    object-fit: cover;
`

const ArrowImage = styled.img`
z-index: 1;
`

const NumberImage = styled.p`
    position: absolute;

`

function Slideshow({ props }) {
    const [currentImage, updateImage] = useState(0)

    const previousImage = () => {
       updateImage(currentImage === 0 ? props.length - 1 : currentImage - 1)
    }
    const nextImage = () => {
        updateImage(currentImage === props.length - 1 ? 0 : currentImage + 1)
    }

    return (
        <SlideshowContainer>
            {props.length > 1 && <ArrowImage onClick={previousImage} src={previousArrow} alt='flèche: précédent'/>}
            {props.length > 1 && <ArrowImage onClick={nextImage} src={nextArrow} alt='flèche: suivant' />}
            {props.map((picture, index) => {
                return ( index === currentImage ? (
                    <ImageContainer>
                        <HouseImage key={index} src={picture} alt='logement' />
                        <NumberImage key={`image-${index}`}>{`${index+1}/${props.length}`}</NumberImage>
                    </ImageContainer>
                ) : (
                    <img key={index} src={picture} alt='logement' />
                ))
            })}
        </SlideshowContainer>
    )
}

export default Slideshow