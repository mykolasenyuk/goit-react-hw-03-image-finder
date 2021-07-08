import React from 'react';

export default function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  largeImageURL,
  openModal,
}) {
  return (
    <li key={id} onClick={openModal}>
      <img
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
