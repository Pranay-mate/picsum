import React from "react";
import {imagesData} from '../data/imagesData.js';
import '../css/CardDetails.css';


class CardDetails extends React.Component {
  constructor() {
    super();
    this.state ={
      dishId:null,
      author:null,
      image:null,
      height:null,
      width:null
       };
  }
  componentDidMount(){
    const dishId= window.location.pathname.slice(4,5);

  this.setState({dishId: dishId});
  //this.setState({author: imagesData[dishId].author});
  //this.setState({image: imagesData[dishId].image});
  //this.setState({height: imagesData[dishId].height});
  //this.setState({width: imagesData[dishId].width});

}
render() {

    return (

      <div className='CardDetails' id="CardDetails">
      <h1><img src="https://img.icons8.com/bubbles/84/000000/image.png" alt="description of image" />Downloaded Trek Image<img src="https://img.icons8.com/bubbles/84/000000/image.png"  alt="description of image" /></h1>
      <h4>Author: {this.state.author}</h4>
      <h4>Image: {this.state.image}</h4>
      <h4>Height: {this.state.height}</h4>
      <h4>Width: {this.state.width}</h4>
      </div>
    )
  }
}

export default CardDetails;
