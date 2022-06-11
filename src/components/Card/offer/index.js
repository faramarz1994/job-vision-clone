import React from "react";

import { BsHeart } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { connect } from "react-redux";
import { salaryScales } from "../../../constants/salaryScales";
import offerActions from "../../../redux/actions/offers";

const OfferCard = ({ offer, info, setOfferInfo }) => {
  return (
    <div className={`${ offer.id == info?.id ? 'scale-110 translate-x-5 shadow-xl my-3 ' : 'shadow-md my-1'} w-full transition-transform rounded-lg  bg-white  flex items-center cursor-pointer p-5
     `}
     onClick={() => setOfferInfo(offer.id)}>
      <img src={offer.icon} className={`w-12 ${ offer.id !== info?.id && 'grayscale'} `} />
      <div className="w-full flex flex-col pr-2">
        <div className="w-full flex items-center justify-between ">
          <p className="font-black tracking-tighter text-sm">{offer.title}</p>
          <div className="flex items-center text-blueF2 text-lg">
            <MdOpenInNew className="ml-1 text-xl" />
            <BsHeart />
          </div>
          
        </div>
        <div className="w-full my-3 mt-4 flex items-center justify-between">
            <p className="text-xs">{offer.companyName}</p>
            {!offer.adaptive && 
                <p className="text-xs text-gray73 tracking-tight">{salaryScales.find(itm => itm.id == offer.salaryScaleId).title}</p>
            }
        </div>
        <div className="w-full my-1 mt-0 flex items-center justify-between">
            <p className="text-xs text-grayB2 tracking-tighter">{offer.location}</p>
            
                <p className="text-xs text-grayB2 tracking-tight">{offer.daysPast == 0 ? 'امروز' : offer.daysPast == 1 ? 'دیروز' : `${offer.daysPast} روز پیش`}</p>
            
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
    info: state.offersStates.info
});
const mapDispatchToProps = {
    setOfferInfo: offerActions.setOfferInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
