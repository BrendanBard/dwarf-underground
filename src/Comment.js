import React, { Component } from 'react'
import './Comment.css'
import ArticleLink from './ArticleLink'
class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = { comment: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(ev) {
        this.setState({ comment: ev.target.value })
    }
    handleSubmit(ev) {
        ev.preventDefault()
        //this.state.comment.map(comment)
        const newState = { ...this.state }
        newState.comment.push(this.state.name)
        newState.name = ''
        this.setState(newState)
    }
    render() {

        return (
            <div className='row'>
                <form onSubmit={this.handleSubmit}>
                     <input type='text' value={this.state.comment} className='comment-input' onChange={this.handleChange} placeholder='Enter comment' />
                        <button className='button normal' type='submit' id="comment-submit">Submit</button>
                   
                </form>
                <ul className='no-bullet'>
                    {this.state.comment.map((comment) => <Comments comment={comment} />)}
                </ul>
            </div>
        )
    }
}

class Comments extends React.Component {
    render() {
        return (
            <li>
                <span>{this.props.comment}</span>
            </li>

        )
    }
}
export default Comment