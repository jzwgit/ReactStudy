import React from 'react';
import ReactDOM from 'react-dom';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key = {number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const numbers2 = [2, 3, 4, 5, 6];
ReactDOM.render(
  <NumberList numbers = {numbers2} />,
  document.getElementById('root')
);

function ListItem(props) {
  //这里不需要指定key
  return <li>{props.value}</li>;
}

function NumberLists(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    //key应该在上下文中被指定
    <ListItem key={number.toString()}
    	      value={number} />
  );
  return (
    <ul>
    {listItems}
    </ul>
  );
}

const numbers3 = [3,4,5,6,7];

ReactDOM.render(
  <NumberLists numbers={numbers3} />,
  document.getElementById('root')
);

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
	<li key={post.id}>
	  {post.title}
	</li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
    <hr />
    {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React !'},
  {id: 2, title: 'Installation', content: 'You can install React from npm .'}
];

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);

function NumberList2(props) {
  const numbers =props.numbers;
  return (
    <ul>
    {numbers.map((number) =>
      <ListItem key={number.toString()}
      	        value={number} />
    )}
    </ul>
  );
}
const numbers4 = [5,6,7,8,9];
ReactDOM.render(
  <NumberList2 numbers = {numbers4} /> ,
  document.getElementById('root')
);


