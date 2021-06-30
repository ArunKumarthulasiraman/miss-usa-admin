import { useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

interface Props {}

const usePost = (props: Props) => {
  const token = "abcd";
  const auth = "Bearer ".concat(token);
  const [postData, setPostData] = useState<object>({
    loading: false,
    response: undefined,
    error: "",
  });

  const executeApiCall = (url: string, data: any) => {
    setPostData({ loading: true, response: undefined, error: "" });
    axios
      .post(
        url,
        {
          Headers: { Authorization: auth },
        },
        data
      )
      .then((response: AxiosResponse) => {
        console.log(response.data);
        setPostData({
          loading: false,
          response: response.data,
          error: "",
        });
      })
      .catch((error: AxiosError) => {
        console.log(error);
        setPostData({
          loading: false,
          response: undefined,
          error: error.message,
        });
      });
  };

  return { ...postData, executeApiCall };
};

export default usePost;
