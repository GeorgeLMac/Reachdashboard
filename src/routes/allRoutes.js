import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "../store/layout/global.css"


import PropTypes from 'prop-types';
// import "./assets/scss/theme.scss";

import { layoutTypes } from "../constants/layout";

import VerticalLayout from "../components/VerticalLayout/";
import HorizontalLayout from "../components/HorizontalLayout/";
import NonAuthLayout from "../components/NonAuthLayout";




//

import Dashboard from "../pages/Dashboard/index.js";

//cadastros

//configuration

//calibragem


import Logout from "../pages/Authentication/Logout"

//Identificação

import AuthService from "../services/Auth.service";

const allRoutes = () => {
  // const [currentUser,setCurrentUser] = useState(undefined);
 


  const getLayout = (layoutType) => {
    let Layout = VerticalLayout;
    switch (layoutType) {
      case layoutTypes.VERTICAL:
        Layout = VerticalLayout;
        break;
      case layoutTypes.HORIZONTAL:
        Layout = HorizontalLayout;
        break;
      default:
        break;
    }
    return Layout;
  };

  const { layoutType } = useSelector((state) => ({
    layoutType: state.Layout.layoutType,
  }));

  const Layout = getLayout(layoutType);


  const mockUser = {
    name: "user",
    email: "user@gmail.com",
    DS_STATUS: "10"
  };

  const AuthService = {
    getCurrentUser: () => mockUser
  };

  const user = AuthService.getCurrentUser();
  

  let checkempresa = null;
  let DS_STATUS = 10;
  if(user != null){
    console.log(user)
    DS_STATUS = 10
 
    checkempresa = 2
 

 
}



  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     setCurrentUser(user);
  //   }
  // }, []);

  function publicRoutes() {
    return (
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/*" element={<Dashboard />} />
      
          
        </Routes>
      </React.Fragment>
    );
  }

  function privateRoutes() {
    return (
      <React.Fragment>
        <Layout>
          <Routes>

          <Route path="/logout" element={<Logout />} />
                    

          
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<Dashboard />} />
          </Routes>
        </Layout>
      </React.Fragment>
    );
  }

  return user ? privateRoutes() : publicRoutes();
};

export default allRoutes;
