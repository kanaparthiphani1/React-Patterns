import { withUser } from "./withUser";

const Users = ({ users }) => {
  console.log("users : " + users);

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
export default withUser(Users);
