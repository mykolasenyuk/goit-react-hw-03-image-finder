import React from 'react';
import s from './ImageGelleryItem.module.css';

export default function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  largeImageURL,
  openModal,
}) {
  return (
    <li key={id} onClick={openModal} className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
}
