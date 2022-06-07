import React from "react";

import { BsHeart } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { salaryScales } from "../../../constants/salaryScales";

const OfferCard = ({ offer }) => {
  return (
    <div className="w-full rounded-lg shadow-md bg-white my-1 flex items-center cursor-pointer p-5">
      <img src={offer.icon} className={`w-12`} />
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
            {!offer.adaptive && 
                <p className="text-xs text-grayB2 tracking-tight">{offer.daysPast == 0 ? 'امروز' : offer.daysPast == 1 ? 'دیروز' : `${offer.daysPast} روز پیش`}</p>
            }
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
