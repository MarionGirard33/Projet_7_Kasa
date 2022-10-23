// import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'
import vector from '../../assets/vector.svg'

const CollapseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
    width: 85%;
    border-radius: 5px;
    padding-left: 18px;
    margin-top: 30px;
    color: white;
    background-color: #FF6060;
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 30px;
    }
`

const CollapseTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    margin:0;
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`

const CollapseVectorUp = styled.img`
    height: 23px;
    width: 20px;
    margin-right: 18px;
    @media screen and (max-width: 768px) {
        width: 18px;
    }
`

const CollapseVectorDown = styled.img`
    height: 23px;
    width: 20px;
    margin-right: 18px;
    @media screen and (max-width: 768px) {
        width: 18px;
    };
    transform: rotate(180deg)
`

const CollapseDescription = styled.p`
    width: 85%;
    border-radius: 0 0 5px 5px;
    text-align: left;
    align-items: center;
    padding: 25px 0 12px 18px;
    margin: 0;
    list-style: none;
    text-align: left;
    color: #FF6060;
    background-color: #F6F6F6;
    @media screen and (max-width: 768px) {
        font-size: 16px;
            width: 100%;
            padding-bottom: 30px;
    }
`

function Collapse({ title, description }) {
    const [isOpen, setCollapse] = useState(false)

    return isOpen ? (
        <CollapseWrapper>
            <CollapseMenu>
                <CollapseTitle>{title}</CollapseTitle>
                <CollapseVectorDown onClick={() => setCollapse(false)} src={vector} alt="menu déroulant" />
            </CollapseMenu>
            <CollapseDescription>{description}</CollapseDescription>
        </CollapseWrapper>
    ) : (
        <CollapseWrapper>
            <CollapseMenu>
                <CollapseTitle>{title}</CollapseTitle>
                <CollapseVectorUp onClick={() => setCollapse(true)} src={vector} alt="menu déroulant" />
            </CollapseMenu>
        </CollapseWrapper>
    )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Collapse