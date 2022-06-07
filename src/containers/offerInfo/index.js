import React from 'react';

import jobDetailEmpty from '../../assets/img/job-detail-empty-state.svg';

const OfferInfo = ({
    info,
}) => {
  return (
    <div className={`w-full min-h-screen bg-white shadow rounded-lg mr-1 rounded-r-none ${!info && 'flex flex-col items-center'}`}>
        {
            !info && <>
                <img src={jobDetailEmpty} />
                <p className=' text-grayB2 text-xs w-60 text-center leading-loose'>جهت مشاهده اطلاعات آگهی شغلی یکی از موارد را از سمت راست انتخاب کنید.</p>
            </>
        }
    </div>
  )
}

export default OfferInfo