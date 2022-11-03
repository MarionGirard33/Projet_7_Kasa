
function Tags({ tags }) {
    return (
        <ul className='tags'>
            {tags.map((tag, index) => (
                <li className='tags__tag' key={`Tag-${index}`}>
                    {tag}
                </li>
            ))}
        </ul>
    )
};

export default Tags;