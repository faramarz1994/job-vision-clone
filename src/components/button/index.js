import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({
    to,
    small,
    green,
    title,
    onClick
}) => {
  return (
    <Link 
    className={`${green ? 'bg-green6F' : 'bg-blueF2'} rounded-md py-3 px-6 text-white text-sm`} 
    to={to}
    onClick={onClick}>
        {title}
    </Link>
  )
}

export default Button