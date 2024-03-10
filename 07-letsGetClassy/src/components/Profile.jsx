import { useState } from "react";

const ProfileFunctionalComponent = (props) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Profile Using Functional Component</h1>
      <h2>Name:{props.name}</h2>
      <h3>Count : {count}</h3>
      <button
        onClick={() => {
          setCount(2);
        }}
      >
        Set Count
      </button>
    </>
  );
};

export default ProfileFunctionalComponent;
