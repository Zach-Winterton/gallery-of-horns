import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchBarHorns: this.props.data
    }
  }
  hornFilter = e => {
    let list = this.props.data;
      if(e.target.value){
        list = list.filter(hornedAnimal => hornedAnimal.horns === parseInt(e.target.value));
      }
      this.setState({
        searchBarHorns: list,
      })
    
  }

  render() {
    let gallery = [];
    this.state.searchBarHorns.forEach((itemInformation, index) => {
      let hornedAnimal = <HornedBeast
      key={index}
      ShowModal={this.props.ShowModal}
      CloseModal={this.props.CloseModal}
      title={itemInformation.title}
      imageUrl={itemInformation.image_url}
      description={itemInformation.description}
      />
      gallery.push(hornedAnimal);
    });

    return (
      <main>
      <Form>
        <Form.Group>
              <Form.Label>Please choose the number of horns that you would like to be displayed:</Form.Label>
              <Form.Control as ="Select" custom onChange = {this.hornFilter}>
              <option value="">Show all horned creatures</option>
              <option value="1">One horned creatures</option>
              <option value="2">Two horned creatures</option>
              <option value="3">Three horned creatures</option>
              <option value="100">One hundred horned creatures</option>
              </Form.Control>
            </Form.Group>
           </Form>
        <CardColumns>
        {gallery}
        </CardColumns>
      </main>
    );
  }
}
export default Main;
