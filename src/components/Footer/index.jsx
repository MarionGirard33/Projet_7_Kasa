import Logo from "../../assets/logoFooter.svg";

function Footer() {
  return (
    <footer>
      <img className="footer__logo" src={Logo} alt="logo de Kasa" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
};

export default Footer;