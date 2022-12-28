export const Users = ({ users }) => {
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
