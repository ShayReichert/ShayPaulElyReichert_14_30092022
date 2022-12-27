import { useState, useEffect } from "react";
import { headersData } from "../utils/data/headers";

const useSort = () => {
  const [sortKey, setSortKey] = useState(null);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    setHeaders(headersData);
  }, []);

  const updateSortClass = (headers, key) => {
    const newHeaders = headers.map((header) => {
      if (header.value === key) {
        if (header.sortClass === "ascending") {
          return { ...header, sortClass: "descending" };
        }
        return { ...header, sortClass: "ascending" };
      }
      return { ...header, sortClass: "none" };
    });
    return newHeaders;
  };

  const handleSort = (key) => {
    const newHeaders = updateSortClass(headers, key);
    setHeaders(newHeaders);
    setSortKey(key);
  };

  return { sortKey, headers, handleSort };
};

export default useSort;
