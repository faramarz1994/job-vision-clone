import React from "react";
import { TbBellRinging } from "react-icons/tb";
import { connect } from "react-redux";
import { userAction } from "../../redux/actions";

const AllowNotifications = ({ allowNotification }) => {
  return (
    <div className="fixed flex items-end bottom-0 left-0 p-5 z-50 justify-center">
      <div className="bg-blueF2 flex flex-col justify-between text-gray-100 text-xs h-32 rounded-xl leading-normal w-72">
        <p className="p-3 ">
          در صورتی که می‌خواهید از آخرین فرصت‌های شغلی مرتبط، باخبر شوید روی
          اجازه می‌دهم کلیک کنید.
        </p>
        <div className="w-full flex justify-between">
          <button
            className="w-1/2 ml-1 h-10 flex items-center justify-center text-white bg-purpulFF rounded-md"
            onClick={() => allowNotification(true)}
          >
            اجازه میدهم
          </button>
          <button
            className="w-1/2 mr-1 h-10 flex items-center justify-center text-white bg-purpulFF rounded-md"
            onClick={() => allowNotification(false)}
          >
            بعدا انجام میدهم
          </button>
        </div>
      </div>
      <div className="bg-blueF2 w-14 h-14 text-3xl text-gray-100 mr-3 rounded-full flex items-center justify-center">
        <TbBellRinging />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  allowNotification: userAction.allowNotification,
};
export default connect(mapStateToProps, mapDispatchToProps)(AllowNotifications);
