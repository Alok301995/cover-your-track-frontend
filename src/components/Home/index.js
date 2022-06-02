import React ,{useState} from "react";


// function to detect the device acceleration
function detectAcceleration(callback){
    if(window.DeviceMotionEvent){
        window.addEventListener('devicemotion', function(event){
            var x = event.accelerationIncludingGravity.x;
            var y = event.accelerationIncludingGravity.y;
            var z = event.accelerationIncludingGravity.z;
            var acceleration = Math.sqrt(x*x+y*y+z*z);
            if(acceleration > 10){
                callback(acceleration);
            }
        });
    }
}

function Home(){
    const [accelometer, setAccelometer] = useState(0);
    return(
        <div className="home__container">
            <div className="accelometer">
                <p>{accelometer}</p>
                <button onClick={(event) => {
                    event.preventDefault();
                    detectAcceleration(setAccelometer);
                }}>Start</button>
            </div>
        </div>
    )
}
export default Home;