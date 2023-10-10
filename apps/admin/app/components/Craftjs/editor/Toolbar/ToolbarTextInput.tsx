import React, { useEffect, useState } from 'react'
import { ChromePicker } from 'react-color'

export type ToolbarTextInputProps = {
  prefix?: string
  label?: string
  type: string
  onChange?: (value: any) => void
  value?: any
}

export const ToolbarTextInput = ({
  onChange,
  value,
  prefix,
  label,
  type,
  ...props
}: ToolbarTextInputProps) => {
  const [internalValue, setInternalValue] = useState(value)
  const [active, setActive] = useState(false)

  useEffect(() => {
    let val = value
    if (type === 'color' || type === 'bg') val = `rgba(${Object.values(value)})`
    setInternalValue(val)
  }, [value, type])

  return (
    <div
      style={{ width: '100%', position: 'relative' }}
      onClick={() => {
        setActive(true)
      }}
    >
      {(type === 'color' || type === 'bg') && active ? (
        <div
          className="absolute left-0 top-full z-50"
          style={{ marginLeft: '-5%' }}
        >
          <div
            className="fixed left-0 top-0 h-full w-full cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setActive(false)
            }}
          ></div>
          <ChromePicker
            color={value}
            onChange={(color) => {
              onChange(color.rgb)
            }}
          />
        </div>
      ) : null}
      <input
        type={type === 'number' ? 'number' : 'text'} //@ts-ignore
        className={`base-input ${props.className || ''}`}
        value={internalValue || ''}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            //@ts-ignore
            onChange(e.target.value)
          }
        }}
        onChange={(e) => {
          setInternalValue(e.target.value)
        }}
        {...props}
      />
    </div>
  )
}
