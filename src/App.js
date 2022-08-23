import React from 'react';
import './App.css';

const App = () => {
  const [total, setTotal] = React.useState(0);

  const onIncrement = () => {
    setTotal(total + 1);
    console.log(total);
  };
  const onDecrement = () => {
    setTotal(total - 1);
    console.log(total);
  };

  return (
    <div className="counter-wrapper">
      <button onClick={onIncrement}>+</button>
      <p>{total}</p>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default App;
