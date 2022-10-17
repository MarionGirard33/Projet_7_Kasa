// import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import vector from '../../assets/vector.svg'

const CollapseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
    font-weight: 500;
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`

const CollapseVector = styled.img`
    height: 23px;
    width: 20px;
    margin-right: 18px;
    @media screen and (max-width: 768px) {
        width: 18px;
    }
`

const CollapseDescription = styled.p`
    width: 85%;
    border-radius: 0 0 5px 5px;
    font-size: 24px;
    font-weight: 400;
    text-align: left;
    align-items: center;
    padding: 25px 0 12px 18px;
    margin-top: 0;
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
  return (
    <CollapseWrapper >
        <CollapseMenu>
            <CollapseTitle>{title}</CollapseTitle>
            <CollapseVector src={vector} alt="menu déroulant" />
        </CollapseMenu>
        <CollapseDescription>{description}</CollapseDescription>
    </CollapseWrapper>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Collapse