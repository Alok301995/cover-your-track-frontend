import {useEffect ,useState} from 'react';




const Test = () => {
    const [accData, setAccData] = useState({x:0, y:0, z:0});
    const [gyro , setGyro] = useState(false);
    function handler(event){
        if(window.DeviceOrientationEvent){
            setGyro(true);
            window.addEventListener('deviceorientation', function(event){
                setAccData({x:event.gamma, y:event.beta, z:event.alpha});
            });
        }
    }
    useEffect(() => {
        // ask for permission to use the accelerometer
        async function getPermission(){
            const response = await DeviceOrientationEvent.requestPermission();
            if(response === 'granted'){
                handler();
            }
            
        }
        getPermission();
        return () => {
            window.removeEventListener('deviceorientation',handler);
        }
    } )
    
    return (
    <div>
        <h1>Gyro supported : {gyro ? "Yes" :"No" }</h1>
        <h1>x: {accData.x}</h1>
        <h1>y: {accData.y}</h1>
        <h1>z: {accData.z}</h1>
    </div>
    );
}

export default Test;