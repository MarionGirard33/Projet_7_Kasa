import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from "../../assets/logo.svg"

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 1240px;
  height: 68px;
  left: 100px;
  top: 40px;
`
const HeaderLogo = styled.img`
  height: 68px;
  width: 210px;
`
const NavContainer = styled.div`
  height: 34px;
  width: 450px;
  text-align: right;
  a:hover {
    text-decoration-line: underline;
  }
`

const StyledLink = styled(Link)`
height: 34px;
width: 116px;
top: 17px;
border-radius: nullpx;
font-family: Montserrat;
font-size: 24px;
font-weight: 500;
line-height: 34px;
padding-left: 40px;
align-items: flex-end;
text-align: right;
color: #FF6060;
text-decoration: none;
`

function Header() {
  return (
    <HeaderContainer>
      <Link to="/"><HeaderLogo src={Logo} alt="logo"/></Link>
      <NavContainer>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/A Propos">A Propos</StyledLink>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header