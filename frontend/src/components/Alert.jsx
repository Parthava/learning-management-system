import React from 'react'

function Alert({type, children}) {
  return (
    <div>
      <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
        {children}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  )
}

export default Alert