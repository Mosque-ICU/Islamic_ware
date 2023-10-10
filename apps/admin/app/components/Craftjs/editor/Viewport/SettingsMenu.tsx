import React from 'react'

function SettingsMenu({ close }) {
  return (
    <>
      <div className="modal-center">
        <div className="h-[85vh] w-[800px] p-4">
          <h2 className="text-2xl font-bold">Page Settings</h2>
        </div>
      </div>
      <div onClick={close} className="modal-overlay"></div>
    </>
  )
}

export default SettingsMenu
