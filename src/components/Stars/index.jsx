import fullStar from '../../assets/fullStar.svg';
import emptyStar from '../../assets/emptyStar.svg';

function Stars({ rating }) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<img className='star'key={`Star-${i}`} src={fullStar} alt='étoile pleine' />)
        } else {
            stars.push(<img className='star' key={`Star-${i}`} src={emptyStar} alt='étoile vide' />)
        }
    };

    return (
        <div>{stars}</div>
    )
};

export default Stars;