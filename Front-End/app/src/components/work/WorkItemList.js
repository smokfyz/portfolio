import React, { Component } from 'react'
import ApiContext from '../api/ApiContext'
import WorkItemCard from './WorkItemCard'

class WorkItemList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            items: []
        }
    }

    componentDidMount() {
        this.setState({isLoading: true})

        this.props.api.work.get().then(snapshot => {
            this.setState({
                isLoading: false,
                items: snapshot.val()
            })
        })
    }

    render() {
        const list = Object.keys(this.state.items).map((key, id) => 
            <WorkItemCard key={id} item={this.state.items[key]} onClick={() => {
                this.props.showItemInfo(key)
            }} />
        )
        return (
            <div className="portfolio">
                { this.state.isLoading ? <h3>Loading</h3> : list }
            </div>
        )
    }
}

export default props => (
    <ApiContext.Consumer>
        { api => <WorkItemList {...props} api={api} /> }
    </ApiContext.Consumer>
)