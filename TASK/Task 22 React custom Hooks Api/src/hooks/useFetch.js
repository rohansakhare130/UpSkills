import { useEffect, useState } from "react";

function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching data...'); 
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      }); 

    console.log(data);
  }, []);
  console.log(data);
  return { data, loading, error };
}

export default useFetch;
