import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Loader } from '../../utils/style/Atoms'
import { useFetch } from '../../utils/hooks'
import Slideshow from '../../components/Slideshow'
import TagsContainer from '../../components/Tags'
import HostWrapper from '../../components/Host'
import StarsContainer from '../../components/Stars'
import Collapse from '../../components/Collapse'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const OneHouseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  color: #FF6060;
  margin: 0 60px 63px 60px;
  @media screen and (max-width: 768px) {
    margin: 0 19px 0 21px;
  }
`

const TitleContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  };
`

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 100%;
  };
`

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  margin: 0; 
  @media screen and (max-width: 768px) {
    font-size: 20px;
  };
`

const Location = styled.p`
  font-weight: 500;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  };
`

const HostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 30%;
  height: 122px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50px;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  };
`

const CollapseContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 99%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  };
`

function Housing() {
  const { data, isLoading } = useFetch(
    `http://localhost:3000/logements.json`
  )
  const params = useParams()
  const [dataOneHouse, setDataOneHouse] = useState(null)
  let navigate = useNavigate("/error", { replace: true });
    
  useEffect(() => {
    let dataHouse = data?data.find(oneHouse => oneHouse.id === params.id) : navigate
    setDataOneHouse(dataHouse)
  }, [data, params.id, navigate]);
  
  console.log(dataOneHouse)
    
  return (
    dataOneHouse && (
    <>
      {isLoading ? (
        <LoaderWrapper>
          <Loader data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <OneHouseWrapper>
          {<Slideshow props={dataOneHouse.pictures}/>}
          <TitleContainer>
            <NameWrapper>
              <Title>{dataOneHouse.title}</Title>
              <Location>{dataOneHouse.location}</Location>
              <TagsContainer tags={dataOneHouse.tags}/>
            </NameWrapper>
            <HostContainer>
              <HostWrapper host={dataOneHouse.host} />
              <StarsContainer rating={dataOneHouse.rating}/>
            </HostContainer>
          </TitleContainer>
          <CollapseContainer>
            <Collapse title='Description' $width={'46%'} $fontSize='18px' description={dataOneHouse.description} />
            <Collapse title='Equipements' $width={'46%'} $fontSize='18px' description={dataOneHouse.equipments.map((equipment, index) => (
              <li key={`Equipment-${index}`}>
                {equipment}
              </li>
            ))} />
          </CollapseContainer>
        </OneHouseWrapper>
       )}
    </>
  ))
}
  
export default Housing