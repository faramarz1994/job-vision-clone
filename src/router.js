import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicApi } from "./redux/actions";


const Router = ({
    lang,
    loadData
}) => {
    useEffect(() => {
        loadData()
    }, [])
    return (
       
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact 
                    // element={}
                     />
                </Routes>
            </BrowserRouter>
        
    )
}

const mapStateToProps = (state) => ({
   lang: state.publicApi.lang,
});

const mapDispatchToProps = {
    loadData: publicApi.loadData,
    
};
 export default connect(mapStateToProps, mapDispatchToProps)(Router);