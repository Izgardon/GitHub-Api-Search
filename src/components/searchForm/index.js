import React, { useState } from "react";
import { resultsContainer } from "../../resultsContainer";
import axios from "axios";

export const searchForm = () => {
  // Controlled Form Logic
  //Submit State
  const [username, setUsername] = useState("");
  //Input State
  const [usernameInput, setUsernameInput] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setUsername(usernameInput);
    setUsernameInput("");
  };

  const updateInput = (e) => setUsernameInput(e.target.value);

  // Fetch request
  useEffect(() => {
    const getGitHub = async (username) => {
      try {
        const data = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getGitHub(username);
  }, [username]);

  return (
    <>
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
        (document.querySelector("message").textContent =
          "Nobody exists with that name")
      ) : (
        <div>
          {dataRecieved ? (
            <resultsContainer data={data} />
          ) : (
            (document.querySelector("message").textContent =
              "You need to search for someone!")
          )}
        </div>
      )}

      <div className="message"></div>
    </>
  );
};
