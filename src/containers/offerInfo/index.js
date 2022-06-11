import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import jobDetailEmpty from "../../assets/img/job-detail-empty-state.svg";
import Button from "../../components/button";
import { BsHeart } from "react-icons/bs";
import { RiShareLine } from "react-icons/ri";
import { salaryScales } from "../../constants/salaryScales";
import { HiUserGroup } from 'react-icons/hi'
import { hrScale } from "../../constants/public";
import { MdViewList } from 'react-icons/md';
import { brands } from "../../constants/brands";
import JobInfo from "./layouts/jobInfo";

const OfferInfo = ({ info }) => {
  const topRef = useRef()
  useEffect(() => {
    topRef?.current.scrollIntoView()
  }, [info])
    const layoutMenu = [
        {
            id: 0,
            title: 'درباره شغل'
        },
        {
            id: 1,
            title: 'درباره شرکت'
        },
        {
            id: 2,
            title: 'سوابق ارسال رزومه'
        }
    ]
    const [layoutNum, setLayoutNum] = useState(0); 
    const layouts = [
        <JobInfo />,
        
    ];
  return (
    <div
      className={`w-full sticky top-24 h-screen bg-white shadow rounded-lg mr-1 rounded-r-none flex flex-col items-center
     ${info.id && "overflow-x-hidden overflow-scroll"}`}
    >
      {!info.id && (
        <>
          <img ref={topRef} src={jobDetailEmpty} />
          <p className=" text-grayB2 text-xs w-60 text-center leading-loose">
            جهت مشاهده اطلاعات آگهی شغلی یکی از موارد را از سمت راست انتخاب
            کنید.
          </p>
        </>
      )}
      {info.id && (
        <>
          <div  className="w-full sticky top-0 bg-white z-10 p-5 flex items-start justify-between">
            <div  className="flex flex-col">
              <h3 className="text-lg font-bold tracking-tight">{info.title}</h3>
              <h4 className="text-xs tracking-tight text-blueF2 mt-4">
                {info.companyName}
              </h4>
            </div>
            <Button className="scale-75 -ml-5" green title="ارسال رزومه" />
          </div>
          <p ref={topRef}></p>
          <p  className="w-full text-right px-5  text-xs text-grayB2 tracking-tighter">
            {info.location}
          </p>
          <div className="flex w-full items-center justify-between p-5">
            <span className="text-xs text-grayB2">
              {info.daysPast == 0
                ? "امروز"
                : info.daysPast == 1
                ? "دیروز"
                : `${info.daysPast} روز پیش`} 
                {
                    !info.adaptive && ` / ${salaryScales.find(itm => itm.id == info.salaryScaleId).title}`
                }
            </span>
            <p className="flex items-center text-2xl text-blueF2">
              <RiShareLine className="text-gray-400 ml-3 text-3xl" />
              <BsHeart />
            </p>
          </div>
          <div className="flex items-center w-full border-t border-gray-300 bg-gray-100 p-5">

          <div className="w-3/5 flex items-center justify-between">

          <p className="text-xs flex items-center font-bold"><span className="text-xl text-gray-500 ml-2 pb-1"><HiUserGroup /></span> {hrScale.find(itm => itm.id == brands.find(item => item.companyId === info.companyId).hrScaleId)?.title}</p>
                <p className="text-xs flex items-center font-bold"><span className="text-xl text-gray-500 ml-2 pb-1"><MdViewList /></span> تکنولوژی</p>
         

          </div>
          </div>
          <div className="flex w-full sticky top-20 bg-white z-10 items-center border-b border-gray-200 p-5 pb-0">
                {
                    layoutMenu.map((item) => (
                        <p key={`LAYOUT_MENU__${item.id}`} 
                        onClick={() => setLayoutNum(item.id)}
                         className={`text-xs cursor-pointer   px-2 pb-5 ${item.id == layoutNum ? 'border-b-2 border-blueF2 text-blueF2' : 'text-gray73'}`}
                         >{item.title}</p>
                    ))
                }
          </div>
          {layouts[layoutNum]}
          
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  info: state.offersStates.info,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OfferInfo);
