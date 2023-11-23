import React, { useState } from "react";
import FormComponent from "./formComponent";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skills, setSkills] = useState(["ruby", "react"]);

  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmitForm = () => {
    setIsSubmit(true);
  };

  return (
    <>
      <div>Signup</div>
      {skills.map((skill) => {
        return <h1 key={`skill-${skill}`}>{skill}</h1>;
      })}
      {isSubmit ? (
        <div>
          <h1>Thank you {name} for submitting the form</h1>
          <></>
        </div>
      ) : (
        <FormComponent
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </>
  );
}

export default Signup;
