import React ,{useState  } from "react";
import parser from "ua-parser-js";


function Home(){
    const [hasSensors, setHasSensors] = useState(false);
    const [touch , setTouch] = useState(false);

    
    return(
        <div className="home__container">
            <div>
                <h1>Attributes</h1>
                <p>Has Sensors : {window.DeviceMotionEvent ? "Yes" : "No"}</p>
                <p>Touch Support : {window.TouchEvent ? "Supported": " Not Supported"}</p>
                <p>Browser Name : {parser(navigator.userAgent).browser.name}</p>
                <p>Browser version : {parser(navigator.userAgent).browser.version}</p>
                <p>OS Name : {parser(navigator.userAgent).os.name}</p>
                <p>OS version : {parser(navigator.userAgent).os.version}</p>
                <p>Device model : {parser(navigator.userAgent).device.model}</p>
                <p>Device type : {parser(navigator.userAgent).device.type }</p>   
            </div>
        </div>
    )
}
export default Home;