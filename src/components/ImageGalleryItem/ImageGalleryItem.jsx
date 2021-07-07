import React from 'react';

export default function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  largeImageURL,
}) {
  return (
    <li key={id}>
      <img
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
