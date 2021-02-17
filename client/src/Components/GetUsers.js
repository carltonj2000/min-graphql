import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div>users</div>;
}

export default GetUsers;
