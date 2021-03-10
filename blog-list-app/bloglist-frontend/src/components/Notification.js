import React from "react";
const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  const { type } = message;
  return (
    <div className={type === "error" ? "error" : "success"}>
      {" "}
      {message.message}
    </div>
  );
};

export default Notification;
