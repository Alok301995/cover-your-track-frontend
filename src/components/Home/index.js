import React ,{useState ,useEffect } from "react";
import parser from "ua-parser-js";
import Acc from "../Accelorometer/index";


function Home(){
    const [hasSensors, setHasSensors] = useState(false);
    const [touch , setTouch] = useState(false);

    function handleSensorChange(event) {
        console.log(event.accelerationIncludingGravity.x);
        console.log("hello sensors ")
    }

    useEffect(() => {
        window.addEventListener('devicemotion' ,handleSensorChange)
        return () =>{
            window.removeEventListener('devicemotion' ,handleSensorChange);
        }
});
    return(
        <div className="home__container">
            <div>
                <h1>Cover Your Tracks</h1>
                <p>Has Sensors {hasSensors ? "Yes" : "No"}</p>
                <p>Touch Support {touch ? "Supported": " Not Supported"}</p>
                {/* <div>
                    <p>Accelorometer Reading</p>
                    <Acc/>
                </div> */}
                <p>Browser Name : {parser(navigator.userAgent).browser.name}</p>
                <p>Browser version : {parser(navigator.userAgent).browser.version}</p>
                <p>OS Name : {parser(navigator.userAgent).os.name}</p>
                <p>OS version : {parser(navigator.userAgent).os.version}</p>
                <p>Device model : {parser(navigator.userAgent).device.model}</p>
                <p>Device type : {parser(navigator.userAgent).device.type }</p>
                
                

                
            </div>
            <div>
                <button onClick={(event) => {
                    event.preventDefault();
                    if(window.DeviceMotionEvent){
                        setHasSensors(true);
                    }
                    else{
                        setHasSensors(false);
                    }
                    // check if the device has the gyroscope
                    
                    // check for touch support
                    if(window.TouchEvent){
                        setTouch(true);
                    }
                    else{
                        setTouch(false);
                    }
                }}>Check sensors</button>
            </div>
        </div>
    )
}
export default Home;