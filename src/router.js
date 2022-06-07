import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllowNotifications from "./components/AllowNotif";
import  Header  from "./components/header";
import { publicApi, userAction } from "./redux/actions";
import Home from "./view/home";
import Jobs from "./view/jobs";
import Login from './view/login'

const Router = ({ notificationStatus, loadUserData }) => {
  useEffect(() => {
    loadUserData();
    
  }, []);
  const date = new Date().getTime();

  return (
    <>
      {(notificationStatus.allowed == false || notificationStatus.nextTry <= date) ? <AllowNotifications /> : <> </>}
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" exact element={<Home headerSettings={{shown: true}}/>} />
          <Route path="/jobs"  element={<Jobs headerSettings={{shown: true}}/>} />
          <Route path="/login" element={<Login headerSettings={{shown: false}}/>} />
        </Routes>

      </BrowserRouter>
    </>
  );
};

const mapStateToProps = (state) => ({
  lang: state.publicApi.lang,
  notificationStatus: state.userStates.notification,
});

const mapDispatchToProps = {
  loadUserData: userAction.loadUserData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Router);
