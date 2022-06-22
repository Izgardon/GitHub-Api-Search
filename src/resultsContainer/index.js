import React from "react";
import { components } from "../components";

export function resultsContainer({ data }) {
  return (
    <>
      <components.profile data={data} />
      <components.repositories data={data} />
    </>
  );
}
