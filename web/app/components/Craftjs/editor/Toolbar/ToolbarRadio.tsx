import React from 'react'

export const ToolbarRadio = ({ value, label }: any) => {
  const radioClasses = `w-5 h-5 border-2 border-gray-400 rounded-full transition-all ${
    value ? 'bg-blue-500 border-transparent' : ''
  }`

  return (
    <label className="text-base">
      <input
        type="radio"
        className={radioClasses}
        checked={value}
        onChange={() => {
          // Handle radio button change event
        }}
      />
      <span className="ml-2">{label}</span>
    </label>
  )
}
