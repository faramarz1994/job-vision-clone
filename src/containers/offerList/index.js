import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import OfferCard from '../../components/Card/offer';
import offerActions from '../../redux/actions/offers';

const OfferList = ({
    getOffersList,
    list
}) => {
    useEffect(() => {
        getOffersList(0);
        
    }, [])
  return (
    <div className='w-3/5 flex flex-col items-center ml-1'>

        <div className='w-full bg-white flex items-center p-5 mb-1 rounded shadow-xs justify-between'>
            <p className='text-xs  text-gray73'>۲۴۷۶۹ فرصت شغلی فعال</p>
        </div>
        {
            list.map((offer, index) =>(
                <OfferCard offer={offer} />
            ))
        }
    </div>
  )
}
const mapStateToProps = state => ({
    list: state.offersStates.list,
});
const mapDispatchToProps ={
    getOffersList: offerActions.getOffersList,
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferList)