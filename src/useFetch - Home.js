import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {     //simulating the normal lag in fetching data from server-side
          fetch(url)
            .then(res => {
              if (!res.ok) {   //checking response object's "Ok" method to see if we got a response back from the database
                throw Error(`Couldn't fetch resource data`);
              }
              return res.json();
            })
            .then(data => {
              setData(data);
              setLoading(false);
              setError(null);
            })
            .catch(err => {
              setLoading(false);
              setError(err.message);
            });
        }, 1000)
    }, [url]);

      return { data, loading, error };
}
 
export default useFetch;