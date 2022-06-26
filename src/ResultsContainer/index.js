import React from "react";
import { Profile, Repositories } from "../components";

function ResultsContainer({ data }) {
  return (
    <>
      <Profile data={data} />
      <Repositories data={data} />
    </>
  );
}

export default ResultsContainer;
