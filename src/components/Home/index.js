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

// function to track mouse coordinates
// function trackMouse(callback){
//     if(window.DeviceMotionEvent){
//         window.addEventListener('mousemove', function(event){
//             callback({x:event.screenX, y:event.screenY});

//         });
//     }
// }

function Home(){
    const [accStatus , setAccStatus] = useState(false);
    // const [gyroStatus , setGyroStatus] = useState(false);
    useEffect(() => {
        detectAcceleration(setAccStatus);
    } ,[]);
    return(
        <div className="home__container">
            <div className="accelometer">
                {accStatus ? <p>Accelerometer is on</p> : <p>Accelerometer is off</p>}
                {/* {gyroStatus ? <p>Gyroscope is on</p> : <p>Gyroscope is off</p>} */}
            </div>
        </div>
    )
}
export default Home;