import React from 'react'

const Select = ({
    options,
    onChange,
    customClass
}) => {
  return (
    <select onChange={e => onChange(e.target.value)} className={`${
        customClass ? customClass : "w-full"
      } bg-gray-100 text-xs py-3 px-3 rounded border border-gray-200 outline-blue-300
    focus:bg-white focus:text-black57`}>
        {
            options.map((option) => <option value={option.id} key={option.value + option.id}>
                {option.value}
            </option>)
        }
    </select>
  )
}

export default Select