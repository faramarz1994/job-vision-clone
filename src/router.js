import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Header  from "./components/header";
import { publicApi } from "./redux/actions";
import Home from "./view/home";
import Login from './view/login'

const Router = ({ lang, loadData }) => {
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" exact element={<Home headerSettings={{shown: true}}/>} />
          <Route path="/login" element={<Login headerSettings={{shown: false}}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const mapStateToProps = (state) => ({
  lang: state.publicApi.lang,
});

const mapDispatchToProps = {
  loadData: publicApi.loadData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Router);
