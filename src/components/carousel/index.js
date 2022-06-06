import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
// import { brands } from '../../constants/brands';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { connect } from 'react-redux';

const BrandCarousel = ({
    brands
}) => {
  return (

      <ScrollingCarousel 
    //   rightArrow={<p>{'>'}</p>}
    //   leftArrow={<p>{'>'}</p>}
   
      show={3.5}
      className={`flex w-full bg-white mt-10 px-40 rounded-lg shadow p-4 py-10`}>
      {
            brands.map((brand) => (
                <div className='flex flex-col items-center w-40  mx-10'>
                    <img src={brand.icon} className="w-20 "/>
                    <h1 className='text-gray-600 my-2 font-bold'>{brand.title}</h1>
                    <p className='my-2 text-xs text-gray-400'>{brand.jobsOpen} موقعیت شغلی</p>
                </div>
            ))
        }
          </ScrollingCarousel>


  )
}
const mapStateToProps = state => ({
    brands: state.publicApi.companies,
})

export default connect(mapStateToProps)(BrandCarousel)