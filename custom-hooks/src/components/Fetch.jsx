import React from "react";
import { useFetch } from "../hooks/useFetch";

export function Fetch() {
  const [isLoading, apiData, error] = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  return (
    <div>
      <h2>API data</h2>
      {isLoading && <p>loading......</p>}
      {!isLoading && error && <p>Error in fetching the data</p>}
      {!isLoading && !error && <p>{JSON.stringify(apiData)}</p>}
    </div>
  );
}
