import React from 'react';

class Son extends React.Component{
  constructor (props) {
    super(props);
    console.log(props);
  }

  render (){
    return (
      <h1>im son,my father name {this.props.name}</h1>
    );
  }

  componentDidMount() {
    this.props.getName("Tom");
  }
}

export default Son;
