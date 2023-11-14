// example.js
const React = require('react');
const { useState, useEffect } = require('react');

function ExampleComponent({ data }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran.");
  }, [count, data]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

module.exports = ExampleComponent;
