import { useUser } from "./useUser";
import { withResource } from "./withResource";

const Users = () => {
  const users = useUser();
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
export default Users;
