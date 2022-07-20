import React,{ useState, useEffect, useContext } from "react";
import axios from 'axios';

import Register from "./components/Register";
import Header from "./components/Header";
import Table from "./components/Table";
import Login from "./components/Login";

import { UserContext } from "./context/UserContext";

const App = () => {
  const [message, setMessage] = useState("");
  const [token,] = useContext(UserContext);

  //var axios = require("axios");

  const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "content-type": "application/json"
      },
      url: "http://localhost:8000/api"
    };
   
    axios(requestOptions)
    .then(function (response) {   
      const data = response.data;   
      console.log(JSON.stringify(response.data));
      setMessage(data.message);
    })
    .catch(function (error) {
      console.log(error);
    });

    
  };

  useEffect(() => {
    getWelcomeMessage();
  }, []);

  return (
   <>
   <Header title={message} />
   <div className="columns">
    <div className="column"></div>
    <div className="column m-5 is-two-thirds">
      {
        !token ? (
          <div className="columns">
            <Register /> <Login />
          </div>
        ) : (
          <Table />
        )
      }
    </div>
    <div className="column"></div>
   </div>
   </>
  );
};

export default App;
