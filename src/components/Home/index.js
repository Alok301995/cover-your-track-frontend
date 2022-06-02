import React ,{useState , useEffect} from "react";


// function to detect the device acceleration
function detectAcceleration(callback){
    if(window.DeviceMotionEvent){
        window.addEventListener('devicemotion', function(event){
            let x = event.accelerationIncludingGravity.x;
            let y = event.accelerationIncludingGravity.y;
            let z = event.accelerationIncludingGravity.z;
            callback({x:x, y:y , z:z});
        });
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
    const [acceleration, setAcceleration] = useState({x:0, y:0 , z:0});
    useEffect(() => {
        detectAcceleration(setAcceleration);
    } ,[acceleration]);
    return(
        <div className="home__container">
            <div className="accelometer">
                <p>X: {acceleration.x}</p>
                <p>Y: {acceleration.y}</p>
                <p>Z: {acceleration.z}</p>
            </div>
        </div>
    )
}
export default Home;