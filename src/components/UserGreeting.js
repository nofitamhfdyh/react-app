import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props){
        super(props)

        this.state = {
                isLoggedIn: false
        }
}

  render() {

        let message //menyimpan elemen ke dalam message (element variable approach)
        if (this.state.isLoggedIn){
                message = <div> Welcome Nofitaaaaaa</div>
        } else{
                message = <div> Welcome Guest</div>
        }

        return <div>{message}</div>

        // if (this.state.isLoggedIn) {
        //         return <div> Welcome Nupnup! </div>
        // } else {
        //         return <div> Welcome Guest... </div>
        // }
//     return (
//       <div>
//         <div>Welcome Nupnup!</div>
//         <div>Welcome Guest</div>
//       </div>
//     )
  }
}

export default UserGreeting