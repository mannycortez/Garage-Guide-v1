import React, { Component } from 'react'

class Comment extends Component {
    state = {
        text: ""
    }

    handleChange = event => {
        this.setState({ text: event.target.value});
    };

    render() {
        return (
            <div>
                <h2 className = "mt-5 mb-5"> Leave a Comment </h2>

                <form>
                    <input type = "text" onChange = {this.handleChange} />
                </form>
            </div>
        )
    }
}

export default Comment;