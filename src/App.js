import React from "react";
import  ReactDOM  from "react-dom/client";
import Work from "./components/work";

const Applayout=()=>{
    return(
    <Work/>
    );
}
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)