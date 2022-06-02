import {useEffect ,useState} from 'react';




const Test = () => {
    const [accData, setAccData] = useState({x:0, y:0, z:0});
    function handler(event){
        let x = event.acceleration.x;
        let y = event.acceleration.y;
        let z = event.acceleration.z;
        setAccData({x,y,z});
    }
    useEffect(() => {
        window.addEventListener('devicemotion', handler);
        return () => {
            window.removeEventListener('devicemotion', handler);
        }
    } )
    
    return (
    <div>
        <h1>x: {accData.x}</h1>
        <h1>y: {accData.y}</h1>
        <h1>z: {accData.z}</h1>
    </div>
    );
}

export default Test;