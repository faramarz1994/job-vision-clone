import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import FeatureCard from '../../components/Card/features'

const OurFeatures = ({
    features
}) => {
    useEffect(() => {
        console.log(features)
    })
  return (
    <div className='w-3/5 mt-10 max-w-7xl flex flex-wrap'>
        <h1 className='w-full text-center text-xl font-black pt-2 pb-4 tracking-tight'>ویژگی های متمایز جاب‌ویژن</h1>
        {
            features.map((feature, index) => (
                <FeatureCard feature={feature} key={`HOME_FEATURE__${index}`} />
            ))
        }
    </div>
  )
}
const mapStateToProps = state => ({
    features: state.publicApi.features,
})

export default connect(mapStateToProps)(OurFeatures)