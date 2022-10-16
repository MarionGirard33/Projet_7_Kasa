import PropTypes from 'prop-types'
import styled from 'styled-components'


const CardTitle = styled.div`
    position: absolute;
    height: 52px;
    width: 300px;
    left: 20px;
    top: 268px;
    font-weight: 500;
    line-height: 26px;
    text-align: left;
    color: white;
    background-color: transparent;
    @media screen and (max-width: 768px) {
        height: 52px;
        width: 295px;
        left: 19px;
        top: 188px;
    }
`

const CardImage = styled.div`
    position: relative;
    background-size: cover;
    height: 340px;
    width: 100%;
    border-radius: 10px;
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 255px;
      }
`

const CardWrapper = styled.div`
    &:hover {
        cursor: pointer;
    }
`

function Card({ title, cover }) {
  return (
    <CardWrapper >
      <CardImage style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${cover})`}} alt="photo du logement">
        <CardTitle >{title}</CardTitle>
      </CardImage>
    </CardWrapper>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}


export default Card