import styled from 'styled-components'
import Logo from "../../assets/logoFooter.svg"

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 209px;
  background: #000000;
`

const LogoFooter = styled.img`
  background-color: transparent;
  color: white;
  height: 39px;
  width: 122px;
  color: white;
  margin-top: 66px;
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`

const CopyrightFooter = styled.p`
  height: 46px;
  width: 513px;
  background-color: transparent;
  font-size: 24px;
  font-weight: 500;
  line-height: 34px;
  text-align: center;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

function Footer() {
  return (
    <FooterContainer>
      <LogoFooter src={Logo} alt="logo de Kasa" />
      <CopyrightFooter >© 2020 Kasa. All rights reserved</CopyrightFooter>
    </FooterContainer>
  )
}

export default Footer