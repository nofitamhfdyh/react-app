import React, { Component } from 'react'

class Form extends Component {
        constructor(props){
                super(props)
                
                this.state = {
                        username: '',
                        comments: '',
                        topic:'nodejs'
                }
        }

        handleUsernameChange = event => {
                this.setState({
                        username: event.target.value
                })
        }

        handleCommentsChange = event => {
                this.setState({
                        comments: event.target.value
                })
        }

        handleTopicsChange = event => {
                this.setState({
                        topic: event.target.value
                })
        }

        handleSubmit = event => {
                alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
                event.preventDefault() // digunakan supaya halaman tidak otomatis ke refresh ketika sudah di klik OK
        }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
                <label> Username </label>
                <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
        </div>
        <div>
                <label> Comments</label>
                <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
                <label> Topic</label>
                <select value={this.state.topic} onChange={this.handleTopicsChange}> 
                        <option value="golang"> Golang</option>
                        <option value="react"> React</option>
                        <option value="nodejs"> NodeJS</option>
                </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form