import { useState, useEffect } from "react";
import { API } from "../API";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const getData = async () => {
    try {
      const { data } = await API.get(endpoint);
      setTimeout(() => {
        setData(data);
        setIsLoading(false);
      }, 2000);

    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getData(endpoint);
  }, [endpoint]);
  return [data, isLoading, error];
};