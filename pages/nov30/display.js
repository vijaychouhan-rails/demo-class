/* eslint-disable react/display-name */
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const Display = forwardRef((props, inputRef) => {
  console.log("=====props====", props, inputRef);
  const [text, setText] = useState("");
  const ipRef = useRef();

  const printAlert = () => {
    alert("testing");
  };

  useImperativeHandle(
    inputRef,
    () => {
      return {
        // focus1() {
        //   testRef.current.focus();
        // },
        myAlert: printAlert,
        focusOnInput: () => {
          ipRef.current.focus();
        },
      };
    },
    []
  );

  const handleChange = (e) => {
    // inputRef.current.focus()
    setText(e.target.value);
    // nameRef.current = e.target.value;
    // name = e.target.value;
  };

  return <input onChange={handleChange} ref={ipRef} />;
});

export default Display;
