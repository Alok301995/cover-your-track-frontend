
const List = (props) => {
    return (  
        <div>
            <p>Is it landscape:{props.state.landscape.toString()} </p>
            <p>x:{props.state.x}</p>
            <p>y:{props.state.y}</p>
            <p>z:{props.state.z}</p>
            <p>rotation alpha:{props.state.rotation.alpha}</p>
            <p>rotation beta:{props.state.rotation.beta}</p>
            <p>rotation gamma:{props.state.rotation.gamma}</p>
        </div>
            
    );
}
 
export default List;