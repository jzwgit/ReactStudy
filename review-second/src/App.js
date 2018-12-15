import React, { Component } from 'react';
import './App.css';

// Start : chapter 01 (Hello, world)
class HelloWorld extends Component {
  render(){
    return (
      <h1>Hello, world! </h1>
    );
  }
}
// End : chapter 01 (Hello, world)
// -------------------------------------------------------------------
// Start : chapter 02 (JSX简介)
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
class ElementText extends Component {
  render () {
    return (
      <h1> Hello, {formatName(user)}!</h1>
    );
  }
}
// End : chapter 02 (JSX简介)
// -------------------------------------------------------------------
// Start : chapter 03 (元素渲染)
class Tick extends Component {
  render() {
    return (
      <div>
	<h1>我去年买了个表</h1>
	<h2>现在时间：{new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
//setInterval(Tick, 1000);
// End : chapter 03 (元素渲染)
// -------------------------------------------------------------------
// Start : chapter 04 (组件 & Props)
class Welcome extends Component {
  render (){
    return (
      <h1>Hello, {this.props.name} </h1>
    );
  }
}
class Props1 extends Component {
  render() {
    return (
      <div>
	<Welcome name="张三" />
	<Welcome name="李四" />
	<Welcome name="王五" />
      </div>
    );
  }
}
function formatDate(date){
  return date.toLocaleDateString();
}
class Avatar extends Component {
  render(){
    return (
      <img className = "Avatar"
        src = {this.props.user.avatarUrl}
        alt = {this.props.user.name}
      />
    );
  }
}
class UserInfo extends Component {
  render () {
    return (
      <div className = "UserInfo" >
	<Avatar user={this.props.user} />
	<div className = "UserInfo-name">
          {this.props.user.name}
        </div>
      </div>
    );
  }
}
class Props2 extends Component {
  render() {
    return (
      <div className = "Comment" >
	<UserInfo user={this.props.author} />
	<div className = "Comment-text">
	  {this.props.text}
	</div>
	<div className = "Comment-date">
	  {formatDate(this.props.date)}
	</div>
      </div>
    );
  }
}
const comment = {
  date: new Date(),
  text: '这是一段测试的话',
  author: {
    name: 'Tom',
    avatarUrl: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=8db353e075310a55c424d9f28f7e2494/7aec54e736d12f2ec3bd677343c2d5628535686d.jpg'
  }
};
// End : chapter 04 (组件 & Props)
//--------------------------------------------------------------------
// Start : chapter 05 (State & 生命周期)
class Clock extends Component {
  constructor (props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick () {
    this.setState({
      date: new Date()
    });
  }
  render () {
    return (
      <div>
	<h1>Hello, world(chapter04)!</h1>
	<h2>It is {this.state.date.toLocaleTimeString()} .</h2>
      </div>
    );
  }
}
// End : chapter 05 (State & 生命周期)
// -------------------------------------------------------------------
// Start : chapter 06 (事件处理)
class ActionLink extends Component {
  handleClick(e) {
    //e是一个合成事件，React定义的
    e.preventDefault();//阻止默认行为
    console.log('The link war clicked.');
  }
  render () {
    return (
      <a href="#" onClick={this.handleClick}>
	click me
      </a>
    );
  }
}
class Toggle extends Component {
  constructor (props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
	{this.state.isToggleOn ? 'ON':'OFF'}
      </button>
    );
  }
}
class Popper extends Component {
  constructor(props){
    super(props);
    this.state = {name: 'Hello, World(chapter 06)'};
  }
  preventPop(name, e){ //事件对象e要放在最后
    e.preventDefault();
    alert(name);
  }
  render() {
    return (
      <div>
	<p>Hello</p>
	<a href="https://reactjs.org" onClick=
	  {this.preventPop.bind(this,this.state.name)}>
	  Click
	</a>
      </div>
    );
  }
}
// End : chapter 06 (事件处理)
// -------------------------------------------------------------------
// Start : chapter 07 (条件渲染)
class UserGreeting extends Component {
  render() {
    return (
      <h1>Welcome back ! </h1>
    );
  }
}
class GuestGreeting extends Component {
  render() {
    return (
      <h1>Please sign up. </h1>
    );
  }
}
class LoginButton extends Component {
  render (){
    return (
      <button onClick = {this.props.onClick} >
	Login
      </button>
    );
  }
}
class LogoutButton extends Component {
  render () {
    return (
      <button onClick = {this.props.onClick}>
	Logout
      </button>
    );
  }
}
class Greeting extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn){
      return (
	<UserGreeting />
      );
    }
    return (
      <GuestGreeting />
    );
  }
}
class LoginControl extends Component {
  constructor (props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick = {this.handleLogoutClick} />;
    } else {
      button = <loginButton onClick = {this.handleLoginClick} />;
    }

    return (
      <div>
	<Greeting isLoggedIn = {isLoggedIn} />
	{button}
      </div>
    );
  }
}








class App extends Component {
  render() {
    return (
      <div>
	<HelloWorld />
	<ElementText />
	<Tick />
	<Props1 />
	<Props2 date = {comment.date} text = {comment.text} author = {comment.author} />
        <Clock />
	<ActionLink />
	<Toggle />
	<Popper />
	<Greeting isLoggedIn = {true} />
	<LoginControl />
      </div>
    );
  }
}

export default App;
