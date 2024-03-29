const Shimmer = () => {
  return (
    <div id="shimmer-container">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} class="shimmer-card">
            <div class="shimmer-img"></div>
            <div class="shimmer-txt1"></div>
            <div class="shimmer-txt2"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
