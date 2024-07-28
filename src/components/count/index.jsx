import { useState } from "react";
import { Text } from "../text";

export function Count({ defaultValue = 0, step = 1 }) {


  const [count, setCount] = useState(defaultValue);

  text(count);

  return (
    <>
      <button
        onClick={() => {
          setCount((c) => {
            return c + step;
          });
        }}
      >
        

        <Text as="span">{count}</Text>
        
      </button>
    </>
  );
}

function calcTotal(a, b, c, d, e, f) {
  return a + b;
}

calcTotal(1, 1);

function text(c) {
  console.log(c); // ???
}
