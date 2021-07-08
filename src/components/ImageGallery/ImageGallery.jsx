import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import LoaderSpiner from '../Loader/Loader';
import api from '../../services/imageApi';
export default class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const newName = this.props.imageName;
    const page = this.props.page;
    console.log(page);
    if (prevName !== newName) {
      //   console.log('changed name');
      //   console.log('prev', prevName);
      //   console.log('this', newName);

      this.setState({ status: 'pending' });

      api
        .fetchImages(newName, page)
        .then(data => data.hits)
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { images, error, status, openModal } = this.state;

    if (status === 'idle') {
      return <div> Enter Image name</div>;
    }
    if (status === 'pending') {
      return <LoaderSpiner />;
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        <ul className="ImageGallery">
          {images.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              tags={tags}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              openModal={() => openModal(id)}
            />
          ))}
        </ul>
      );
    }
  }
}
