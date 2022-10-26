import { useEffect, useState } from "react";
import styled from 'styled-components'
import previousArrow from '../../assets/previousArrow.svg'
import nextArrow from '../../assets/nextArrow.svg'

const SlideshowContainer = styled.section`
    height: 415px;
    width: 100%;
    margin-bottom: 30px;
    position: relative;
    &:hover {
        transform: scale(1.01);
    }
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
    right: 0;
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

const NumberImage = styled.p`
    color: white;
    top: 350px;
    left: 49%;
    position: absolute;
    font-weight: 600;
    padding: 2px 10px 2px 10px;
    @media screen and (max-width: 768px) {
        display: none;
`

function Slideshow({ props }) {
    const [currentImage, updateImage] = useState(0)
    const [mousedOver, setMousedOver] = useState(false)
    const length = props.length

    const previousImage = () => {
       updateImage(currentImage === 0 ? length - 1 : currentImage - 1)
    }
    const nextImage = () => {
        updateImage(currentImage === length - 1 ? 0 : currentImage + 1)
    }

    useEffect(() => {
        if (!mousedOver) {
            const timer = setInterval(() => {
                updateImage((index) => (index + 1) % length)
            }, 2000)
            return () => clearInterval(timer)
        } else {
            updateImage(currentImage)
        }
    }, [mousedOver, currentImage, length])

    return (
        <SlideshowContainer onMouseOut={() => setMousedOver(false)} onMouseOver={() => setMousedOver(true)}>
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