import React, { Component, Fragment } from 'react'
import WorkItemList from './WorkItemList'
import WorkItem from './WorkItem'
import ApiContext from '../api/ApiContext'
import './Work.scss'

class Work extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentItem: ''
        }

        this.showItemInfo = this.showItemInfo.bind(this)
    }

    showItemInfo(itemId) {
        const api = this.props.api
        api.work.get().then(snapshot => {
            this.setState({
                currentItem: snapshot.val()[itemId]
            })
        })
    }

    render() {
        return (
            <Fragment>
                <WorkItemList showItemInfo={this.showItemInfo}/>
                <WorkItem item={this.state.currentItem}/>
            </Fragment>
        )
    }
}

export default props => (
    <ApiContext.Consumer>
        { api => <Work {...props} api={api} /> }
    </ApiContext.Consumer>
)