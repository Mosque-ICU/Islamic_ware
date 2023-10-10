import React from 'react'

export const ToolbarSection = ({ title, props, summary, children }) => {
  return (
    <div className="border-b border-t border-gray-300">
      <div className="px-6 py-4">
        <div className="grid grid-cols-4 items-center gap-3">
          <div className=" w-[120px]">
            <h5 className="text-sm font-medium text-gray-500">{title}</h5>
          </div>
          {summary && props ? (
            <div className="col-span-4 sm:col-span-3">
              <h5 className="text-right text-sm text-gray-500">
                {summary(
                  props.reduce((acc, key) => {
                    acc[key] = null // Replace with the corresponding prop value if available
                    return acc
                  }, {})
                )}
              </h5>
            </div>
          ) : null}
        </div>
      </div>
      <div className="border-t">
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  )
}
