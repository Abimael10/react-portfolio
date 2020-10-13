import React from 'react'
import { Container, Row, Card, Col, CardTitle } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMailBulk} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons'

const ContactInfo = () => {
    return(
        <React.Fragment>
            <div className="about-me resize">
                <Container>
                    <Row>
                        <Col lg="4" md="4" sm="12">
                            <Card className="oscuro mt-5">
                                <FontAwesomeIcon className="fa-mailbulk pt-2" icon={faMailBulk}/>
                                <CardTitle className="about-me_preview text-center">Juanabimael@gmail.com</CardTitle>
                            </Card>
                        </Col>
                        
                        <Col lg="4" md="4" sm="12">
                            <Card className="oscuro mt-5">
                                <FontAwesomeIcon className="fa-mailbulk pt-2" icon={faInstagram}/>
                                <CardTitle className="about-me_preview text-center">@j_abimaelsc</CardTitle>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default ContactInfo;