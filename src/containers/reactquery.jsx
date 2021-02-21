import React from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { ReactQuery } from "../hooksComponents/ReactQueryComp/ReactQuery";


const UseQueryHook = () => {
  const history = useHistory();
  const queryClient = useQueryClient(); //to use mutations (not our case)
  const goBackFunction = () => history.goBack();
  const { isLoading, error, data } = useQuery("fetchData", () =>
    axios("http://swapi.dev/api/people/1/")
  );

  return (
    <ReactQuery>
      <ReactQuery.Button onClick={() => goBackFunction()}>Go back</ReactQuery.Button>
      <ReactQuery.Title>Simple react query with Star Wars API</ReactQuery.Title>
      {error && <ReactQuery.Error>Something went wrong</ReactQuery.Error>}
      {isLoading ? (
        <ReactQuery.Loading>loading...</ReactQuery.Loading>
      ) : (
        <ReactQuery.PreData>{JSON.stringify(data, null, 2)}</ReactQuery.PreData>
      )}
    </ReactQuery>
  );
};

export default UseQueryHook;
