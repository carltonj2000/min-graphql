import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../GraphQL/Mutations";

function Form() {
  const [first_name, first_nameSet] = useState("");
  const [last_name, last_nameSet] = useState("");
  const [email, emailSet] = useState("");
  const [password, passwordSet] = useState("");
  const [createUser] = useMutation(CREATE_USER);

  const addUser = async () => {
    await createUser({ variables: { first_name, last_name, email, password } });
    first_nameSet("");
    last_nameSet("");
    emailSet("");
    passwordSet("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={first_name}
        onChange={(e) => first_nameSet(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={last_name}
        onChange={(e) => last_nameSet(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => emailSet(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => passwordSet(e.target.value)}
      />
      <button onClick={addUser}>Submit</button>
    </div>
  );
}

export default Form;
