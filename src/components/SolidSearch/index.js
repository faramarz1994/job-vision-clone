import React, { useState } from 'react'
import { workGroups } from '../../constants/WorkGroups';
import Button from '../button';
import Input from '../input'
import Select from '../select';

const SolidSearch = ({

}) => {
    const [searchValue, setSearchValue] = useState('');
  return (
    <div className='w-3/5 flex items-center justify-between p-5 rounded-lg bg-white shadow-lg'>
        <Input 
        placeholder='عنوان شغلی و یا شرکت...' 
        onChange={e => setSearchValue(e.target.value)}
        value={searchValue} 
        customClass="rounded-lg h-12 w-1/3"
        />
        <Select options={workGroups} customClass='w-1/5 mx-2 rounded-lg' />
        <Select options={workGroups} customClass='w-1/5 mx-2 rounded-lg' />
        <Button title="جستجو در مشاغل" />
    </div>
  )
}

export default SolidSearch