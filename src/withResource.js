import React, { useEffect, useState } from "react";
import axios from "axios";

export const withResource = (Component, resourceName, resourceUrl) => {
  return (props) => {
    const [resource, setResource] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const { data } = await axios.get(resourceUrl);
        setResource(data);
      };
      fetchData();
    }, [resourceUrl]);

    return <Component {...props} {...{ [resourceName]: resource }} />;
  };
};
