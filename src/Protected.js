import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log("Token:", token);

    if (token) {
      setIsLoggedIn(true);
    } else {
      console.log("Navigating to login");
      navigate("/login");
    }
  }, [navigate]);

  return isLoggedIn ? <Component /> : null;
};

export default Protected;
