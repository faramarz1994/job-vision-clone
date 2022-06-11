import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { workingTimes } from "../../../../constants/public";
import { benefits, jobForm } from "../../../../constants/jobFeatures";
import { BsCheckCircleFill } from "react-icons/bs";
const JobInfoLayout = ({ info }) => {
    
  const overAlls = [
    {
      title: "روز و ساعت کاری",
      content: workingTimes.find((itm) => itm.id == info.workingTimeId).title,
    },
    {
      title: "نوع همکاری",
      content: info.jobForms.map((itm, index) => (
        <span>
          {jobForm.find((item) => item.id == itm)?.title}{" "}
          {info.jobForms.length !== index + 1 && " - "}{" "}
        </span>
      )),
    },
    {
      title: "سفر کاری",
      content: "-",
    },
    {
      title: "مزایا و تسهیلات",
      content: info.benefitIds.map((itm, index) => (
        <span>
          {benefits.find((item) => item.id == itm)?.title}{" "}
          {info.benefitIds.length !== index + 1 && " - "}{" "}
        </span>
      )),
    },
  ];
  return (
    <div className="flex w-full flex-col items-center pb-20 my-10 px-8">
      <h1 className="text-xl tracking-tighter w-full text-right font-black">
        مشخصات موقعیت شغلی
      </h1>
      <div className="w-full flex items-center flex-wrap ">
        {overAlls.map((item, index) => (
          <div className="flex w-1/2 mt-8 flex-col ">
            <h1 className="text-md tracking-tighter">{item.title}</h1>
            <p className="text-sm tracking-tight mt-2 text-grayB2">
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <h1 className="text-xl mt-10 mb-6 tracking-tighter w-full text-right font-black">
        شاخص های کلیدی از نظر کارفرما
      </h1>
      {info.keyIndicator.map((indicator, index) => (
        <p
          key={`JOB_INDICATOR_${info.id}_${index}`}
          className="my-2 flex w-full text-right items-center text-sm"
        >
          <span className="mx-1 text-lg text-grayB2">
            <BsCheckCircleFill />
          </span>
          {indicator}
        </p>
      ))}

      <h1 className="text-xl mt-10 mb-6 tracking-tighter w-full text-right font-black">
        شرح شغل و وظایف
      </h1>
      <p className="text-sm  leading-relaxed ">{info.description}</p>
      <h1 className="text-xl mt-10 mb-6 tracking-tighter w-full text-right font-black">
        شرح شغل و وظایف
      </h1>
      {
          info.features.map((feature, index) => (
              <div className="flex items-center mt-1 text-sm w-full ">
                    <div className="flex items-center p-3 rounded text-gray73 font-bold bg-gray-200 w-1/3 ml-1 ">{feature.title}</div>
                    <div className="w-full p-3 bg-gray-200 rounded">{feature.value}</div>
                  </div>
          ))
      }
    </div>
  );
};
const mapStateToProps = (state) => ({
  info: state.offersStates.info,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(JobInfoLayout);
