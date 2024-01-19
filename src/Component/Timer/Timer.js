import {useState} from "react";
export const Timer = () => {
  const [count, setCount] = useState(0);

  

  return (
    <>
      <div className="container">
        <div className="logo" />
        <div className="user">
          <div className="admin">
            <h1 id="timer">00:00</h1>
            <button onclick="skip">Skip to 0</button>
            <button onclick="addTime()">Add 10 seconds</button>
          </div>
        </div>
      </div>
    </>
  );
};
