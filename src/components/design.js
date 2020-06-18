import React from 'react'
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap'
import Listivo from '../img/listivo.png'
import PortUI from '../img/port-ui.png'
import Domini from '../img/project7.png'

const Design = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col className="mb-4" lg="4" md="6" sm="12">
                        <Card body className="oscuro text-center">
                            <CardImg top width="100%" height="auto" src={Listivo} alt="Listivo Project"/>
                            <CardBody>
                                <CardTitle className="text-center">Listivo - UI/UX Design</CardTitle>
                                <Button className="m-auto bton">Details</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col className="mb-4" lg="4" md="6" sm="12">
                        <Card body className="oscuro text-center">
                            <CardImg top width="100%" height="auto" src={PortUI} alt="Portfolio Project"/>
                            <CardBody>
                                <CardTitle className="text-center">My Portfolio - UI/UX Design</CardTitle>
                                <Button className="m-auto bton">Details</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="4" md="6" sm="12">
                        <Card body className="oscuro text-center">
                            <CardImg top width="100%" height="auto" src={Domini} alt="Portfolio Project"/>
                            <CardBody>
                                <CardTitle className="text-center">Rep. Dom. Tribute - UI/UX Design</CardTitle>
                                <Button className="m-auto bton">Details</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Design;