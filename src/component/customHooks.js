import { useEffect, useState } from "react";
import axios from "axios";
export default function useCustomApi(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function customApiCall() {
      try {
        const response = await axios.get(`${url}`);
        setData(response);
      } catch (err) {
        const error = "Api Failed";
        new Error(error);
      }
    }
    customApiCall();
  }, [url]);

  return data;
}
