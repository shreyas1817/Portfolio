import {Container, Row, Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useState,useEffect } from 'react';
import me from '../assets/img/me.png';

export const Banner = () =>{

    const toRotoate=['CyberSec Analyst','Web Developer','Designer'];
    const [loopNum, setLoopNum] = useState(0);
    const [text,setText] = useState('');
    const [isDeleting,setIsDeleting] = useState(false);
    const [delta,setDelta] = useState(300 - Math.random()*10);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    },[text])

    const tick = () =>{
        const i = loopNum % toRotoate.length;
        const fullText = toRotoate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="allign-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome</span>
                    <h1>{`Hey! I'm Shreyas `}<br/><span className='wrap'>{text}</span></h1>
                    <p>I'm a computer science student at PES University 
                        and I'm passionate about cybersecurity, design and web development.
                         My projects blend aesthetics and functionality and I enjoy originally solving technical challenges.</p>
                    <button className='resume' onClick={()=>{ console.log("Resume")}}><span>Resume</span></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={me} alt="Shreyas" className="img-fluid"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}