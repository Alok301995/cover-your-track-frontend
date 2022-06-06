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
    return (
        <div>
            <p>Values : {props.state.x}</p>
        </div>
    );
}


export default AcclerometerReading;