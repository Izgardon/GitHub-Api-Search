import React from "react";
import { Repository } from "../Repository";

export function Repositories({ data }) {
  return (
    <>
      <h4 className="grid-title">{data[0] ? `Your Repos` : ""}</h4>
      <div className="grid">
        {data.map((repo) => (
          <Repository key={repo.id} data={repo} />
        ))}
      </div>
    </>
  );
}
