import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #FFFFFF;
  color: #FF6060;
`

const ErrorTitle = styled.h1`
    height: 263px;
    width: 597px;
    font-size: 288px;
    font-weight: 700;
    margin: 100px;
    @media screen and (max-width: 768px) {
        height: 99px;
        width: 198px;
        font-size: 96px;
        margin: 200px 0 11px 0;
    }
`

const ErrorSubtitle = styled.h2`
    height: 51px;
    width: 872px;
    font-size: 36px;
    font-weight: 500;
    margin: 0;
    @media screen and (max-width: 768px) {
        height: 52px;
        width: 260px;
        font-size: 18px;
        line-height: 26px;
        margin-top: 11px;
    }
`

const StyledLink = styled(Link)`
    height: 26px;
    width: 284px;
    font-weight: 500;
    color: #FF6060;
    margin: 182px 0 80px 0;
    @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 200px;
    }
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubtitle>Oups! La page que vous demandez n’existe pas.</ErrorSubtitle>
      <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
    </ErrorWrapper>
  )
}

export default Error