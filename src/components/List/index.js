
const List = (props) => {
    return (  
        <div>
            <ul>
            <li>Is it landscape:{props.state.landscape.toString()} </li>
            <li>x:{props.state.x}</li>
            <li>y:{props.state.y}</li>
            <li>z:{props.state.z}</li>
            <li>rotation alpha:{props.state.rotation.alpha}</li>
            <li>rotation beta:{props.state.rotation.beta}</li>
            <li>rotation gamma:{props.state.rotation.gamma}</li>
            </ul>
            </div>
    );
}
 
export default List;