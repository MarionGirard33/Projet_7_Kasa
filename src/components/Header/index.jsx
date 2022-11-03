import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className='header'>
      <Link to="/"><img className='header__logo' src={Logo} alt="logo de Kasa"/></Link>
      <nav className='header__nav'>
        <Link to="/">Accueil</Link>
        <Link to="/About">A Propos</Link>
      </nav>
    </header>
  )
};

export default Header;