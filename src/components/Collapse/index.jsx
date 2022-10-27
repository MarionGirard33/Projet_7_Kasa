import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'
import vector from '../../assets/vector.svg'

const CollapseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${(props) =>
        props.$width &&
        `width: ${props.$width};`}
    font-size: 24px;
    @media screen and (max-width: 768px) {
        width: 95%;
    }
`

const CollapseMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 47px;
    width: 100%;
    border-radius: 5px;
    padding-left: 18px;
    margin-top: 30px;
    color: white;
    background-color: #FF6060;
    z-index: 1;
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 30px;
    }
`

const CollapseTitle = styled.h2`
    ${(props) =>
        props.$fontSize &&
        `font-size: ${props.$fontSize};`}
    font-weight: 500;
    margin:0;
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`

const CollapseVector = styled.img`
    height: 23px;
    width: 20px;
    margin-right: 18px;
    transform: ${props => props.isOpen ? 'rotate(0deg)' : 'rotate(-180deg)'};
    transition: transform 500ms;
    @media screen and (max-width: 768px) {
        width: 18px;
    }
`

const CollapseDescription = styled.p`
    width: 100%;
    border-radius: 0 0 5px 5px;
    text-align: left;
    align-items: center;
    margin: 0;
    list-style: none;
    text-align: left;
    color: #FF6060;
    background-color: #F6F6F6;
    ${(props) =>
        props.$fontSize &&
        `font-size: ${props.$fontSize};`};
    overflow: hidden;
    z-index:0;
    transform: translateY(-30%);
    padding: ${props => props.isOpen ? '0px' : '25px 0 12px 18px;'};
    height: ${props => props.isOpen ? 0 : 'auto'};
    transform: ${props => props.isOpen ? null : 'translateY(0%);'};
    transition: transform 600ms;
    @media screen and (max-width: 768px) {
        font-size: 16px;
        width: 100%;
        padding-bottom: 30px;
        transform: translateY(-10%);
        padding: ${props => props.isOpen ? '0px' : '25px 0 12px 18px;'};
        transform: ${props => props.isOpen ? null : 'translateY(0%);'};
    }
`
function Collapse({ title, description, $fontSize, $width }) {
    const [isOpen, setCollapse] = useState(false)

    const toggleCollapse = () => {
        setCollapse(prevState => !prevState)
    }

    return (
        <CollapseWrapper $width={$width}>
            <CollapseMenu onClick={toggleCollapse}>
                <CollapseTitle $fontSize={$fontSize}>{title}</CollapseTitle>
                <CollapseVector isOpen={!isOpen} src={vector} alt="menu déroulant" />
            </CollapseMenu>
            <CollapseDescription isOpen={!isOpen} $fontSize={$fontSize}>{description}</CollapseDescription>
        </CollapseWrapper>
    )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Collapse