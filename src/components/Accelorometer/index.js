import ReactAccelorometerValue from 'reactaccelerometervalue';


const AcclerometerReading = () => {
    return (
    <div>
        <ReactAccelorometerValue>
            <List></List>
        </ReactAccelorometerValue>

    </div>
    );
}

const List =(props) => {
    console.log(props.state.x);
    return (
        <div>
            <p>X : {props.state.x}</p>
            <p>Y : {props.state.y}</p>
            <p>Z : {props.state.z}</p>
        </div>
    );
}


export default AcclerometerReading;