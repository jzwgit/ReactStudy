import React from 'react';
import Son from './son';

class Father extends React.Component{
  constructor() {
    super();
    this.getName = this.getName.bind(this);

    this.state = {
      name: null
    };
  }

  getName(name) {
    console.log('get name of my son.');
    this.setState({
      name: name
    });
  }

  render(){
    return (
      <div>
        <h1>Im father my son;</h1>
        <Son name="Zhangsan" getName={this.getName}/>
	<h1>This is my son, his name is {this.state.name}</h1>
      </div>
    );
  }
}
export default Father;
