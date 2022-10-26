import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import BannerImg from '../../assets/banner.png'
// import logementsList from '../../assets/logements.json'
import Card from '../../components/Card'
import { Loader } from '../../utils/style/Atoms'
import { useFetch } from '../../utils/hooks'

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 60px 63px 60px;
  @media screen and (max-width: 992px) {
    margin: 0 45px 0 50px;
  }
  @media screen and (max-width: 768px) {
    margin: 0 19px 0 21px;
  }
`

const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  height: 100%;
  width: 94%;
  padding: 3%;
  padding-bottom: 50px;
  border-radius: 25px;
  background: #F7F7F7;
  @media screen and (max-width: 992px) {
    width: 94%;
    gap: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 0px;
    padding: 0;
    background: white;
  }
`
const StyledLink = styled(Link)`
  height: 340px;
  width: 30%;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 255px;
    margin-bottom: 20px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Home() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/logements.json`
  )
  const logementsList = data
    
  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <HomeWrapper>
      <Banner image={BannerImg} alt="bannière image de forêt" />
      {isLoading ? (
        <LoaderWrapper>
          <Loader data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <CardContainer>
          {logementsList?.map((logement) => (
            <StyledLink key={`Housing-${logement.id}`} to={`/Housing/${logement.id}`}>
              <Card
                title={logement.title}
                cover={logement.cover}
              />
            </StyledLink>
          ))}
        </CardContainer>
      )}
    </HomeWrapper>
  )
}
  
export default Home