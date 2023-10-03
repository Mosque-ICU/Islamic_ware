import React from 'react'

function Popover({ event, children, placement, show, onClose, plusY=0, plusX=0 }) {
  const windowWidth = window.innerWidth
  //   const windowHeight = window.innerHeight
  return (
    <>
      {show && (
        <div
          className="scaleIn fixed  inset-0 h-fit w-fit overflow-y-auto rounded-md bg-white p-2 shadow-2xl shadow-lg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          style={{
            top: event.clientY + plusY,
            left:
              windowWidth - event.clientX > 300
                ? event.clientX
                : event.clientX - 300,
            zIndex: 1001,
          }}
        >
          {children}
        </div>
      )}
      <div
        className="popover-overlay"
        style={{ display: show ? 'block' : 'none' }}
        onClick={onClose}
      ></div>
    </>
  )
}

export default Popover
