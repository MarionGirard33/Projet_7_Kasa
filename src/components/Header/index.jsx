import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from "../../assets/logo.svg"

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 68px;
  margin: 40px 60px 63px 60px;
  @media screen and (max-width: 768px) {
    margin: 20px;            
  }
`
const HeaderLogo = styled.img`
  height: 68px;
  width: 210px;
  @media screen and (max-width: 768px) {
    height: 47px;
    width: 145px;             
  }
`
const NavContainer = styled.div`
  height: 34px;
  width: 450px;
  text-align: right;
  margin-top: 20px;
  a:hover {
    text-decoration-line: underline;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;   
    height: 17px;
    width: 180px;       
  }
`

const StyledLink = styled(Link)`
height: 34px;
width: 116px;
font-size: 24px;
font-weight: 500;
line-height: 34px;
padding-left: 40px;
align-items: flex-end;
text-align: right;
color: #FF6060;
text-decoration: none;
@media screen and (max-width: 768px) {
  text-transform: uppercase;
  font-size: 14px;
  height: 17px;
  width: 71px;
  padding-left: 12px;
}
`

function Header() {
  return (
    <HeaderContainer>
      <Link to="/"><HeaderLogo src={Logo} alt="logo de Kasa"/></Link>
      <NavContainer>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/About">A Propos</StyledLink>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header