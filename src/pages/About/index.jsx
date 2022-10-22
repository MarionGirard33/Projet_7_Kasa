import styled from 'styled-components'
import BannerImg from '../../assets/bannerAbout.png'
import Collapse from '../../components/Collapse'

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin: 0 60px 63px 60px;
  @media screen and (max-width: 768px) {
    margin: 0 19px 0 21px;
  }
`

const Banner = styled.section`
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
    border-radius: 10px;
  }
`

const DropdownContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const collapseData = [
  {
    title: 'Fiabilité',
    description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
  },
  {
    title: 'Respect',
    description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  },
  {
    title: 'Service',
    description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  },
  {
    title: 'Sécurité',
    description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }
]


function About() {
  return (
    <AboutWrapper>
      <Banner style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${BannerImg})`}} alt="bannière image de forêt" >
      </Banner>
      <DropdownContainer>
        {collapseData.map((about, index) => 
          <Collapse 
            key={`${about.title}-${index}`}
            title={about.title} 
            description={about.description} 
          />
        )}
      </DropdownContainer>
    </AboutWrapper>
  )
}
  
  export default About