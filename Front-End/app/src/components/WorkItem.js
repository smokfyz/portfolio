import React, { Component } from 'react'
import SiteImg from '../assets/images/site.jpg'
import GitHub from '../assets/images/github.png'

class WorkItem extends Component {
    render() {
        return (
            <div className="info">
                <img src={SiteImg} alt="Site" />
                <h1>We Band(Social Network)<span className="github"><img  src={GitHub} alt="GitHub" /></span></h1><br />
                <h2>Using:</h2>
                <div className="tag react">React</div>
                <div className="tag django">Django</div>
                <div className="tag python">Python</div>
                <br />
                <div className="about">
                    <h2>About:</h2>
                    <p>Mission Statement: The Society for Information Technology and Teacher Education (SITE) is 
                    an international, academic association of teacher educators, researchers, practitioners 
                    and collaborating organizations across multiple disciplines.  SITE creates and 
                    disseminates knowledge enhancing teacher education through the use of technology 
                    across a global context.  SITE promotes research, scholarship, and innovation across 
                    its membership.  It is the only organization solely focused on integrating technology into 
                    teacher education.</p>
                </div>
            </div>
        )
    }
}

export default WorkItem