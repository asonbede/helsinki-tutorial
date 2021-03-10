import React, { useState, useImperativeHandle } from "react";
const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };
  const togglevisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      togglevisibility,
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={togglevisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={togglevisibility}>cancel</button>
      </div>
    </div>
  );
});

export default Togglable;
