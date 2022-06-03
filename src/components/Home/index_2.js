import {useEffect ,useState} from 'react';




const Test = () => {
    const [accData, setAccData] = useState({x:0, y:0, z:0});
    function handler(event){
        let x = event.accelerationIncludingGravity.x;
        let y = event.accelerationIncludingGravity.y;
        let z = event.accelerationIncludingGravity.z;

        console.log(x,y,z);
        setAccData({x:x,y:y,z:x});
    }
    useEffect(() => {
        // ask for permission to use the accelerometer
        if(window.DeviceMotionEvent){
            window.addEventListener('devicemotion', handler ,false);
        }
        return () => {
            window.removeEventListener('devicemotion', handler);
        }
    } );
    
    return (
    <div>
        <h1>x: {accData.x}</h1>
        <h1>y: {accData.y}</h1>
        <h1>z: {accData.z}</h1>
    </div>
    );
}

export default Test;