import React, { useEffect, useState } from "react";
import axios from "axios";

export const ResourceContainer = ({ children, resourceUrl, resourceName }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await axios.get(resourceUrl);
      setData(data.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { [resourceName]: data });
      })}
    </>
  );
};
