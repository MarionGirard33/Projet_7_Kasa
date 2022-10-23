import { useState } from "react";
import styled from 'styled-components'
import previousArrow from '../../assets/previousArrow.svg'
import nextArrow from '../../assets/nextArrow.svg'

const SlideshowContainer = styled.section`
    height: 415px;
    width: 100%;
    margin-bottom: 30px;
    position: relative;
    @media screen and (max-width: 768px) {
        margin-bottom: 15px;
        height: 255px;
    }
`

const ImageContainer = styled.div``

const HouseImage = styled.img`
    height: 415px;
    width: 100%;
    border-radius: 25px;
    object-fit: cover;
    @media screen and (max-width: 768px) {
        height: 255px;
        border-radius: 10px;
    }
`

const PreviousArrow = styled.img`
    height: 160px;
    width: 100px;
    top: 150px;
    position: absolute;
    &:hover {
        transform: scale(1.03);
    }
    @media screen and (max-width: 768px) {
        height: 60px;
        width: 35px;
        top: 110px;
        &:hover {
            transform: scale(1.1);
        }
    }
`

const NextArrow = styled.img`
    height: 160px;
    width: 100px;
    top: 150px;
    left: 91%;
    position: absolute;
    &:hover {
        transform: scale(1.03);
    }
    @media screen and (max-width: 768px) {
        height: 60px;
        width: 35px;
        top: 110px;
        left: 88%;
        &:hover {
            transform: scale(1.1);
        }
    }
`

const NumberImage = styled.p`
    color: white;
    top: 350px;
    left: 49%;
    position: absolute;
    @media screen and (max-width: 768px) {
        display: none;
`

function Slideshow({ props }) {
    const [currentImage, updateImage] = useState(0)
    const length = props.length
    const previousImage = () => {
       updateImage(currentImage === 0 ? length - 1 : currentImage - 1)
    }
    const nextImage = () => {
        updateImage(currentImage === length - 1 ? 0 : currentImage + 1)
    }

    return (
        <SlideshowContainer>
            {props.map((picture, index) => {
                return ( 
                    <ImageContainer key={`Image-${index}`}>
                        {index === currentImage && (
                            <>
                            <HouseImage src={picture} alt='logement' />
                            <NumberImage >{`${index+1}/${length}`}</NumberImage>
                            </>
                        )}
                    </ImageContainer>
                )})} 
                {length > 1 ? (
                    <>
                        <PreviousArrow onClick={previousImage} src={previousArrow} alt='flèche: précédent'/>
                        <NextArrow onClick={nextImage} src={nextArrow} alt='flèche: suivant' />    
                    </>
                ) : null }
        </SlideshowContainer>
    )
}

export default Slideshow