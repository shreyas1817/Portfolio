import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from "../assets/img/logo/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shreyas-g-s-b33b9a345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target='_blank'><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/shreyas1817" target='_blank'><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/shr3yas.gs?utm_source=qr&igsh=MWcxOHlqZWxpemh3Yw== " target='_blank'><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}