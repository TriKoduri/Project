import React from "react";
class Eight extends React.Component{
    count=20;
    name="ReactJs";
    constructor(){
        super();
        this.state={
            number:1
        };
        console.log("Constructor is called ",this.count);
    }
    componentDidMount(){
        console.log("Mounted",this.count);
        console.log(this.state);
    }
    componentWillUpdate(){
        console.log("Will be updated")
    }
    componentWillUnmount(){
        console.log("Will Be Unmounted");
    }
    funcEightBinClick=()  =>{
        console.log("Button Clicked",this.count+1);
        this.setState({number: this.state.number+1});
    }

render(){
    return(
            <div>
                <h2>Trisha {this.count} {this.name} </h2>
                <button type="button" className="btn btn-primary" onClick={this.funcEightBinClick}>Click Here</button>
            </div>
    );
}
}
export default Eight;