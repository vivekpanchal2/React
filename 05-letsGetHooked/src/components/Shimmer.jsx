const Shimmer = () => {
  const shimmerCards = [];

  for (let i = 0; i < 10; i++) {
    shimmerCards.push(
      <div class="shimmer-card">
        <div class="shimmer-img"></div>
        <div class="shimmer-txt1"></div>
        <div class="shimmer-txt2"></div>
      </div>
    );
  }

  return <div id="shimmer-container">{shimmerCards}</div>;
};

export default Shimmer;
