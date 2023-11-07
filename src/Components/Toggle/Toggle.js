import React from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
// import { themeContext } from "../../Context";

const Toggle = () => {

    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    // const handleClick = () => {
    //   theme.dispatch({ type: "toggle" });
    // };
  return (
    <div className="toggle" >
        <Moon />
        <Sun />
   
        <div className="t-button"></div>
    </div>
  )
}

export default Toggle
