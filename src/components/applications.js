import React from 'react'
import { Container, Row, Col, Card, CardTitle, CardImg, CardBody, Button } from 'reactstrap'
import Restaurant from '../img/proyectos/project2.jpg'
import Weather from '../img/proyectos/project3.jpg'
import Chatbot from '../img/proyectos/project4.jpg'
import Elite from '../img/proyectos/fiverr-elite.png'
import BLD from '../img/proyectos/bld-website.png'
import Blog from '../img/proyectos/project6.jpg'
import Dominic from '../img/proyectos/domini.png'
import Agenda from '../img/proyectos/agenda.png'
import MLfront from '../img/proyectos/ml-front'

const Applications = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>

                <Col className="mb-4" lg="4" md="6" sm="12">
                        <Card body className="oscuro text-center">
                            <CardImg top width="100%" height="auto" src={MLfront} alt="Ml-front"/>
                            <CardBody>
                                <CardTitle className="text-center">What's in there App - Single-Page Image Recognition App</CardTitle>
                                <Button href="https://abimael10.github.io/what-s-in-there" className="m-auto bton">Details</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col className="mb-4" lg="4" md="6" sm="12">
                        <Card body className="oscuro text-center">
                            <CardImg top width="100%" height="auto" src={Agenda} alt="Agenda"/>
                            <CardBody>
                                <CardTitle className="text-center">Events App - Single-Page App</CardTitle>
                                <Button href="https://abimael10.github.io/agenda/" className="m-auto bton">Details</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col className="mb-4" lg="4" md="6" sm="12">
                        <Card body className="oscuro text-center">
                            <CardImg top width="100%" height="auto" src={Restaurant} alt="Restaurant Project"/>
                            <CardBody>
                                <CardTitle className="text-center">Restaurant - Landing Page</CardTitle>
                                <Button href="http://santosdinner.epizy.com/index.php" className="m-auto bton">Details</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col className="mb-4" lg="4" md="6" sm="12">
                        <Card body className="oscuro text-center">
                            <CardImg top width="100%" height="auto" src={Weather} alt="Weather Project"/>
                            <CardBody>
                                <CardTitle className="text-center">Weather App - Web App</CardTitle>
                                <Button href="https://abimael10.github.io/weather/dist/index.html" className="m-auto bton">Details</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col className="mb-4" lg="4" md="6" sm="12">
                        <Card body className="oscuro text-center">
                            <CardImg top width="100%" height="auto" src={Chatbot} alt="Chatbot Project"/>
                            <CardBody>
                                <CardTitle className="text-center">ChatBot - Web App</CardTitle>
                                <Button href="https://abimael10.github.io/santos-bot/index.html" className="m-auto bton">Details</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col className="mb-4" lg="4" md="6" sm="12">
                        <Card body className="oscuro text-center">
                            <CardImg top width="100%" height="auto" src={Elite} alt="EFB Project"/>
                            <CardBody>
                                <CardTitle className="text-center">Elite Fex Brokers - Website</CardTitle>
                                <Button href="https://elitefexbrokers.com/" className="m-auto bton">Details</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col className="mb-4" lg="4" md="6" sm="12">
                        <Card body className="oscuro text-center">
                            <CardImg top width="100%" height="auto" src={BLD} alt="BLD Project"/>
                            <CardBody>
                                <CardTitle className="text-center">BLD - Website</CardTitle>
                                <Button href="https://abimael10.github.io/bld-website/" className="m-auto bton">Details</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col className="mb-4" lg="4" md="6" sm="12">
                        <Card body className="oscuro text-center">
                            <CardImg top width="100%" height="auto" src={Blog} alt="Blog Project"/>
                            <CardBody>
                                <CardTitle className="text-center">Blog - Website Template</CardTitle>
                                <Button href="https://abimael10.github.io/Blog/" className="m-auto bton">Details</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col className="mb-4" lg="4" md="6" sm="12">
                        <Card body className="oscuro text-center">
                            <CardImg top width="100%" height="auto" src={Dominic} alt="Rep. Dominicana Project"/>
                            <CardBody>
                                <CardTitle className="text-center">Rep. Dominicana - Landing Page</CardTitle>
                                <Button href="https://abimael10.github.io/dominican-landing/" className="m-auto bton">Details</Button>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

                <div className="showcase-secondary_text mt-5 text-center">Adding way more exciting projects really soon...!</div>
            </Container>
        </React.Fragment>
    )
}

export default Applications;