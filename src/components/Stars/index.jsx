import styled from 'styled-components'
import fullStar from '../../assets/fullStar.svg'
import emptyStar from '../../assets/emptyStar.svg'

const StarsContainer = styled.div``

const Star = styled.img`
    width: 30px;
    height: 30px;
    display: flex:
    list-style: none;
    margin-left: 10px;
    @media screen and (max-width: 768px) {
        width: 16px;
        height: 16px;
        margin-left: 5px;
      };
`

function Stars({ rating }) {
    const stars = []
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<Star key={`Star-${i}`} src={fullStar} alt='étoile pleine' />)
        } else {
            stars.push(<Star key={`Star-${i}`} src={emptyStar} alt='étoile vide' />)
        }
    }

    return (
        <StarsContainer>{stars}</StarsContainer>
    )
}

export default Stars