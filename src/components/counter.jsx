import { useState } from "react";
import "./counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function counterincrease() {
    setCount(count + 1);
  }

  function counterdecrease() {
    setCount(count - 1);
  }

  function counterreset() {
    setCount(0);
  }

  return (
    <div className="head">
      <div className="main">
        <h1>🏏 Cricket Counter</h1>

        <p className="description">Reach the legendary numbers!</p>

        <div className="count-box">
          <span>{count}</span>
        </div>

        {/* MS Dhoni */}
        {count === 7 && (
          <p className="message">
            🎉 Congratulations! You reached 7 — MS Dhoni!
          </p>
        )}

        {/* Virat Kohli */}
        {count === 18 && (
          <p className="message">👑 Amazing! You reached 18 — Virat Kohli!</p>
        )}

        {/* Rohit Sharma */}
        {count === 45 && (
          <p className="message">🔥 Wow! You reached 45 — Rohit Sharma!</p>
        )}

        {/* Sachin Tendulkar */}
        {count === 10 && (
          <p className="message">
            ⭐ Great! You reached 10 — Sachin Tendulkar!
          </p>
        )}

        <div className="ins">
          <button className="increase" onClick={counterincrease}>
            ➕ Increase
          </button>

          <button className="decrease" onClick={counterdecrease}>
            ➖ Decrease
          </button>

          <button className="rest" onClick={counterreset}>
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}
