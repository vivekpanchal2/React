const Shimmer = () => {
  return (
    <div id="shimmer-container">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-txt1"></div>
            <div className="shimmer-txt2"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
