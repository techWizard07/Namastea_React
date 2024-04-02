import React from 'react'
import User from './User'

class About extends React.Component{
  constructor(){
    super()
    
  }
  componentDidMount(){
  }
  render(){
    return (
      <div>
          <h1>This is About Page!!!</h1>
          <User />
          
      </div>
    )
  }
}

export default About