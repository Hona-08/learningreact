import React from 'react';
import ReactDom  from 'react-dom';

//stateless functional component
//always return JSX
//div / section / article or Fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting

function Greeting() {
  return (
    <div>
      <h1>Hello world</h1>
      <ul>
        <li>
        <a href='#'>hellow world</a>
        </li>
        <img src='' alt='' />
        <input type='text' name='' id='' />
      </ul>
    </div>
  );
}

//arrow function 
// const Greeting = () =>{
//   return React.createElement(
//   'di',
//   {},
//   React.createElement('h1', {}, 'hello world')
//   );
// };

ReactDom.render(<Greeting/>, document.getElementById('root'));