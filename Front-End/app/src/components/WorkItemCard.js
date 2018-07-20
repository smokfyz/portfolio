import React, { Component } from 'react'
import SiteImg from '../assets/images/site.jpg'
import GitHub from '../assets/images/github.png'

class WorkItemCard extends Component {
    render() {
        return (
            <div className="item">
                <img src={SiteImg} alt="Site" />
                <h1>We Band(Social Network)<span className="github"><img  src={GitHub} alt="GitHub" /></span></h1>
                <h2>Using:</h2>
                <div className="tag react">React</div>
                <div className="tag django">Django</div>
                <div className="tag python">Python</div>
            </div>
        )
    }
}

export default WorkItemCard