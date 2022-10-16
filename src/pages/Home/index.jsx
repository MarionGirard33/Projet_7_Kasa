import styled from 'styled-components'
import { Link } from 'react-router-dom'
import BannerImg from '../../assets/banner.png'
import logementsList from '../../assets/logements.json'
import Card from '../../components/Card'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin: 0 60px 63px 60px;
  @media screen and (max-width: 768px) {
    margin: 0 19px 0 21px;
  }
`

const Banner = styled.div`
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
    justify-content: left;
    margin-bottom: 22px;
    height: 111px;
    border-radius: 10px;
  }
`

const Text = styled.h1`
  position: absolute;
  font-size: 48px;
  font-weight: 500;
  height: 68px;
  width: 705px;
  color: white;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    width: 217px;
    font-size: 24px;
    line-height: 24px;
    margin: 20px 0 0 15px;
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  width: 94%;
  padding: 3%;
  padding-bottom: 0;
  border-radius: 25px;
  background: #F7F7F7;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 0;
    background: white;
  }
`
const StyledLink = styled(Link)`
  height: 340px;
  width: 30%;
  margin-bottom: 50px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 255px;
    margin-bottom: 20px;
  }
`

function Home() {
  return (
    <HomeWrapper>
      <Banner style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${BannerImg})`}} alt="bannière image de forêt" >
          <Text>Chez vous, partout et ailleurs</Text>
      </Banner>
      <CardContainer>
        {logementsList?.map((logement) => (
          <StyledLink key={`logement-${logement.id}`} to={`/logement/${logement.id}`}>
            <Card
              title={logement.title}
              cover={logement.cover}
            />
          </StyledLink>
        ))}
      </CardContainer>
    </HomeWrapper>
  )
}
  
  export default Home