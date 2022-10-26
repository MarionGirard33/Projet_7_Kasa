import styled from 'styled-components'

const TagsContainer = styled.ul`
  padding: 0;
  margin-top: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

`

const Tag = styled.li`
  width: 160px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  background: #FF6060;
  margin-right: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 130px;
    height: 18px;
    font-size: 12px;
  }
`

function Tags({ tags }) {
    return (
        <TagsContainer>
            {tags.map((tag, index) => (
                <Tag key={`Tag-${index}`}>
                    {tag}
                </Tag>
            ))} 
        </TagsContainer>
    )
}

export default Tags