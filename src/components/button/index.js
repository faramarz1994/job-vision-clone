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
    className={`${green ? 'bg-green6F' : 'bg-blueF2'} rounded-md ${small ? "py-2 px-16" : 'py-3 px-6'} text-white text-sm`} 
    to={to ? to : ''}
    onClick={onClick}>
        {title}
    </Link>
  )
}

export default Button