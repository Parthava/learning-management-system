import React from 'react';

function Spinner() {
  return (
    <div class="text-center w-100 min__height">
      <div class="spinner-border loader" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner
