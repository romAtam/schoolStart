import React from 'react'

export default class ClassCounter extends React.Component {

state={count:0};
  incr=()=>{
  this.setState({count:this.state.count+1})
    }
     decr=()=>{
        this.setState({count:this.state.count-1})
    }
render(){
    return (
        <div>
            <h1 style={{color:'green'}}>{this.state.count}</h1>
            <button onClick={this.incr}>incr</button>
            <button onClick={this.decr}>decr</button>
        </div>
    )
}

}