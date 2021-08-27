import React from 'react';

import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    return (
      <Modal show={this.props.ShowModal} onHide={this.props.CloseModal}>
      <Modal.Header closeButton>
        <Modal.Title> 
          {this.props.title}
          </Modal.Title>
      </Modal.Header>
      <img src= {this.props.beast.image_url} alt= {this.props.beast.title}/>
      <Modal.Body>
      {this.props.beast.description}
      </Modal.Body>
    </Modal>
    );
  }
}

export default SelectedBeast;
