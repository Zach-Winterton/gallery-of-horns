import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';

class Main extends React.Component {

  render() {
    let gallery = [];
    data.forEach((itemInformation, index) => {
      let hornedAnimal = <HornedBeast
      key={index}
      title={itemInformation.title}
      imageUrl={itemInformation.imageUrl}
      description={itemInformation.description}
      />
      gallery.push(hornedAnimal);
    });

    return (
      <main>
        {gallery}
      </main>
    );
  }
}
export default Main;
