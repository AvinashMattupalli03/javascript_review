import React, { useState, useEffect } from "react";

const TextField: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = String(count);

    if (count < 10) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [count]);

  return (
    <div>
      <input type="text" placeholder="Enter text" id="textfield" autoFocus />
    </div>
  );
};

export default TextField;
