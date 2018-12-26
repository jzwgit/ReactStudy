import React,{Component} from 'react';

class ProductTitleRow extends Component {
  render() {
    return <tr><th colSpan="2">{this.props.title}</th></tr>;
  }
}
export default ProductTitleRow;
// 面试问题：
// 1、回调函数：子组件往父组件传值
// 2、闭包的原理
// 3、原型和原型链
// 4、原型链、函数的继承
// 5、字符串转数组，数字类型转字符串
// 6、es6的新特性
// 7、React受控组件的写法
// 8、React状态提升的作用和状态修改的方法
// 9、router有几种类型的组件，分别是什么？
// 10、redux的核心概念
// 11、redux的三大原则
// 12、redux Action的作用
