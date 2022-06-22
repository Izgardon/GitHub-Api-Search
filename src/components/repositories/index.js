import React from "react";
import { Repository } from "../Repository";

export function Repositories({ data }) {
  return (
    <>
      <h4 className="grid-title">Your Repos</h4>
      <div className="grid">
        {data.map((repo) => (
          <Repository data={repo} />
        ))}
      </div>
    </>
  );
}
