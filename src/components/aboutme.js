import React from 'react';
import Photo from '../img/photo.jpg';
import { Container, Row, Col } from 'reactstrap';

export default function AboutMe() {
    return (
        <div className="about-me">
            <Container>
                <div className="title pt-5">
                    About Me
                </div>
                <Row>
                    <Col md="5" sm="12" xs="12">
                        <img className="photo" src={Photo}/>
                    </Col>
                    <Col md="7">
                        <div className="about-me_preview">
                            I am a Web Developer from Dominican Republic. 23 years old, a couple of years of experience creating amazing websites and web applications, giving customers what they want or helping them to choose what they need.
                        </div>
                        <div className="about-me_option">
                            If you want to know more about me and my skills as a Software Developer in general, visit the About section above!
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

//export default AboutMe;