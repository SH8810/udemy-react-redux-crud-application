import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

//import { postEvent } from '../actions'
// class App extends Component {
//   render(){
//     const greeting = "Hi,Tom!";
//     const dom = <h1 className = "foo">{greeting}</h1>
//     return (
//       <React.Fragment>
//         <label  htmlFor = "bar">bar</label>
//         <input type = "text" onChange ={() => {console.log("I am clicked!")}} />
//       </React.Fragment>
//     );
//   }
// }

class EventsNew extends Component{

  render(){

    return(
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({events:state.events})
// const mapDispatchToProps = ({
//   postEvents
// })

export default connect(null, null)(EventsNew)
