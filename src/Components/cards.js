import React from 'react';
import '../css/cards.css';
import {imagesData} from '../data/imagesData.js';
import {
  Card, Button, CardImg, CardTitle, CardDeck, CardBody
} from 'reactstrap';


class Cards extends React.Component {
  constructor() {
    super();
    this.state={
      random:null,
    }
    this.handleClick = this.handleClick.bind(this);
  }
min =1;
max=1000;
    handleClick = (dish) => {
    this.setState({random: this.min+ (Math.floor(Math.random()*(this.max-this.min)))});
  }

  render(){
    return (
      <div className='Cards' id='Cards'>

          <h1> <img src="https://img.icons8.com/nolan/64/trekking.png" alt="description of age" /><span>TREKS</span> IMAGE</h1>
          <CardDeck>
          {imagesData.map((dish,i)=>(
            <Card>
            <CardImg top width="100%" src={dish.image} />
            <CardBody>
            <CardTitle className='CardTitle'><span>Author:</span> {dish.author}</CardTitle>
            <Button onClick = {()=>this.handleClick(dish)}><a href={'/id:'+i+'/'+this.state.random+'/info'} className="myButton">
            Download
            </a></Button>
            </CardBody>
            </Card>
          ))}

    </CardDeck>
      </div>
    );
  }

}


export default Cards;
