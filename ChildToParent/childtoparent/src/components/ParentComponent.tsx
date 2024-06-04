import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import {
  paragraphContent,
  parentHeading,
  parentSubHeading,
} from "../constants";

const ParentComponent: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const handleMessage = (msg: string) => {
    setMessage(msg);
  };

  return (
    <div>
      <h1>{parentHeading}</h1>
      <h3>{parentSubHeading}</h3>
      <ChildComponent onSendMessage={handleMessage} />
      <p>
        {paragraphContent} {message}
      </p>
    </div>
  );
};

export default ParentComponent;
