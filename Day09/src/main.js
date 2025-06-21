import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./Component/Header";
import Body from "./Component/Body";
import "./style.css";


function GithubProfile(){
// Header
// Body: 10 card show karenge

  return (
   <>
      <Header></Header>
      <Body></Body>
   </>
  )

   

}


ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);