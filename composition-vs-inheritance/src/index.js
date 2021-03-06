import React from 'react';
import ReactDOM from 'react-dom';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder -' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft !
      </p>
    </FancyBorder>
  );
}

ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
);

//组件中含有多个入口
function Contacts() {
  return <p>Contacts111111</p> 
}

function Chat() {
  return <p>Chat2222222222</p>
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function Dialog(props) {
  return (
    <FancyBorder color = "blue">
      <h1 className = "Diglog-title">
        {props.title}
      </h1>
      <p className = "Diglog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}
function WelcomeDialog2() {
  return (
    <Dialog
      title="Welcome2"
      message="Thank you for visting our spacecraft2!" />
  );
}
ReactDOM.render(
  <WelcomeDialog2 />,
  document.getElementById('root')
);
function FancyBorder2(props) {
  return (
    <div className={'FancyBorder FancyBorder-'+ props.color}>
      {props.children}
    </div>
  );
}
function Dialog2(props) {
  return (
    <FancyBorder2 color = "blue" >
      <h1 className = "Dialog-title" >
        {props.title}
      </h1>
      <p className = "Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder2>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}` );
  }
  render() {
    return (
      <Dialog2 title = "Mars Exploration Program"
              message="How should we refer to you?">
        <input value = {this.state.login}
               onChange={this.handleChange}/>
        <button onClick = {this.handleSignUp}>
          Sign Me Up !
        </button>
      </Dialog2>
    );
  }

}
ReactDOM.render(
  <SignUpDialog />,
  document.getElementById('root')
);

        
