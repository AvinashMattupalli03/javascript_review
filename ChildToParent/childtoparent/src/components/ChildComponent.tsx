import React from "react";
import { message, buttonContent, childHeading } from "../constants";

interface IChildComponentProps {
  onSendMessage: (message: string) => void;
}

const ChildComponent: React.FC<IChildComponentProps> = ({ onSendMessage }) => {
  const sendMessage = () => {
    onSendMessage(message);
  };

  return (
    <div>
      <h2>{childHeading}</h2>
      <button onClick={sendMessage}>{buttonContent}</button>
    </div>
  );
};

export default ChildComponent;
