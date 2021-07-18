import React from 'react';

import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    return (
      <Modal show={this.props.ShowModal} onHide={this.props.CloseModal}>
      <Modal.Header closeButton>
        <Modal.Title> hello
          {this.props.title}
          </Modal.Title>
      </Modal.Header>
      <img src= {this.props.image_url} alt= {this.props.title}/>
      <Modal.Body> description
      {this.props.description}
      </Modal.Body>
    </Modal>
    );
  }
}

export default SelectedBeast;
