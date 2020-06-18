import React from 'react'
import Placeholder from '../components/placeholder'
import Design from '../components/design'
import Applications from '../components/applications'

const Projects = () => {
    return (
        <React.Fragment>
            <Placeholder title="My Projects"/>
            <div className="about-me resize">
                <div className="title pt-5 pb-5">UI/UX Design</div>
                <Design/>
                <div className="title pt-5 pb-5">Websites & Web Applications</div>
                <Applications/>
            </div>
        </React.Fragment>
    )
}

export default Projects;