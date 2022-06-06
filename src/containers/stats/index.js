import React from 'react'
import { connect } from 'react-redux';

import statsMan from '../../assets/img/Home_man.png';

const StatsContainer = ({
    stats
}) => {
    
  return (
    <div className='w-3/5 max-w-7xl mt-16'>
        <h1 className='text-lg font-bold tracking-tighter'>جاب ویژن از نگاه آمار</h1>
        <div className='flex items-center justify-between mt-8'>
            <img src={statsMan} />
            <div className='flex items-center flex-wrap justify-between w-1/2'>
                {
                    stats.map(({number, title, description}) => (
                        <div className='w-1/2 mt-4 flex items-center flex-col '>
                            <div className='p-4 w-60 hover:bg-white rounded cursor-default rounded-tr-3xl'>
                                <h1 className='text-xl font-black text-blueF2'>{number} +</h1>
                                <h2 className='text-black font-black tracking-tighter mt-3'>{title}</h2>
                                <p className='text-xs text-grayB2 leading-normal mt-1'>{description}</p>
                            </div>
                            </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
const mapStateToProps = state => ({
    stats: state.publicApi.stats,
})

export default connect(mapStateToProps)(StatsContainer)