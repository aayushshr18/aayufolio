import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from "../assets/img/header-banner.jpg";
import TrackVisibility from 'react-on-screen';
import "animate.css";

const Banner = () => {
    const toRotate = ['FrontEnd Developer', 'Mern Developer', 'Web Developer'];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100)



    const handleCV = () => {
        window.open("https://drive.google.com/file/d/1wPk7Jv4XOJBJ0ZyTFmorZ8QgmMzUIvq2/view", "_blank");
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) }// eslint-disable-next-line
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>

                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className='tagline'>Welcome to AayuFolio</span>
                                    <h1 >{`Hi I'm Aayush `}<br /><span className='wrap'>{text}</span></h1>
                                    <p>A Quick Learner, Hardworking and Enthusiastic upcoming Engineer. Actively learning Web Development. Working hard to sharpen my Coding Skills.</p>
                                    <button onClick={handleCV}>My CV/Resume<ArrowRightCircle size={25} /> </button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} style={{ filter: "brightness(80%)" }} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner