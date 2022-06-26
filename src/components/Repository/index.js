import React from "react";

export function Repository({ data }) {
  return (
    <>
      <div className="grid-item">
        <div>
          <h3>
            <a href={data.html_url}>{data.name}</a>
            <button className="publicBtn" disabled>
              {data.private ? "Private" : "Public"}
            </button>
          </h3>
          <p>{data.description}</p>
        </div>
        <ul>
          <li>Language: {data.language ? data.language : "No top language"}</li>
          <li>Forks: {data.forks}</li>
          <li>Watchers: {data.watchers}</li>
          <li>Forked? {data.fork ? "Forked" : "Orginal"}</li>
        </ul>
      </div>
    </>
  );
}
