import { useEffect, useState } from "react";

export const useFetch = (apiFunction, params = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await apiFunction(params);
      setData(response.data);
    } catch (err) {
        setError(err.message)
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, [apiFunction]);

  return { data, isLoading, error };
};
