import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import Tae from '../img/tae.jpg'
import Medal from '../img/medal.jpg'
import Dancer from '../img/dancer.jpg'
import Group from '../img/group.jpg'
import Photo from '../img/photo.jpg'

const Description = () => {
    return (
        <React.Fragment>
            <div className="about-history">
                <Container>
                    <div className="title pt-5">A little bit about my history...</div>
                    <div className="my-history mt-5">
                    Since I was a child, I was a very enthusiastic person... in everything I did and wanted to do. Leaving aside part of my childhood, my first passion came to me when I was 11 years old, it was TaeKwonDo.<br/> 

                    <Row className="mt-4 mb-4">
                        <Col lg="4" md="4" sm="12">
                            <img className="imagen-1" src={Tae}/>
                        </Col>
                        <Col lg="5" md="5" sm="12">
                            <img className="imagen-2 mt-4" src={Medal}/>
                        </Col>
                        <Col lg="3" md="3" sm="12">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="about-me_option mt-4">
                                    These are some of the photos I could find from these years, not good looking at all!
                                </div>
                            </div>
                        </Col>
                    </Row>

                    I practiced for several years and made many friends that lasted to this day. In the process I met a group of dancers who inspired me and then I decided to reach them to the point that I came to teach them and be their guide in various events, unforgettable memories.<br/>

                    <Row className="mt-4 mb-4">
                        <Col lg="4" md="4" sm="12">
                            <img className="dancer" src={Dancer}/>
                        </Col>
                        <Col className="mt-4" lg="8" md="8" sm="12">
                            <img className="group" src={Group}/>
                        </Col>
                    </Row>

                    After a few years when I had to decide what to do with my life and/or future, I found a new passion, programming. I started without any advice and after getting to know about the mistakes I did, I started following experienced developers and asking them questions, many of them unusual, according to them but really helpful for my carreer development later on. Despite attending college to study something related, I realized how inefficient and time consuming (and money grabbing) it was. I decided to stop (or pause) and continue learning on my own, taking online courses and other stuff I realized that it was much more efficient, after that I started working as a freelancer for different clients which gave me real experience working on real projects, turning myself into a Full Stack Web Developer for the next years.

                    <Row className="d-flex justify-content-center mt-5">
                        <Col lg="5" md="5" sm="12">
                            <img className="photo-1" src={Photo}/>
                        </Col>
                    </Row>

                    <div className="title mt-5">
                        Skills & Tools I Work With
                    </div>

                    <div className="skills mt-5">
                        <Container>
                            <Row>
                                <Col lg="6" sm="12">
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS / BEM & Sass</li>
                                        <li>Bootstrap 4</li>
                                        <li>JavaScript</li>
                                        <li>jQuery</li>
                                        <li>React</li>
                                        <li>Reactstrap</li>
                                        <li>Redux</li>
                                        <li>Webpack</li>
                                        <li>Jest</li>
                                        <li>Web Sockets</li>
                                        <li>Google Cloud</li>
                                        <li>Heroku</li>
                                        <li>WordPress</li>
                                    </ul>
                                </Col>
                                <Col lg="6" sm="12">
                                    <ul>
                                        <li>PHP</li>
                                        <li>Laravel</li>
                                        <li>Symfony</li>
                                        <li>Node JS</li>
                                        <li>Express JS</li>
                                        <li>Next JS</li>
                                        <li>OOP</li>
                                        <li>MVC</li>
                                        <li>MySQL</li>
                                        <li>MongoDB</li>
                                        <li>PostgreSQL</li>
                                        <li>NPM</li>
                                        <li>Git & Github</li>
                                        <li>Linux</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    </div>

                    
                </Container>
            </div>
        </React.Fragment>
    )
}
export default Description;
