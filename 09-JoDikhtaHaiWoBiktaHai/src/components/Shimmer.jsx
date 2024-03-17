const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center m-10 ">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div key={index} className="h-80 w-80  m-10">
            <div className="bg-zinc-300 h-4/6 m-2 animate-pulse"></div>
            <div className="bg-zinc-300 h-1/6 m-2 animate-pulse"></div>
            <div className="bg-zinc-200 h-1/6 w-1/2 m-2 animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
