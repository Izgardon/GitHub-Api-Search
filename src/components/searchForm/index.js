import React, { useState, useEffect } from "react";
import ResultsContainer from "../../ResultsContainer";
import axios from "axios";

export const SearchForm = () => {
  // Controlled Form Logic
  //Submit State
  const [username, setUsername] = useState("");
  //Input State
  const [usernameInput, setUsernameInput] = useState("");
  const [repoData, setRepoData] = useState([
    { owner: { login: "Loading...", avatar_url: "" } },
  ]);
  const [error, setError] = useState(false);
  const [dataRecieved, setDataRecieved] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setUsername(usernameInput);
    setUsernameInput("");
  };

  const updateInput = (e) => setUsernameInput(e.target.value);

  useEffect(() => {
    const getGitHub = async (username) => {
      setError(false);

      try {
        if (username) {
          const { data } = await axios.get(
            `https://api.github.com/users/${username}/repos`
          );

          setRepoData(data);
          setDataRecieved(true);
        }
      } catch (err) {
        setDataRecieved(false);
        setError(err);
      }
    };
    getGitHub(username);
  }, [username]);

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
        <input
          id="submit"
          type="submit"
          aria-label="Form submit button"
          value="Search"
        />
      </form>

      {error ? (
        <p>This username does not exist</p>
      ) : (
        <>
          {dataRecieved ? (
            <ResultsContainer data={repoData} />
          ) : (
            <p>You need to search for someone!</p>
          )}
        </>
      )}
    </div>
  );
};
