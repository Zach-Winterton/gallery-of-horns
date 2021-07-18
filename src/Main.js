import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {

  render() {
    let gallery = [];
    this.props.data.forEach((itemInformation, index) => {
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
        <CardColumns>
        {gallery}
        </CardColumns>
      </main>
    );
  }
}
export default Main;
