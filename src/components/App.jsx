import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
export default class App extends Component {
  state = {
    imageName: '',
    page: 1,
    images: [],
    modalIsOpen: false,
  };
  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  openModal = e => {
    this.setState({
      modalIsOpen: true,
    });
    console.log(e.currentTarget);
  };
  closeModal = () => this.setState({ modalIsOpen: false });

  render() {
    const { modalIsOpen } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          openModal={this.openModal}
          imageName={this.state.imageName}
          page={this.state.page}
        />
        <Button />
        {modalIsOpen && (
          <Modal onClose={this.closeModal}>
            <p>dfjhgzsdvcd</p>
          </Modal>
        )}
        <ToastContainer />
      </div>
    );
  }
}
