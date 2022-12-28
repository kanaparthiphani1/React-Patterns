import { withResource } from "./withResource";

const Users = ({ users }) => {
  console.log("users : " + JSON.stringify(users));

  return (
    <>
      <h1>Users</h1>
      {users &&
        users.map((user) => {
          return <h4>{user.name}</h4>;
        })}
    </>
  );
};
export default withResource(
  Users,
  "users",
  "https://jsonplaceholder.typicode.com/users"
);
