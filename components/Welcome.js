
const Welcome = (props) => {
    return (
        <h1>Welcome to GeeksforGeeks {props.name} {props.age}</h1>
    );
}

const functionExample = () => {
    return (
        <Welcome name={"SARATHI"} age={"30"} />
    );
}

export default functionExample;
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}