import React ,{useState , useEffect} from "react";


// function to detect the device acceleration
function detectAcceleration(callback){
    if(window.DeviceMotionEvent){
        window.addEventListener('devicemotion', function(event){
            if(event.accelerationIncludingGravity.x || event.accelerationIncludingGravity.y || event.accelerationIncludingGravity.z){
                callback(true);
            }
            
        });
    }
    else{
        callback(false);
    }
}
// function to check touch support
function detectTouchSupport(callback){
    if(window.TouchEvent){
        callback(true);
    }
    else{
        callback(false);
    }
}



function trackMouse(callback){
    if(window.DeviceMotionEvent){
        window.addEventListener('mousemove', function(event){
            callback({x:event.screenX, y:event.screenY});

        });
    }
}

function Home(){
    const [accStatus , setAccStatus] = useState(false);
    // const [gyroStatus , setGyroStatus] = useState(false);
    const [mouse , setMouse] = useState({x:0, y:0});
    const [isTouch , setIsTouch] = useState(false);
    useEffect(() => {
        detectAcceleration(setAccStatus);
        trackMouse(setMouse);
    } ,[]);
    return(
        <div className="home__container">
            <div className="accelometer">
                {accStatus ? <p>Accelerometer is on</p> : <p>Accelerometer is off</p>}
                {/* {gyroStatus ? <p>Gyroscope is on</p> : <p>Gyroscope is off</p>} */}
            </div>
            <div>
                <p>Mouse position: {mouse.x} , {mouse.y}</p>
            </div>
            <div>
                {isTouch ? <p>Touch is supported</p> : <p>Touch is not supported</p>}
            </div>
        </div>
    )
}
export default Home;