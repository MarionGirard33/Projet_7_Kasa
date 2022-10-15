import styled from 'styled-components'
import BannerImg from '../../assets/banner.png'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1240px;
  height: 1095px;
  left: 100px;
  top: 120px;
`

const Banner = styled.div`
    position: relative;
    height: 223px;
    width: 1240px;
    border-radius: 25px;
    background-size: cover;
`

const Text = styled.h1`
position: absolute;
font-size: 48px;
font-weight: 500;
text-align: left;
height: 68px;
width: 705px;
left: 270px;
top: 50px;
color: white;
background-color: rgba(0, 0, 0, 0);
`

// const CardContainer = styled.div`
//   margin: 30px;
//   background-color: ${colors.background};
//   padding: 60px 90px;
//   display: flex;
//   flex-direction: row;
//   max-width: 1200px;
// `

function Home() {
    return (
      <HomeWrapper>
        <Banner style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${BannerImg})`}} >
            <Text>Chez vous, partout et ailleurs</Text>
        </Banner>
        {/* <CardContainer>
          
        </CardContainer> */}
      </HomeWrapper>
    )
  }
  
  export default Home