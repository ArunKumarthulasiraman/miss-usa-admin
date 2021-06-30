import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

interface Props {
  url: string;
}

const useFetch = (props: Props) => {
  const { url } = props;
  const token = "";

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<AxiosRequestConfig>(url, {
        headers: { Authorization: token },
      })
      .then((response: AxiosResponse) => {
        console.log(response.data);
        setResult(response.data);
      })
      .catch((error: AxiosError) => {
        console.log(error.message);
        setError(error.message);
      });
    setIsLoading(false);
  }, []);

  return [isLoading, result, error];
};

export default useFetch;
