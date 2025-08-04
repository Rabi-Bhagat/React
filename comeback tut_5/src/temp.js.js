import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' value={name} onChange={handleName} />
      </label>

      <label>
        Email:
        <input type='email' value={email} onChange={handleEmail} />
      </label>

      <label>
        Password:
        <input type='password' value={password} onChange={handlePassword} />
      </label>

      <button type="submit">Submit</button>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </form>
  );
};

export default Form;
