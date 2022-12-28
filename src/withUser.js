import React, { useEffect, useState } from "react";
import axios from "axios";

export const withUser = (Component) => {
  return (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      (async () => {
        const resp = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(resp.data);
        console.log(resp);
      })();
    }, []);

    return <Component {...props} users={users} />;
  };
};
