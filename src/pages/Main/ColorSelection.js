export const ColorSelection = () => {
  return (
    <div className="pb-10 text-center space-x-4">
      <button
        type="button"
        className="bg-lime-400 active:bg-lime-400 px-3 py-3 rounded-full outline outline-4 outline-white hover:bg-white hover:outline-1" // onClick={() => colorHandler("mint")}
      />
      <button
        type="button"
        className="bg-red-600 active:bg-red-600 px-3 py-3 rounded-full outline outline-4 outline-white hover:bg-white hover:outline-1" // onClick={() => colorHandler("red")}
      />
      <button
        type="button"
        className="bg-blue-700 active:bg-blue-700 px-3 py-3 rounded-full outline outline-4 outline-white hover:bg-white hover:outline-1" // onClick={() => colorHandler("blue")}
      />
      <button
        type="button"
        className="bg-yellow-300 active:bg-yellow-300 px-3 py-3 rounded-full outline outline-4 outline-white hover:bg-white hover:outline-1" // onClick={() => colorHandler("yellow")}
      />
      <button
        type="button"
        className="bg-pink-400 active:bg-pink-400 px-3 py-3 rounded-full outline outline-4 outline-white hover:bg-white hover:outline-1" // onClick={() => colorHandler("pink")}
      />
    </div>
  );
};
