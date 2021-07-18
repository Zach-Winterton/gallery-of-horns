import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      data: data,
      selectedBeast: {},
    }
  }

  ShowModal = () => {
    this.setState({
      showModal: true,
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
        />
        <Footer />
      </>
    );
  }
}

export default App;
