import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
export default class App extends Component {
  state = {
    imageName: '',
    page: 1,
  };
  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} page={this.state.page} />
        <Button />
        <ToastContainer />
      </div>
    );
  }
}
