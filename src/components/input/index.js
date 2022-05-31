import React from 'react'

const Input = ({
type,
placeholder,
onChange,
customClass,
width,
id
}) => {
  return (
    <input 
    type={type ? type : 'text'}
    onChange={onChange}
    id={id ? id  : 0}
    placeholder={placeholder}
    className={`${customClass} w-${width ? width : '4/5'} bg-gray-100 text-xs py-3 px-3 rounded border border-gray-200 outline-blue-300
    focus:bg-white focus:text-black57`}
    />
  )
}

export default Input