import { Container} from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-bx">
            <img className="footer-logo" src={logo}  alt="" />
            <div className="social-icon">
              <a href="https://in.linkedin.com/in/aayush-shrivastava-60013a17b" rel="noreferrer" target='_blank' ><img src={navIcon1} alt="" /></a>
              <a href="/"><img src={navIcon2} alt="" /></a>
              <a href="/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
      </Container>
    </footer>
  )
}