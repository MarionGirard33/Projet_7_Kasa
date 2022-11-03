import PropTypes from 'prop-types';
import { useState } from 'react';
import vector from '../../assets/vector.svg';
function Collapse({ title, description }) {
    const [isOpen, setCollapse] = useState(false);

    const toggleCollapse = () => {
        setCollapse(prevState => !prevState)
    };

    return (
        <div className='collapse'>
            <div className='collapse__menu' onClick={toggleCollapse}>
                <h2 className='collapse__menu__title'>{title}</h2>
                <img className={isOpen? 'arrow-open' : ''} src={vector} alt="menu déroulant" />
            </div>
            <p className={isOpen? 'description-open' : ''}>{description}</p>
        </div>
    )
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Collapse;