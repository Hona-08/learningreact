import React from 'react';
import ReactDom  from 'react-dom';

//Nested components, React Tools

function Greeting() {
  return (
    <div>
      <Person/>
      <Message/>
    </div>
  );
}

const Person = () => <h2>Hona</h2>;
const Message = () => {
  return <p>my Message</p>
};

ReactDom.render(<Greeting/>, document.getElementById('root'));