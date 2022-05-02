import { useCounter } from "../../Providers/Counter";
import { useName } from "../../Providers/Name";

const Counter = () => {
  const { addNumber, subNumber } = useCounter();
  const { setName } = useName();

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={addNumber}>Add +</button>
      <button onClick={subNumber}> Add -</button>
    </div>
  );
};

export default Counter;
