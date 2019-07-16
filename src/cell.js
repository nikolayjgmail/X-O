import React, {Component} from 'react';

class Cell extends Component{
    state={
        value:""


    };


    onclicK=()=>{
      this.props.onclick(this.props.id)
        this.setState({value: this.props.value})
    };
    render(){


        return(
            <div className="cell" onClick={!this.state.value  ? this.onclicK : null} id={this.props.id}>
             <h1> {this.state.value} </h1>
            </div>
        )



    }

}

export default Cell