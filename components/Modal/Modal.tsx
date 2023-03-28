import { useState } from "react"

const Modal = (props: { children: React.ReactNode; onClose: () => void }) => {
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={props.onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="bg-white overflow-hidden">{props.children}</div>
      </div>
    </div>
  )
}

export default Modal
