import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $first_name: String!
    $last_name: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      first_name: $first_name
      last_name: $last_name
      email: $email
      password: $password
    ) {
      first_name
      last_name
      email
      password
      id
    }
  }
`;
