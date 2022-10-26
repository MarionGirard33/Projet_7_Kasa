import styled from 'styled-components'

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

function Host({ host }) {
    return (
        <HostWrapper>
            <HostName>{host.name}</HostName>
            <HostPicture src={host.picture} alt='hôte'/>
        </HostWrapper>
    )
}

export default Host