import React from 'react';

export default function Button({ loadMore }) {
  return (
    <button type="button" onClick={loadMore}>
      Load more
    </button>
  );
}
