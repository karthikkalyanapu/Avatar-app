import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';


  class Avatar extends Component{
    constructor(){
      super();
      this.state ={
        name: "Welcome To Avatar World"
      }
    }
    namechange(){
      this.setState({name:"Suscribe to my Channel"})
        }
     render(){ 
        const avatarlistarray=[
      {
        id:1,
        name:"karthik",
        work:"Web Developer"
      },
      {
        id:1,
        name:"Arun",
        work:"Web Developer"
      },
      {
        id:1,
        name:"Srikanth",
        work:"Web Developer"
      },
      {
        id:1,
        name:"Chintu",
        work:"Web Developer"
      }
    

    ]
    const arrayMap= avatarlistarray.map((user,index)=>{
      return <AvatarList id={avatarlistarray[index].name} name={avatarlistarray[index].name} work={ avatarlistarray[index].work} />

    })
    

  return( <div className="mainpage">
    <h1>{this.state.name}</h1>
    {arrayMap}
    
          <button onClick={()=>this.namechange()}>Suscribe</button>
          </div>)
}

     }
  



  

export default Avatar;




/*<AvatarList id={avatarlistarray[0].name} name={avatarlistarray[0].name} work={ avatarlistarray[0].work} />
    <AvatarList  id={avatarlistarray[1].name} name={avatarlistarray[1].name} work={ avatarlistarray[1].work}/>
    <AvatarList  id={avatarlistarray[2].name} name={avatarlistarray[2].name} work={ avatarlistarray[2].work}/>
    <AvatarList  id={avatarlistarray[3].name} name={avatarlistarray[3].name} work={ avatarlistarray[3].work}/>*/