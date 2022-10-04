import React, { Component } from "react";
import image from '../images/image.jpg';
import '../App.css'
export default class home extends React.Component
{
render(){
return (
  <div class="container-fluid no-padding">
        <img src = {image} width="100%" ></img>
    </div>
    
)
}
}