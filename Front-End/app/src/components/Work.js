import React, { Component, Fragment } from 'react'
import WorkItemList from './WorkItemList'
import WorkItem from './WorkItem'
import './Work.scss'

class Work extends Component {
    render() {
        return (
            <Fragment>
                <WorkItemList />
                <WorkItem />
            </Fragment>
        )
    }
}

export default Work