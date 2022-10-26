import styled from 'styled-components'

const BannerElement = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 223px;
  width: 100%;
  border-radius: 25px;
  background-size: cover;
  margin-bottom: 43px;
  @media screen and (max-width: 768px) {
    margin-bottom: 22px;
    height: 111px;
    border-radius: 10px;
    justify-content: left;
  }
`

const Text = styled.h1`
  ${(props) =>
    props.$display &&
    `display: ${props.$display};`}
  position: absolute;
  font-size: 48px;
  font-weight: 500;
  height: 68px;
  width: 705px;
  color: white;
  background-color: transparent;
  @media screen and (max-width: 992px) {
    font-size: 30px;
    margin: 20px 0 0 15px;
  }
  @media screen and (max-width: 768px) {
    width: 217px;
    font-size: 24px;
    line-height: 24px;
    margin: 20px 0 0 15px;
  }
`

function Banner({ image, $display }) {
    return (
        <BannerElement style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${image})`}} >
                  <Text $display={$display}>Chez vous, partout et ailleurs</Text>
        </BannerElement>
    )
}

export default Banner