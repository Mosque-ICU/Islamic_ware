import React from 'react'
import { Delete } from 'react-feather'
// import Delete from './icons/delete'
// import styles from './clickMenu.module.css'
function ClickMenu({
  items,
  title = '',
  position = { x: 0, y: 0 },
  close = () => {},
}: {
  items: any
  title?: any | null
  position: { x: number; y: number }
  close?: () => void
}) {
  const ref = React.useRef(null)

  const [filterName, setFilterName] = React.useState('')
  const [onDelete, setOnDelete] = React.useState(false)
  

  const handleClickOutside = (event: { target: any }) => {
    // @ts-ignore
    if (ref?.current && !ref.current.contains(event.target)) {
      close()
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  const filteredItems = () => {
    let curFilterName = filterName.toLowerCase()
    return items.filter((item: any) => {
      return item.label.toLowerCase().includes(curFilterName)
    })
  }

  return (
    <div
      ref={ref}
      style={
        position
          ? {
              top: position.y,
              left: position.x,
              position: 'absolute',
              zIndex: 99999,
            }
          : {}
      }
      className=" scaleIn items-center overflow-hidden overflow-hidden rounded-md border border-gray-200 bg-white p-2 drop-shadow-lg "
    >
      <input
        className="base-input mb-1  h-[32px]"
        placeholder="Search"
        type="text"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />

      {title && (
        <>
          <div className="text-violet11 mb-[5px] ml-[15px] text-[15px] font-bold">
            {title}
          </div>
          <hr />
        </>
      )}
      {filteredItems().map((item: any) => {
        return (
          <div
            key={item.label}
            style={{
              pointerEvents: item.disabled ? 'none' : 'auto',
              backgroundColor:
                onDelete && item.type === 'delete'
                  ? '#D54040'
                  : item.disabled
                  ? 'gray'
                  : 'inherit',
            }}
            onClick={
              item.type === 'delete' && !onDelete
                ? () => setOnDelete(true)
                : () => item.onClick()
            }
            className={` ${
              !onDelete ? 'hover-color' : ''
            }  group-data-[disabled]:text-mauve8 hover-text-in group pointer-events-auto relative mt-1 flex h-[25px] cursor-pointer select-none items-center rounded-[3px] bg-white px-[5px] pl-[12px] text-[13px] font-medium leading-none outline-none backdrop-blur-3xl hover:text-indigo-500 hover:opacity-90
            `}
          >
            {(item.type === 'delete' || item.icon) && (
              <div
                style={{
                  color:
                    onDelete && item.type === 'delete'
                      ? '#D54040'
                      : item.disabled
                      ? 'gray'
                      : 'inherit',
                  fontSize: 18,
                }}
                className="iconWrapper"
              >
                {item.type === 'delete' ? <Delete /> : item.icon}
              </div>
            )}

            <span
              className="text-[14px] "
              style={{
                marginLeft: item.icon || item.type === 'delete' ? 10 : 0,
                color:
                  onDelete && item.type === 'delete'
                    ? 'white'
                    : item.disabled
                    ? 'gray'
                    : 'inherit',
              }}
            >
              {item.label}
            </span>
            <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto pl-5 font-bold group-data-[highlighted]:text-white">
              {item.shortcut}
            </div>
            {/* {item.submenu && (
            <ContextMenu.Sub>
              <ContextMenu.SubTrigger className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:bg-violet9 data-[highlighted]:data-[state=open]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none">
                More Tools
                <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                  <ChevronRightIcon />
                </div>
              </ContextMenu.SubTrigger>
              <ContextMenu.Portal>
                <ContextMenu.SubContent className="border-mauve8 rounded-[3px] border bg-white shadow-md">
                  <div className="flex flex-col">
                    {item.submenu.map((item: any) => (
                      <div
                        key={item.label}
                        onClick={item.action}
                        className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none"
                      >
                        {item.icon && (
                          <div className="absolute left-0 top-0 flex h-full w-[25px] items-center justify-center">
                            {item.icon}
                          </div>
                        )}

                        {item.label}

                        <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                          {item.shortcut}
                        </div>
                      </div>
                    ))}
                  </div>
                </ContextMenu.SubContent>
              </ContextMenu.Portal>
            </ContextMenu.Sub>
          )} */}
            {item.seperator && <hr className="my-2" />}
          </div>
        )
      })}
    </div>
  )
}

export default ClickMenu
