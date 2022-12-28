import axios from "axios";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(resp.data);
    })();
  }, []);

  return users;
};
