// import { useState } from "react";
import { ColorSelection } from "./ColorSelection";
import PropTypes from "prop-types";

const Main = (props) => {
  return (
    <div>
      <h1>Welcome, Joncarlos!</h1>
      <h2 id="teamname">nogginy</h2>
      {/* <img
        src={userData.img}
        className="custom"
        alt="Pic"
        width="300"
        height="300"
      /> */}
      <ColorSelection />
      <button
        type="button"
        className="button"
        onClick={() => props.setMode("single")}
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
};

Main.propTypes = {
  setMode: PropTypes.func.isRequired,
};

export default Main;
