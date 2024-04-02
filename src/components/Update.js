import React, { Component } from 'react'

export default class Update extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log("Component is Mounted")
    }
    componentDidUpdate(){
        console.log("Component is updated")
    }
    componentWillUnmount(){
        console.log("Component is unmounted")
    }

  render() {

    return (
        
      <div>{this.state.count}
      <button onClick={()=>{
        this.setState({
            count:this.state.count + 1
        })
      }}>increse</button>
      </div>
    )
  }
}
