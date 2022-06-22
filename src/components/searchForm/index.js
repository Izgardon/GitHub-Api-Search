import React, { useState, useEffect } from "react";
import ResultsContainer from "../../resultsContainer";
import axios from "axios";

let test1 = "";

export const SearchForm = () => {
  // Controlled Form Logic
  //Submit State
  const [username, setUsername] = useState("");
  //Input State
  const [usernameInput, setUsernameInput] = useState("");
  const [data, setData] = useState([
    { owner: { login: "Loading...", avatar_url: "" } },
  ]);
  const [error, setError] = useState("");
  const [dataRecieved, setDataRecieved] = useState(true);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setUsername(usernameInput);
    setUsernameInput("");
  };

  const updateInput = (e) => setUsernameInput(e.target.value);

  useEffect(() => {
    const getGitHub = async (username) => {
      if (username) {
        try {
          const { data } = await axios.get(
            `https://api.github.com/users/${username}/repos`
          );
          // let data = test;
          console.log(data);
          setData(data);
        } catch (err) {
          setError(err);
        }
      }
    };
    getGitHub(username);
  }, [username]);
  // console.log(data);
  // useEffect(() => {
  //   setData(test);
  // }, []);
  // console.log(data);

  return (
    <div className="search">
      <form aria-label="form" onSubmit={handleSubmitForm}>
        <label htmlFor="username">GitHub Username</label>
        <input
          aria-label="username input"
          type="text"
          id="username"
          name="username"
          value={usernameInput}
          onChange={updateInput}
        />
        <input type="submit" aria-label="Form submit button" value="Search" />
      </form>
      {error ? (
        (document.querySelector(".message").textContent =
          "Nobody exists with that name")
      ) : (
        <div>
          {dataRecieved ? (
            <ResultsContainer data={data} />
          ) : (
            (document.querySelector(".message").textContent =
              "You need to search for someone!")
          )}
        </div>
      )}

      <div className="message"></div>
    </div>
  );
};
