import React from 'react'
import { connect } from 'react-redux'
import { workingTimes } from '../../../../constants/public'
import { benefits, jobForm } from '../../../../constants/jobFeatures'
const JobInfoLayout = ({
    info
}) => {
    const overAlls = [
        {
            title: 'روز و ساعت کاری',
            content: workingTimes.find(itm => itm.id == info.workingTimeId).title,
        },
        {
            title: 'نوع همکاری',
            content: info.jobForms.map((itm, index) => (<span>{jobForm.find(item => item.id == itm)?.title} {info.jobForms.length !== index + 1 && ' - '} </span>)),
        },
        {
            title: 'سفر کاری',
            content: '-',
        },
        {
            title: 'مزایا و تسهیلات',
            content: info.benefitIds.map((itm, index) => (<span>{benefits.find(item => item.id == itm)?.title} {info.benefitIds.length !== index + 1 && ' - '} </span>)),
        },
    ]
  return (
    <div className='flex w-full flex-col items-center my-10 px-8'>
            <h1 className='text-xl tracking-tighter w-full text-right font-black'>مشخصات موقعیت شغلی</h1>
            <div className='w-full flex items-center flex-wrap '>
                {
                    overAlls.map((item, index) => (
                        <div className='flex w-1/2 mt-8 flex-col '>
                            <h1 className='text-md tracking-tighter'>{item.title}</h1>
                            <p className='text-sm tracking-tight mt-2 text-grayB2'>{item.content}</p>
                        </div>
                    ))
                }
            </div>
            <h1 className='text-xl mt-10 tracking-tighter w-full text-right font-black'>شاخص های کلیدی از نظر کارفرما</h1>
            
    </div>
  )
}
const mapStateToProps = state => ({
    info: state.offersStates.info,
})
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(JobInfoLayout)