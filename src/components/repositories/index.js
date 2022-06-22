import React from "react";

export function repositories({ data }) {
  return (
    <>
      <h4>Your Repos</h4>
      <div className="repos">
        {data.map((repo) => {
          <components.repository data={repo} />;
        })}
      </div>
    </>
  );
}
