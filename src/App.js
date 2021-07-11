import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <>
        <Header/>
        <Main
        title={"Caribou"}
        imageUrl={"https://images.ctfassets.net/pujs1b1v0165/1DPJqJOApRdGwM7nlgFWz5/737f2848161494c7d691445f098e28ac/A-Guide-to-Hunting-Caribou.jpg?w=1200&fit=fill"}
        description={"Herd of Caribou crossing a river"}
        />
        <Main
        title={"Markhor Goat"}
        imageUrl={"https://aadisalman.net/wp-content/uploads/2017/05/markhor-goat-animalcorner.co_.uk_.jpg"}
        description={"Markhor Goat relaxing in some hay"}
        />
        <Footer/>
      </>
    );
  }
}

export default App;
