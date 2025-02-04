import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import cyber from '../assets/img/cyber.png';
import ml from '../assets/img/ml.png';
import web from '../assets/img/web-dev.png';
import bi from '../assets/img/PBI.png';
import c from '../assets/img/C.png';
import python from '../assets/img/python.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-box">
                        <h2>Skills</h2>
                        <p>Some of the skills I've learnt throughout my course in PES and on my own</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="skill-item">
                                <img src={cyber} alt='img'></img>
                                <h5>CyberSecurity</h5>
                            </div>
                            <div className="skill-item">
                                <img src={ml} alt='img'></img>
                                <h5>ML</h5>
                            </div>
                            <div className="skill-item">
                                <img src={web} alt='img'></img>
                                <h5>Web Development</h5>
                            </div>
                            <div className="skill-item">
                                <img src={bi} alt='img'></img>
                                <h5>Power BI</h5>
                            </div>
                            <div className="skill-item">
                                <img src={c} alt='img' id='C'></img>
                                <h5>C programming</h5>
                            </div>
                            <div className="skill-item">
                                <img src={python} alt='img'></img>
                                <h5>Python</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}