import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      OnStandby: 0,
    }
  }

  addition = () => {
    this.setState({
      OnStandby: this.state.OnStandby + 1,
    })
  }

  subtract = () => {
    this.setState({
      OnStandby:  this.state.OnStandby - 1,
    })
  }

  render() {
    return (
      <Card>
      <Card.Img onClick={() => this.props.ShowModal(this.props.title)} style={{width:'250px'}} variant="top" src={this.props.imageUrl} alt="" title={this.props.title} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text id="love">
          {this.state.OnStandby}
          <img id="emoji heart" src="https://emoji.gg/assets/emoji/2594-pretzel-hearts.png" alt="pretzel heart" />
          <p>{this.props.description}</p>
          <Button variant="outline-primary" onClick={this.addition}>Ohhh Yeahhh!</Button>
          <Button variant="outline-secondary" onClick={this.subtract}>Where's the horns?!?</Button>
        </Card.Text>
      </Card.Body>
    </Card>
    )
  }
}
export default HornedBeast;
