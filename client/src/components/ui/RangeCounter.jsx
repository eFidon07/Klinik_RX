const RangeCounter = ({ width }) => {
  return (
    <div className="w-3/4 h-2.5 rounded-full bg-white overflow-hidden">
      <div
        className={`${
          parseInt(width.toString().split("%")[0]) > 30
            ? "bg-green-500"
            : "bg-red-500"
        } rounded-full h-full`}
        style={{ width }}
      ></div>
    </div>
  );
};

export default RangeCounter;
