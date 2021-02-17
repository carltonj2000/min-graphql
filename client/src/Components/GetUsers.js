import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers() {
  const { data } = useQuery(LOAD_USERS);
  const [users, usersSet] = useState([]);

  useEffect(() => {
    if (!data) return;
    const u = data.getAllUsers;
    usersSet(u.slice(u.length - 10));
  }, [data]);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.last_name}</p>
      ))}
    </div>
  );
}

export default GetUsers;
