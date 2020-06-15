import React from 'react';
import Man from '../img/mafia-man.png';
import { Container, Row, Col } from 'reactstrap';

export default function Showcase() {
    return (
        <div className="showcase">
            <Container>
                <Row>
                    <Col lg="7" md="12" sm="12" className="showcase-up">
                        <div className="showcase-main_text">Let's bring your idea(s) to life!</div>
                        <div className="showcase-secondary_text">I love to design and develop websites and web applications.<br/>Do you have any idea in mind? Let’s get in contact!
                        </div>
                    </Col>
                    <Col lg="5" md="0">
                        <img className="mafia-man" src={Man} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

//export default Showcase;