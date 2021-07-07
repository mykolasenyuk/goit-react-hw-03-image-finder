import React, { Component } from 'react';
import { toast } from 'react-toastify';

export default class SearchBar extends Component {
  state = {
    imageName: '',
  };
  handleNameChange = e => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.imageName.trim() === '') {
      return toast.error('Enter valid name,please!');
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleNameChange}
            className="SearchForm-input"
            type="text"
            value={this.state.imageName}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
