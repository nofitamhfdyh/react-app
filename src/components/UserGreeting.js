import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props){
        super(props)

        this.state = {
                isLoggedIn: true
        }
}

  render() {
        if (this.state.isLoggedIn) {
                return <div> Welcome Nupnup! </div>
        } else {
                return <div> Welcome Guest... </div>
        }
//     return (
//       <div>
//         <div>Welcome Nupnup!</div>
//         <div>Welcome Guest</div>
//       </div>
//     )
  }
}

export default UserGreeting