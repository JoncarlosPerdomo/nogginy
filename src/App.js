import "./App.css";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState({ name: "Joncarlos Perdomo" });
  return (
    <div>
      <h1>Welcome, {userData.name}!</h1>
      <h2 id="teamname">nogginy</h2>
      {/* <img
        src={userData.img}
        className="custom"
        alt="Pic"
        width="300"
        height="300"
      /> */}
      <div className="colors">
        <button
          type="button"
          className="color mint"
          // onClick={() => colorHandler("mint")}
        >
          white
        </button>
        <button
          type="button"
          className="color red"
          // onClick={() => colorHandler("red")}
        >
          red
        </button>
        <button
          type="button"
          className="color blue"
          // onClick={() => colorHandler("blue")}
        >
          blue
        </button>
        <button
          type="button"
          className="color yellow"
          // onClick={() => colorHandler("yellow")}
        >
          yellow
        </button>
        <button
          type="button"
          className="color pink"
          // onClick={() => colorHandler("pink")}
        >
          {" "}
          pink{" "}
        </button>
      </div>
      <button
        type="button"
        className="button"
        // onClick={() => gameModeHandler("single")}
      >
        Single
      </button>
      <button
        type="button"
        className="button"
        // onClick={() => gameModeHandler("multiplayer")}
      >
        Multiplayer
      </button>
    </div>
  );
}

export default App;
