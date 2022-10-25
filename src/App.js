import "./styles.css";
import { useState } from "react";
import Star from "./Star";

const App = () => {
  const [hoverState, setHoverState] = useState(0);
  const [rating, setRating] = useState(0);
  let stars = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <h1>Star Rating</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {stars.map((str, i) => {
          return (
            <Star
              key={i}
              starID={i}
              rating={rating || hoverState}
              onMouseEnter={() => setHoverState(i)}
              onMouseLeave={() => setHoverState(0)}
              onClick={() => setRating(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
