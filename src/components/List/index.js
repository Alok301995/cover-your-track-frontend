import React,{Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <ul>
                <li>Is it landscape:{this.props.state.landscape.toString()} </li>
                <li>x:{this.props.state.x}</li>
                <li>y:{this.props.state.y}</li>
                <li>z:{this.props.state.z}</li>
                <li>rotation alpha:{this.props.state.rotation.alpha}</li>
                <li>rotation beta:{this.props.state.rotation.beta}</li>
                <li>rotation gamma:{this.props.state.rotation.gamma}</li>
                </ul>
            </div>
        )
    }
}

export default List;