import React ,{useState } from "react";





function Home(){
    const [hasSensors, setHasSensors] = useState(false);
    const [acclerometer , setAcclerometer] = useState(false);
    const [gyro , setGyro] = useState(false);
    const [touch , setTouch] = useState(false);


    return(
        <div className="home__container">
            <div>
                <h1>Cover Your Tracks</h1>
                <p>Has Sensors {hasSensors ? "Yes" : "No"}</p>
                <p> Accelerometer {acclerometer ? "Present " : " Not Present"}</p>
                <p>Gyroscope {gyro ?" Present": "Not Present"}</p>
                <p>Touch Support {touch ? "Supported": " Not Supported"}</p>
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
                    if(window.DeviceMotionEvent){
                        setAcclerometer(true);
                    }
                    else{
                        setAcclerometer(false);
                    }
                    // check if the device has the gyroscope
                    if(window.DeviceOrientationEvent){
                        setGyro(true);
                    }
                    else{
                        setGyro(false);
                    }
                    
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