import styled from 'styled-components'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Loader } from '../../utils/style/Atoms'
import { useFetch } from '../../utils/hooks'
import Slideshow from '../../components/Slideshow'
import StarsContainer from '../../components/Stars'
import Collapse from '../../components/Collapse'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HousingWrapper = styled.div`
  color: #FF6060;
`

const OneHouseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  margin: 0 60px 63px 60px;
  @media screen and (max-width: 768px) {
    margin: 0 19px 0 21px;
  }
`

const Banner = styled.section`
  height: 415px;
  width: 100%;
  border-radius: 25px;
  background-size: cover;
  margin-bottom: 30px;
  border: black 1px solid;
  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
    height: 255px;
    border-radius: 10px;
  }
`

const TitleContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 122px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 170px;
  };
`

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  };
  border: red 1px solid;
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

const TagsContainer = styled.ul`
  padding: 0;
  margin-top: 0;
`

const Tags = styled.li`
  width: 115px;
  height: 25px;
  display: flex:
  list-style: none;
  color: white;
  font-size: 16px;
  font-weight: 500;
  background: #FF6060;
  text-align: center;
  margin-right: 10px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 84px;
    height: 18px;
  }
`

const HostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  height: 122px;
  border: green 1px solid;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50px;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  };
`

const HostWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const HostName = styled.h2`
  height: 52px; 
  width: 93px;
  text-align: right;
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px; 
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin: 0; 
  };
`

const HostPicture = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50px;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    width: 38px;
    height: 38px;
  };
`

const CollapseContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: black 1px solid;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  };
`


const dataOneHouse = 
  {
  "id": "c67ab8a7",
  "title": "Appartement cosy",
  "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  "pictures": [
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
  ],
  "description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
  "host": {
  "name": "Nathalie Jean",
  "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
  },
  "rating": "3",
  "location": "Ile de France - Paris 17e",
  "equipments": [
  "Équipements de base",
  "Micro-Ondes",
  "Douche italienne",
  "Frigo",
  "WIFI"
  ],
  "tags": [
  "Batignolle",
  "Montmartre"
  ]
  }


function Housing() {
  // const { data, isLoading, error } = useFetch(
  //   `http://localhost:3000/logements.json`
  // )
  // const params = useParams()
  // let dataOneHouse = data.find(oneHouse => oneHouse.id === params.id)
    
  // useEffect(() => {
  //   if (!dataOneHouse) {
  //     console.log("error");
  //   }
  // }, [dataOneHouse]);
  // console.log(dataOneHouse)
  
  return (
    dataOneHouse && (
    <HousingWrapper>
      {/* {isLoading ? (
        <LoaderWrapper>
          <Loader data-testid="loader" />
        </LoaderWrapper>
      ) : ( */}
        <OneHouseWrapper>
          <Banner>
              {<Slideshow props={dataOneHouse.pictures}/>}
          </Banner>
          <TitleContainer>
            <NameWrapper>
              <Title>{dataOneHouse.title}</Title>
              <Location>{dataOneHouse.location}</Location>
              <TagsContainer>
                {dataOneHouse.tags.map((tag, index) => (
                  <Tags key={`Tag-${index}`} tag={tag} />
                ))} 
              </TagsContainer>
            </NameWrapper>
            <HostContainer>
              <HostWrapper>
                <HostName>{dataOneHouse.host.name}</HostName>
                <HostPicture src={dataOneHouse.host.picture} alt='hôte'/>
              </HostWrapper>
              <StarsContainer rating={dataOneHouse.rating}/>
            </HostContainer>
          </TitleContainer>
          <CollapseContainer>
            <Collapse title='Description' description={dataOneHouse.description} />
            <Collapse title='Equipments' description={dataOneHouse.equipments} />
          </CollapseContainer>
        </OneHouseWrapper>
       {/* )} */}
    </HousingWrapper>
  ))
}
  
export default Housing