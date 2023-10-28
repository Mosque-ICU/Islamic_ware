import React from 'react'

function PrayerThemeSidebar({ theme, setTheme, close }) {
  return (
    <>
      <div className="sidebar-right slideLeft">
        <div className=" bg-gray-100 p-4">
          <h2>
            <span className="text-2xl font-bold">Theme Settings</span>
          </h2>
        </div>
        <div className="mt-2 flex h-full flex-col p-4">
          <h4 className=" ">Colours</h4>
          <hr className="my-2" />
          <label className="mb-1  text-sm tracking-wide text-gray-700">
            Background Colour
          </label>
          <input
            type="color"
            className=" w-full "
            value={theme.backgroundColor}
            onChange={(e) =>
              setTheme({ ...theme, backgroundColor: e.target.value })
            }
          />
          <label className="mb-1 mt-2  text-sm tracking-wide text-gray-700">
            Text Color
          </label>
          <input
            type="color"
            className=" w-full "
            value={theme.textColor}
            onChange={(e) => setTheme({ ...theme, textColor: e.target.value })}
          />
          <label className="mb-1 mt-2  text-sm tracking-wide text-gray-700">
            Highlight Colour
          </label>
          <input
            type="color"
            className=" w-full "
            value={theme.highlightColor}
            onChange={(e) =>
              setTheme({ ...theme, highlightColor: e.target.value })
            }
          />
          <label className="mb-1 mt-2  text-sm tracking-wide text-gray-700">
            Time Card Colour
          </label>
          <input
            type="color"
            className=" w-full "
            value={theme.timeCardColor}
            onChange={(e) =>
              setTheme({ ...theme, timeCardColor: e.target.value })
            }
          />
          <label className="mb-1 mt-2  text-sm tracking-wide text-gray-700">
            Time Card Text Colour
          </label>
          <input
            type="color"
            className=" w-full "
            value={theme.timeCardTextColor}
            onChange={(e) =>
              setTheme({ ...theme, timeCardTextColor: e.target.value })
            }
          />
          <h4 className="mb-2 mt-5 ">Font family</h4>
          <select
            className="base-input"
            onChange={(e) => setTheme({ ...theme, fontFamily: e.target.value })}
            value={theme.fontFamily}
          >
            {fontOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <h4 className="mb-2 mt-5 ">Template</h4>
          <select
            className="base-input"
            onChange={(e) => setTheme({ ...theme, template: e.target.value })}
            value={theme.template}
          >
            <option value="base">Base</option>
            <option value="tr">Tr</option>
          </select>
        </div>
      </div>
      <div
        className="sidebar-overlay"
        style={{ backgroundColor: 'transparent' }}
        onClick={close}
      ></div>
    </>
  )
}

export default PrayerThemeSidebar

const fontOptions = [
  { label: 'Helvetica', value: 'helvetica' },
  { label: 'Arial', value: 'arial' },
  { label: 'Times New Roman', value: 'times new roman' },
  { label: 'Courier New', value: 'courier new' },
  { label: 'Verdana', value: 'verdana' },
  { label: 'Georgia', value: 'georgia' },
  { label: 'Palatino', value: 'palatino' },
  { label: 'Garamond', value: 'garamond' },
  { label: 'Bookman', value: 'bookman' },
  { label: 'Comic Sans MS', value: 'comic sans ms' },
  { label: 'Trebuchet MS', value: 'trebuchet ms' },
  { label: 'Arial Black', value: 'arial black' },
  { label: 'Impact', value: 'impact' },
  { label: 'Lucida Sans Unicode', value: 'lucida sans unicode' },
  { label: 'Tahoma', value: 'tahoma' },
  { label: 'Courier', value: 'courier' },
  { label: 'Lucida Console', value: 'lucida console' },
]
