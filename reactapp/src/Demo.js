import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

//functional component based 
const Demo =({name})=>{
  return (<div className="style">
      <h1>this is react {name}</h1>
      <p>Welcome to my channel</p>
    </div>)
  }








// class component based
/*
class Demo extends Component {
  render() {
    return (<div className="style">
      <h1>this is react {this.props.name}</h1>
      <p>Welcome to my channel</p>
    </div>)
  }
}*/
export default Demo;