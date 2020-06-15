import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'reactstrap';
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <div className="social-media">
                    <div className="showcase-main_text">Follow me on Social Media</div>
                    <div className="d-flex justify-content-center mt-3">
                        <a href="https://github.com/Abimael10"><FontAwesomeIcon className="fab fa-github" icon={faGithub}/></a>
                        <a href="https://web.facebook.com/juanabimael.santoscastillo.10"><FontAwesomeIcon className="fab fa-facebook" icon={faFacebook} /></a>
                        <a href="https://www.instagram.com/j_abimaelsc"><FontAwesomeIcon className="fab fa-instagram" icon={faInstagram} /></a>
                    </div>
                </div>
            </Container>

            <Container fluid="lg">
                <div className="showcase-main_text final pb-5">Website made with love by Juan Abimael Santos Castillo &copy; 2020</div>
            </Container>
        </div>
    );
}

//export default Footer;