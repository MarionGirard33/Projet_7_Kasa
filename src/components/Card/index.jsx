import PropTypes from 'prop-types';
function Card({ title, cover }) {
  return (
    <div className='card__image' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${cover})`}} alt="photo du logement">
    <h2 className='card__title'>{title}</h2>
    </div>
  )
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;