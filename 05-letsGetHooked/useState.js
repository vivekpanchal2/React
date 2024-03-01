import { useState } from "react";

const Example = () => {
  const [age, setAge] = useState(19);

  function handleOnclick() {
    setAge(age + 1);
    setAge(age + 1);
    setAge(age + 1);
  }
  console.log(age);

  return (
    <>
      <button onClick={handleOnclick}>Click me</button>
    </>
  );
};

export default Example;
