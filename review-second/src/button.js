import React from 'react';
import './button.css';

import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';

const mySwiper = {
  height: "100px"
};

class Button extends React.Component {

  constructor () {
    super();
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      name : 'normal',
      isActive: false
    }

    console.log(Swiper);
  }


  changeColor(){
    this.setState({
      isActive: !this.state.isActive
    });
  }


  render (){
    return (
      <div className="main">
	<div 
	  className="swiper-container"
	  style={mySwiper} 
	  ref="swiper"
	  >
	  <div className="swiper-wrapper">
	    <div className="swiper-slide">slide 01</div>
	    <div className="swiper-slide">slide 02</div>
	    <div className="swiper-slide">slide 03</div>
	  </div>
	  <div className="swiper-pagination" ref="pagination"></div>
	</div>

	<button 
	  className={this.state.isActive ? "active" : "normal"} 
	  onClick={this.changeColor}  
	>
	  按钮1
	</button>
      </div>
    );
  }

  componentDidMount() {
    new Swiper(this.refs.swiper, {
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    });
    console.log(this.refs.swiper);
  }

}
export default Button;
