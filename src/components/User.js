import React from "react";

class User extends React.Component{

    constructor(){
        super();
        this.state={
            userInfo:{
              
        }
    }
}
    
async componentDidMount(){
       
        const data= await fetch("https://api.github.com/users/techWizard07");
        const jsonData=await data.json();
        
        this.setState({
            userInfo:jsonData
        })
       } 
    
    
    render()
    {
    
        const{avatar_url,name,location,login}=this.state.userInfo
        
        return(
           <div className="user-card">
            <img src={avatar_url} alt="" />
             <h1>{name}</h1>
            <h2>{location}</h2>
            <h3>{login}</h3>
           
           </div>
        )
    }
}

export default User;