import React from "react";

const FormComponent = (props) => {
  const { setName, setEmail, setPassword, handleSubmitForm } = props;
  return (
    <form
      onSubmit={(e) => {
        //   console.log("====form event===", e);
        e.preventDefault();
        handleSubmitForm();
        //   console.log("===name, email, password===", name, email, password);
        //   setIsSent(true);
        //   sendMessage(message);
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      ></input>

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <button type="submit">Submit</button>
    </form>
  );
};
export default FormComponent;
