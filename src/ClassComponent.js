import React, {Component} from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        // this.props = props 

        this.state ={
            count: props.count,
            coffee: []
        }
    }

    componentDidMount() {
        console.log("component did mount")
        let url = 'https://api.sampleapis.com/coffee/hot'
        fetch(url)
        .then(res => res.json)
        .then(data => 
            this.setState(
            {
            count: this.state.count,
            coffee: data
            })
        )
       
    }

  
    render() {
        return (
            <>
            <h1>This is a class component {this.state.count}</h1>
            <button onClick = {() => {
                this.setState({count: this.state.count +1})
            }}>add one</button>
            </>
        )
    }

}


export default ClassComponent

