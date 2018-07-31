import React, { Component } from 'react'
import WorkItemCard from './WorkItemCard'

class WorkItemList extends Component {
    render() {
        return (
            <div className="portfolio">
                <WorkItemCard />
                <WorkItemCard />
                <WorkItemCard />
                <WorkItemCard />
            </div>
        )
    }
}

export default WorkItemList