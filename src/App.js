import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';
import './App.css';
import HornedBeast from './HornedBeast.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      data: data,
      selectedBeast: {},
    }
  }

  ShowModal = (beastImg) => {
    let beast = data.find(selectedBeast => selectedBeast.title === beastImg) 
    this.setState({
      showModal: true,
      selectedBeast: beast,
    });
  }

  CloseModal = () => {
    this.setState({
      showModal: false,
    });
  }

  render(){
    return (
      <>
        <Header />
        <Main data={data} ShowModal={this.ShowModal}/>
        <SelectedBeast 
        ShowModal={this.state.showModal}
        CloseModal={this.CloseModal}
        beast={this.state.selectedBeast}
        />
        <Footer />
      </>
    );
  }
}

export default App;
