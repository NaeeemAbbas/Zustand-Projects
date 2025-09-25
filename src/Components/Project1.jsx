import useCounterStore from "../store/project1";

const Project1 = () => {
  const { count, increment, decrement, reset } = useCounterStore();
  return (
    <div>
      <h1>Zustand CounterApp</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+ Increment</button>
      <button onClick={decrement}>-decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Project1;
