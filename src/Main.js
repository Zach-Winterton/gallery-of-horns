import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';
class Main extends React.Component {

  render() {
    let gallery = [];
    data.forEach((itemInformation, index) => {
      let hornedAnimal = <HornedBeast
      key={index}
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
