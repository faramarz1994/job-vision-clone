import React from 'react'
import { Link } from 'react-router-dom'
import { AiTwotoneLock } from 'react-icons/ai';

const LockedItem = ({
    title,
    className
}) => {
  return (
    <div className={`${className } bg-white w-1/2 max-w-3xl flex items-center flex-col rounded-lg`}>
        <h1 className='p-5 border-b border-gray-200 rounded-t-xl w-full text-right font-bold text-base'>{title}</h1>
        <div className='flex flex-col blur w-full p-5 h-52 justify-center  px-16'>
            <div className='w-full mt-4 flex items-center justify-between'>
                <p>ijjwekfwe <br /> dijsdiojfsdifj</p>
                <p>ijjwekfwe <br /> dijsdiojfsdifj</p>
            </div>
            <div className='w-full my-4 mt-10 flex items-center justify-between'>
                <p>ijjwekfwe <br /> dijsdiojfsdifj</p>
                <p>ijjwekfwe <br /> dijsdiojfsdifj</p>
            </div>
        </div>
        <Link to='/login' className='flex items-center flex-col text-center absolute p-5 h-52 justify-center  mt-16 '>
           <p className='text-gray-700 text-sm font-bold w-72'> جهت مشاهده {title} خود وارد حساب کاربری شوید.</p>
           <h3 className='text-3xl mt-2 text-yellow-400'>< AiTwotoneLock /></h3>

        </Link>
    </div>
  )
}

export default LockedItem