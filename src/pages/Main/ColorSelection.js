export const ColorSelection = () => {
  return (
    <div className="colors">
      <button
        type="button"
        className="color mint" // onClick={() => colorHandler("mint")}
      >
        white
      </button>
      <button
        type="button"
        className="color red" // onClick={() => colorHandler("red")}
      >
        red
      </button>
      <button
        type="button"
        className="color blue" // onClick={() => colorHandler("blue")}
      >
        blue
      </button>
      <button
        type="button"
        className="color yellow" // onClick={() => colorHandler("yellow")}
      >
        yellow
      </button>
      <button
        type="button"
        className="color pink" // onClick={() => colorHandler("pink")}
      >
        pink
      </button>
    </div>
  );
};
