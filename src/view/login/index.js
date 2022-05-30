import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { publicApi } from '../../redux/actions'

const viewDefault = ({
    headerSettings,
    setHeaderSettings
}) => {
    useEffect(() => {
        
    })
  return (
    <div className='bg-grayFA h-screen'>

    </div>
  )
}
const mapStateToProps = (state) => ({

})
const mapDispatchToProps = {
    setHeaderSettings: publicApi.setHeaderSettings
}
export default connect(mapStateToProps, mapDispatchToProps)(viewDefault)