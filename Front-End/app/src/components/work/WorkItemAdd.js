import React, { Component } from 'react'
import ApiContext from '../api/ApiContext'
import './Work.scss'

class WorkItemAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            tags: '',
            about: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        const api = this.props.api
        api.work.add({
            name: this.state.name,
            tags: this.state.tags,
            about: this.state.about
        })
        this.setState({
            name: '',
            tags: '',
            about: ''
        })
        event.preventDefault()
    }

    render() {
        return (
            <form className="add-work-form" onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                <input type="text" name="tags" placeholder="Tags" value={this.state.tags} onChange={this.handleChange}/>
                <textarea name="about" placeholder="About" value={this.state.about} onChange={this.handleChange}/>
                <input type="submit" value="Add" />
            </form>
        )
    }
}

export default props => (
    <ApiContext.Consumer>
        { api => <WorkItemAdd {...props} api={api} /> }
    </ApiContext.Consumer>
)