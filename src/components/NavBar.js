import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        const sections = document.querySelectorAll('section');
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveLink(entry.target.id);
            }
          });
        }, options);

        sections.forEach(section => {
          observer.observe(section); 
        });

        window.addEventListener('scroll',onScroll);
        return () => {
            window.removeEventListener('scroll',onScroll);
            }
    },[])
    
  return (
    <Navbar expand="lg" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home'?"active navbar-link":"navbar-link"} onClick={()=>setActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills'?"active navbar-link":"navbar-link"} onClick={()=>setActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project'?"active navbar-link":"navbar-link"} onClick={()=>setActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/shreyas-g-s-b33b9a345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target='_blank'><img src={navIcon1} alt=""/></a>
                <a href="https://github.com/shreyas1817" target='_blank'><img src={navIcon2} alt=""/></a>
                <a href="https://www.instagram.com/shr3yas.gs?utm_source=qr&igsh=MWcxOHlqZWxpemh3Yw== " target='_blank'><img src={navIcon3} alt=""/></a>
            </div>
            <button className={activeLink === 'connect' ? "active navbar-link" : "navbar-link"}
              onClick={() => {
                setActiveLink('connect');
                document.getElementById('connect').scrollIntoView({ behavior: 'smooth' });
              }}><span>Lets Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}