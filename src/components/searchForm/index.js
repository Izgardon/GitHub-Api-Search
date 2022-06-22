import React, { useState, useEffect } from "react";
import ResultsContainer from "../../ResultsContainer";
import axios from "axios";

let test1 = "";

export const SearchForm = () => {
  let test = [
    {
      id: 486187060,
      node_id: "R_kgDOHPqgNA",
      name: "bootstrap-site",
      full_name: "Izgardon/bootstrap-site",
      private: false,
      owner: {
        login: "Izgardon",
        id: 99081856,
        node_id: "U_kgDOBefegA",
        avatar_url: "https://avatars.githubusercontent.com/u/99081856?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Izgardon",
        html_url: "https://github.com/Izgardon",
        followers_url: "https://api.github.com/users/Izgardon/followers",
        following_url:
          "https://api.github.com/users/Izgardon/following{/other_user}",
        gists_url: "https://api.github.com/users/Izgardon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Izgardon/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Izgardon/subscriptions",
        organizations_url: "https://api.github.com/users/Izgardon/orgs",
        repos_url: "https://api.github.com/users/Izgardon/repos",
        events_url: "https://api.github.com/users/Izgardon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Izgardon/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Izgardon/bootstrap-site",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/Izgardon/bootstrap-site",
      forks_url: "https://api.github.com/repos/Izgardon/bootstrap-site/forks",
      keys_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/Izgardon/bootstrap-site/teams",
      hooks_url: "https://api.github.com/repos/Izgardon/bootstrap-site/hooks",
      issue_events_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/issues/events{/number}",
      events_url: "https://api.github.com/repos/Izgardon/bootstrap-site/events",
      assignees_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/branches{/branch}",
      tags_url: "https://api.github.com/repos/Izgardon/bootstrap-site/tags",
      blobs_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/languages",
      stargazers_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/stargazers",
      contributors_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/contributors",
      subscribers_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/subscribers",
      subscription_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/subscription",
      commits_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/Izgardon/bootstrap-site/merges",
      archive_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/downloads",
      issues_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/labels{/name}",
      releases_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/Izgardon/bootstrap-site/deployments",
      created_at: "2022-04-27T12:40:30Z",
      updated_at: "2022-04-27T12:40:58Z",
      pushed_at: "2022-04-27T15:50:44Z",
      git_url: "git://github.com/Izgardon/bootstrap-site.git",
      ssh_url: "git@github.com:Izgardon/bootstrap-site.git",
      clone_url: "https://github.com/Izgardon/bootstrap-site.git",
      svn_url: "https://github.com/Izgardon/bootstrap-site",
      homepage: null,
      size: 6,
      stargazers_count: 0,
      watchers_count: 0,
      language: "HTML",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 2,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 2,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 498749617,
      node_id: "R_kgDOHbpQsQ",
      name: "client-momentum",
      full_name: "Izgardon/client-momentum",
      private: false,
      owner: {
        login: "Izgardon",
        id: 99081856,
        node_id: "U_kgDOBefegA",
        avatar_url: "https://avatars.githubusercontent.com/u/99081856?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Izgardon",
        html_url: "https://github.com/Izgardon",
        followers_url: "https://api.github.com/users/Izgardon/followers",
        following_url:
          "https://api.github.com/users/Izgardon/following{/other_user}",
        gists_url: "https://api.github.com/users/Izgardon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Izgardon/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Izgardon/subscriptions",
        organizations_url: "https://api.github.com/users/Izgardon/orgs",
        repos_url: "https://api.github.com/users/Izgardon/repos",
        events_url: "https://api.github.com/users/Izgardon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Izgardon/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Izgardon/client-momentum",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/Izgardon/client-momentum",
      forks_url: "https://api.github.com/repos/Izgardon/client-momentum/forks",
      keys_url:
        "https://api.github.com/repos/Izgardon/client-momentum/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Izgardon/client-momentum/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/Izgardon/client-momentum/teams",
      hooks_url: "https://api.github.com/repos/Izgardon/client-momentum/hooks",
      issue_events_url:
        "https://api.github.com/repos/Izgardon/client-momentum/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/Izgardon/client-momentum/events",
      assignees_url:
        "https://api.github.com/repos/Izgardon/client-momentum/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Izgardon/client-momentum/branches{/branch}",
      tags_url: "https://api.github.com/repos/Izgardon/client-momentum/tags",
      blobs_url:
        "https://api.github.com/repos/Izgardon/client-momentum/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/Izgardon/client-momentum/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/Izgardon/client-momentum/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/Izgardon/client-momentum/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/Izgardon/client-momentum/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/Izgardon/client-momentum/languages",
      stargazers_url:
        "https://api.github.com/repos/Izgardon/client-momentum/stargazers",
      contributors_url:
        "https://api.github.com/repos/Izgardon/client-momentum/contributors",
      subscribers_url:
        "https://api.github.com/repos/Izgardon/client-momentum/subscribers",
      subscription_url:
        "https://api.github.com/repos/Izgardon/client-momentum/subscription",
      commits_url:
        "https://api.github.com/repos/Izgardon/client-momentum/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Izgardon/client-momentum/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Izgardon/client-momentum/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Izgardon/client-momentum/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Izgardon/client-momentum/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Izgardon/client-momentum/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/Izgardon/client-momentum/merges",
      archive_url:
        "https://api.github.com/repos/Izgardon/client-momentum/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/Izgardon/client-momentum/downloads",
      issues_url:
        "https://api.github.com/repos/Izgardon/client-momentum/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/Izgardon/client-momentum/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Izgardon/client-momentum/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Izgardon/client-momentum/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/Izgardon/client-momentum/labels{/name}",
      releases_url:
        "https://api.github.com/repos/Izgardon/client-momentum/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/Izgardon/client-momentum/deployments",
      created_at: "2022-06-01T13:33:38Z",
      updated_at: "2022-06-09T09:09:03Z",
      pushed_at: "2022-06-14T15:55:27Z",
      git_url: "git://github.com/Izgardon/client-momentum.git",
      ssh_url: "git@github.com:Izgardon/client-momentum.git",
      clone_url: "https://github.com/Izgardon/client-momentum.git",
      svn_url: "https://github.com/Izgardon/client-momentum",
      homepage: null,
      size: 1271,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 486560807,
      node_id: "R_kgDOHQBUJw",
      name: "fp_study_notes_hello_github",
      full_name: "Izgardon/fp_study_notes_hello_github",
      private: false,
      owner: {
        login: "Izgardon",
        id: 99081856,
        node_id: "U_kgDOBefegA",
        avatar_url: "https://avatars.githubusercontent.com/u/99081856?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Izgardon",
        html_url: "https://github.com/Izgardon",
        followers_url: "https://api.github.com/users/Izgardon/followers",
        following_url:
          "https://api.github.com/users/Izgardon/following{/other_user}",
        gists_url: "https://api.github.com/users/Izgardon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Izgardon/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Izgardon/subscriptions",
        organizations_url: "https://api.github.com/users/Izgardon/orgs",
        repos_url: "https://api.github.com/users/Izgardon/repos",
        events_url: "https://api.github.com/users/Izgardon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Izgardon/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Izgardon/fp_study_notes_hello_github",
      description: "Hello Github!",
      fork: true,
      url: "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github",
      forks_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/forks",
      keys_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/teams",
      hooks_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/hooks",
      issue_events_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/events",
      assignees_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/tags",
      blobs_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/languages",
      stargazers_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/stargazers",
      contributors_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/contributors",
      subscribers_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/subscribers",
      subscription_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/subscription",
      commits_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/merges",
      archive_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/downloads",
      issues_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/labels{/name}",
      releases_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/Izgardon/fp_study_notes_hello_github/deployments",
      created_at: "2022-04-28T11:12:09Z",
      updated_at: "2022-04-20T21:08:02Z",
      pushed_at: "2022-06-20T12:36:34Z",
      git_url: "git://github.com/Izgardon/fp_study_notes_hello_github.git",
      ssh_url: "git@github.com:Izgardon/fp_study_notes_hello_github.git",
      clone_url: "https://github.com/Izgardon/fp_study_notes_hello_github.git",
      svn_url: "https://github.com/Izgardon/fp_study_notes_hello_github",
      homepage: null,
      size: 1175,
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 455945754,
      node_id: "R_kgDOGy0uGg",
      name: "Game",
      full_name: "Izgardon/Game",
      private: false,
      owner: {
        login: "Izgardon",
        id: 99081856,
        node_id: "U_kgDOBefegA",
        avatar_url: "https://avatars.githubusercontent.com/u/99081856?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Izgardon",
        html_url: "https://github.com/Izgardon",
        followers_url: "https://api.github.com/users/Izgardon/followers",
        following_url:
          "https://api.github.com/users/Izgardon/following{/other_user}",
        gists_url: "https://api.github.com/users/Izgardon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Izgardon/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Izgardon/subscriptions",
        organizations_url: "https://api.github.com/users/Izgardon/orgs",
        repos_url: "https://api.github.com/users/Izgardon/repos",
        events_url: "https://api.github.com/users/Izgardon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Izgardon/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Izgardon/Game",
      description: "My side scroller game",
      fork: false,
      url: "https://api.github.com/repos/Izgardon/Game",
      forks_url: "https://api.github.com/repos/Izgardon/Game/forks",
      keys_url: "https://api.github.com/repos/Izgardon/Game/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Izgardon/Game/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/Izgardon/Game/teams",
      hooks_url: "https://api.github.com/repos/Izgardon/Game/hooks",
      issue_events_url:
        "https://api.github.com/repos/Izgardon/Game/issues/events{/number}",
      events_url: "https://api.github.com/repos/Izgardon/Game/events",
      assignees_url:
        "https://api.github.com/repos/Izgardon/Game/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Izgardon/Game/branches{/branch}",
      tags_url: "https://api.github.com/repos/Izgardon/Game/tags",
      blobs_url: "https://api.github.com/repos/Izgardon/Game/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/Izgardon/Game/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/Izgardon/Game/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/Izgardon/Game/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/Izgardon/Game/statuses/{sha}",
      languages_url: "https://api.github.com/repos/Izgardon/Game/languages",
      stargazers_url: "https://api.github.com/repos/Izgardon/Game/stargazers",
      contributors_url:
        "https://api.github.com/repos/Izgardon/Game/contributors",
      subscribers_url: "https://api.github.com/repos/Izgardon/Game/subscribers",
      subscription_url:
        "https://api.github.com/repos/Izgardon/Game/subscription",
      commits_url: "https://api.github.com/repos/Izgardon/Game/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Izgardon/Game/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Izgardon/Game/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Izgardon/Game/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Izgardon/Game/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Izgardon/Game/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/Izgardon/Game/merges",
      archive_url:
        "https://api.github.com/repos/Izgardon/Game/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/Izgardon/Game/downloads",
      issues_url: "https://api.github.com/repos/Izgardon/Game/issues{/number}",
      pulls_url: "https://api.github.com/repos/Izgardon/Game/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Izgardon/Game/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Izgardon/Game/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/Izgardon/Game/labels{/name}",
      releases_url: "https://api.github.com/repos/Izgardon/Game/releases{/id}",
      deployments_url: "https://api.github.com/repos/Izgardon/Game/deployments",
      created_at: "2022-02-05T18:02:17Z",
      updated_at: "2022-02-09T15:37:37Z",
      pushed_at: "2022-03-04T16:08:35Z",
      git_url: "git://github.com/Izgardon/Game.git",
      ssh_url: "git@github.com:Izgardon/Game.git",
      clone_url: "https://github.com/Izgardon/Game.git",
      svn_url: "https://github.com/Izgardon/Game",
      homepage: null,
      size: 204,
      stargazers_count: 0,
      watchers_count: 0,
      language: "SCSS",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 486601405,
      node_id: "R_kgDOHQDyvQ",
      name: "god-of-war",
      full_name: "Izgardon/god-of-war",
      private: false,
      owner: {
        login: "Izgardon",
        id: 99081856,
        node_id: "U_kgDOBefegA",
        avatar_url: "https://avatars.githubusercontent.com/u/99081856?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Izgardon",
        html_url: "https://github.com/Izgardon",
        followers_url: "https://api.github.com/users/Izgardon/followers",
        following_url:
          "https://api.github.com/users/Izgardon/following{/other_user}",
        gists_url: "https://api.github.com/users/Izgardon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Izgardon/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Izgardon/subscriptions",
        organizations_url: "https://api.github.com/users/Izgardon/orgs",
        repos_url: "https://api.github.com/users/Izgardon/repos",
        events_url: "https://api.github.com/users/Izgardon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Izgardon/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Izgardon/god-of-war",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/Izgardon/god-of-war",
      forks_url: "https://api.github.com/repos/Izgardon/god-of-war/forks",
      keys_url:
        "https://api.github.com/repos/Izgardon/god-of-war/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Izgardon/god-of-war/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/Izgardon/god-of-war/teams",
      hooks_url: "https://api.github.com/repos/Izgardon/god-of-war/hooks",
      issue_events_url:
        "https://api.github.com/repos/Izgardon/god-of-war/issues/events{/number}",
      events_url: "https://api.github.com/repos/Izgardon/god-of-war/events",
      assignees_url:
        "https://api.github.com/repos/Izgardon/god-of-war/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Izgardon/god-of-war/branches{/branch}",
      tags_url: "https://api.github.com/repos/Izgardon/god-of-war/tags",
      blobs_url:
        "https://api.github.com/repos/Izgardon/god-of-war/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/Izgardon/god-of-war/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/Izgardon/god-of-war/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/Izgardon/god-of-war/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/Izgardon/god-of-war/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/Izgardon/god-of-war/languages",
      stargazers_url:
        "https://api.github.com/repos/Izgardon/god-of-war/stargazers",
      contributors_url:
        "https://api.github.com/repos/Izgardon/god-of-war/contributors",
      subscribers_url:
        "https://api.github.com/repos/Izgardon/god-of-war/subscribers",
      subscription_url:
        "https://api.github.com/repos/Izgardon/god-of-war/subscription",
      commits_url:
        "https://api.github.com/repos/Izgardon/god-of-war/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Izgardon/god-of-war/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Izgardon/god-of-war/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Izgardon/god-of-war/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Izgardon/god-of-war/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Izgardon/god-of-war/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/Izgardon/god-of-war/merges",
      archive_url:
        "https://api.github.com/repos/Izgardon/god-of-war/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/Izgardon/god-of-war/downloads",
      issues_url:
        "https://api.github.com/repos/Izgardon/god-of-war/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/Izgardon/god-of-war/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Izgardon/god-of-war/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Izgardon/god-of-war/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/Izgardon/god-of-war/labels{/name}",
      releases_url:
        "https://api.github.com/repos/Izgardon/god-of-war/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/Izgardon/god-of-war/deployments",
      created_at: "2022-04-28T13:16:13Z",
      updated_at: "2022-04-28T13:28:23Z",
      pushed_at: "2022-04-28T15:46:25Z",
      git_url: "git://github.com/Izgardon/god-of-war.git",
      ssh_url: "git@github.com:Izgardon/god-of-war.git",
      clone_url: "https://github.com/Izgardon/god-of-war.git",
      svn_url: "https://github.com/Izgardon/god-of-war",
      homepage: null,
      size: 626,
      stargazers_count: 0,
      watchers_count: 0,
      language: "HTML",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 491014253,
      node_id: "R_kgDOHURIbQ",
      name: "google-clone",
      full_name: "Izgardon/google-clone",
      private: false,
      owner: {
        login: "Izgardon",
        id: 99081856,
        node_id: "U_kgDOBefegA",
        avatar_url: "https://avatars.githubusercontent.com/u/99081856?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Izgardon",
        html_url: "https://github.com/Izgardon",
        followers_url: "https://api.github.com/users/Izgardon/followers",
        following_url:
          "https://api.github.com/users/Izgardon/following{/other_user}",
        gists_url: "https://api.github.com/users/Izgardon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Izgardon/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Izgardon/subscriptions",
        organizations_url: "https://api.github.com/users/Izgardon/orgs",
        repos_url: "https://api.github.com/users/Izgardon/repos",
        events_url: "https://api.github.com/users/Izgardon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Izgardon/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Izgardon/google-clone",
      description: "Clone of google using an API",
      fork: false,
      url: "https://api.github.com/repos/Izgardon/google-clone",
      forks_url: "https://api.github.com/repos/Izgardon/google-clone/forks",
      keys_url:
        "https://api.github.com/repos/Izgardon/google-clone/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Izgardon/google-clone/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/Izgardon/google-clone/teams",
      hooks_url: "https://api.github.com/repos/Izgardon/google-clone/hooks",
      issue_events_url:
        "https://api.github.com/repos/Izgardon/google-clone/issues/events{/number}",
      events_url: "https://api.github.com/repos/Izgardon/google-clone/events",
      assignees_url:
        "https://api.github.com/repos/Izgardon/google-clone/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Izgardon/google-clone/branches{/branch}",
      tags_url: "https://api.github.com/repos/Izgardon/google-clone/tags",
      blobs_url:
        "https://api.github.com/repos/Izgardon/google-clone/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/Izgardon/google-clone/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/Izgardon/google-clone/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/Izgardon/google-clone/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/Izgardon/google-clone/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/Izgardon/google-clone/languages",
      stargazers_url:
        "https://api.github.com/repos/Izgardon/google-clone/stargazers",
      contributors_url:
        "https://api.github.com/repos/Izgardon/google-clone/contributors",
      subscribers_url:
        "https://api.github.com/repos/Izgardon/google-clone/subscribers",
      subscription_url:
        "https://api.github.com/repos/Izgardon/google-clone/subscription",
      commits_url:
        "https://api.github.com/repos/Izgardon/google-clone/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Izgardon/google-clone/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Izgardon/google-clone/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Izgardon/google-clone/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Izgardon/google-clone/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Izgardon/google-clone/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/Izgardon/google-clone/merges",
      archive_url:
        "https://api.github.com/repos/Izgardon/google-clone/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/Izgardon/google-clone/downloads",
      issues_url:
        "https://api.github.com/repos/Izgardon/google-clone/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/Izgardon/google-clone/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Izgardon/google-clone/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Izgardon/google-clone/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/Izgardon/google-clone/labels{/name}",
      releases_url:
        "https://api.github.com/repos/Izgardon/google-clone/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/Izgardon/google-clone/deployments",
      created_at: "2022-05-11T08:05:11Z",
      updated_at: "2022-05-12T11:22:12Z",
      pushed_at: "2022-05-11T16:42:53Z",
      git_url: "git://github.com/Izgardon/google-clone.git",
      ssh_url: "git@github.com:Izgardon/google-clone.git",
      clone_url: "https://github.com/Izgardon/google-clone.git",
      svn_url: "https://github.com/Izgardon/google-clone",
      homepage: null,
      size: 165,
      stargazers_count: 1,
      watchers_count: 1,
      language: "HTML",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 1,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 1,
      open_issues: 1,
      watchers: 1,
      default_branch: "main",
    },
    {
      id: 455882753,
      node_id: "R_kgDOGyw4AQ",
      name: "Izgardon",
      full_name: "Izgardon/Izgardon",
      private: false,
      owner: {
        login: "Izgardon",
        id: 99081856,
        node_id: "U_kgDOBefegA",
        avatar_url: "https://avatars.githubusercontent.com/u/99081856?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Izgardon",
        html_url: "https://github.com/Izgardon",
        followers_url: "https://api.github.com/users/Izgardon/followers",
        following_url:
          "https://api.github.com/users/Izgardon/following{/other_user}",
        gists_url: "https://api.github.com/users/Izgardon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Izgardon/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Izgardon/subscriptions",
        organizations_url: "https://api.github.com/users/Izgardon/orgs",
        repos_url: "https://api.github.com/users/Izgardon/repos",
        events_url: "https://api.github.com/users/Izgardon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Izgardon/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Izgardon/Izgardon",
      description: "Config files for my GitHub profile.",
      fork: false,
      url: "https://api.github.com/repos/Izgardon/Izgardon",
      forks_url: "https://api.github.com/repos/Izgardon/Izgardon/forks",
      keys_url: "https://api.github.com/repos/Izgardon/Izgardon/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Izgardon/Izgardon/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/Izgardon/Izgardon/teams",
      hooks_url: "https://api.github.com/repos/Izgardon/Izgardon/hooks",
      issue_events_url:
        "https://api.github.com/repos/Izgardon/Izgardon/issues/events{/number}",
      events_url: "https://api.github.com/repos/Izgardon/Izgardon/events",
      assignees_url:
        "https://api.github.com/repos/Izgardon/Izgardon/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Izgardon/Izgardon/branches{/branch}",
      tags_url: "https://api.github.com/repos/Izgardon/Izgardon/tags",
      blobs_url:
        "https://api.github.com/repos/Izgardon/Izgardon/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/Izgardon/Izgardon/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/Izgardon/Izgardon/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/Izgardon/Izgardon/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/Izgardon/Izgardon/statuses/{sha}",
      languages_url: "https://api.github.com/repos/Izgardon/Izgardon/languages",
      stargazers_url:
        "https://api.github.com/repos/Izgardon/Izgardon/stargazers",
      contributors_url:
        "https://api.github.com/repos/Izgardon/Izgardon/contributors",
      subscribers_url:
        "https://api.github.com/repos/Izgardon/Izgardon/subscribers",
      subscription_url:
        "https://api.github.com/repos/Izgardon/Izgardon/subscription",
      commits_url:
        "https://api.github.com/repos/Izgardon/Izgardon/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Izgardon/Izgardon/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Izgardon/Izgardon/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Izgardon/Izgardon/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Izgardon/Izgardon/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Izgardon/Izgardon/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/Izgardon/Izgardon/merges",
      archive_url:
        "https://api.github.com/repos/Izgardon/Izgardon/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/Izgardon/Izgardon/downloads",
      issues_url:
        "https://api.github.com/repos/Izgardon/Izgardon/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/Izgardon/Izgardon/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Izgardon/Izgardon/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Izgardon/Izgardon/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/Izgardon/Izgardon/labels{/name}",
      releases_url:
        "https://api.github.com/repos/Izgardon/Izgardon/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/Izgardon/Izgardon/deployments",
      created_at: "2022-02-05T13:50:37Z",
      updated_at: "2022-02-05T13:50:37Z",
      pushed_at: "2022-05-12T07:56:56Z",
      git_url: "git://github.com/Izgardon/Izgardon.git",
      ssh_url: "git@github.com:Izgardon/Izgardon.git",
      clone_url: "https://github.com/Izgardon/Izgardon.git",
      svn_url: "https://github.com/Izgardon/Izgardon",
      homepage: "https://github.com/Izgardon",
      size: 2,
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: ["config", "github-config"],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 492738345,
      node_id: "R_kgDOHV6XKQ",
      name: "Lap-1-Portfolio-Project-Client",
      full_name: "Izgardon/Lap-1-Portfolio-Project-Client",
      private: false,
      owner: {
        login: "Izgardon",
        id: 99081856,
        node_id: "U_kgDOBefegA",
        avatar_url: "https://avatars.githubusercontent.com/u/99081856?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Izgardon",
        html_url: "https://github.com/Izgardon",
        followers_url: "https://api.github.com/users/Izgardon/followers",
        following_url:
          "https://api.github.com/users/Izgardon/following{/other_user}",
        gists_url: "https://api.github.com/users/Izgardon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Izgardon/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Izgardon/subscriptions",
        organizations_url: "https://api.github.com/users/Izgardon/orgs",
        repos_url: "https://api.github.com/users/Izgardon/repos",
        events_url: "https://api.github.com/users/Izgardon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Izgardon/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Izgardon/Lap-1-Portfolio-Project-Client",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client",
      forks_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/forks",
      keys_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/teams",
      hooks_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/hooks",
      issue_events_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/events",
      assignees_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/tags",
      blobs_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/languages",
      stargazers_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/stargazers",
      contributors_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/contributors",
      subscribers_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/subscribers",
      subscription_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/subscription",
      commits_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/merges",
      archive_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/downloads",
      issues_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/labels{/name}",
      releases_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/Izgardon/Lap-1-Portfolio-Project-Client/deployments",
      created_at: "2022-05-16T08:02:50Z",
      updated_at: "2022-05-18T15:41:30Z",
      pushed_at: "2022-05-20T15:50:41Z",
      git_url: "git://github.com/Izgardon/Lap-1-Portfolio-Project-Client.git",
      ssh_url: "git@github.com:Izgardon/Lap-1-Portfolio-Project-Client.git",
      clone_url:
        "https://github.com/Izgardon/Lap-1-Portfolio-Project-Client.git",
      svn_url: "https://github.com/Izgardon/Lap-1-Portfolio-Project-Client",
      homepage: null,
      size: 1112,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 506155694,
      node_id: "R_kgDOHitSrg",
      name: "Lap-3-code-challenge",
      full_name: "Izgardon/Lap-3-code-challenge",
      private: false,
      owner: {
        login: "Izgardon",
        id: 99081856,
        node_id: "U_kgDOBefegA",
        avatar_url: "https://avatars.githubusercontent.com/u/99081856?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Izgardon",
        html_url: "https://github.com/Izgardon",
        followers_url: "https://api.github.com/users/Izgardon/followers",
        following_url:
          "https://api.github.com/users/Izgardon/following{/other_user}",
        gists_url: "https://api.github.com/users/Izgardon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Izgardon/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Izgardon/subscriptions",
        organizations_url: "https://api.github.com/users/Izgardon/orgs",
        repos_url: "https://api.github.com/users/Izgardon/repos",
        events_url: "https://api.github.com/users/Izgardon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Izgardon/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Izgardon/Lap-3-code-challenge",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/Izgardon/Lap-3-code-challenge",
      forks_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/forks",
      keys_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/teams",
      hooks_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/hooks",
      issue_events_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/events",
      assignees_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/tags",
      blobs_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/languages",
      stargazers_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/stargazers",
      contributors_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/contributors",
      subscribers_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/subscribers",
      subscription_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/subscription",
      commits_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/merges",
      archive_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/downloads",
      issues_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/labels{/name}",
      releases_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/Izgardon/Lap-3-code-challenge/deployments",
      created_at: "2022-06-22T08:09:33Z",
      updated_at: "2022-06-22T09:00:54Z",
      pushed_at: "2022-06-22T09:44:16Z",
      git_url: "git://github.com/Izgardon/Lap-3-code-challenge.git",
      ssh_url: "git@github.com:Izgardon/Lap-3-code-challenge.git",
      clone_url: "https://github.com/Izgardon/Lap-3-code-challenge.git",
      svn_url: "https://github.com/Izgardon/Lap-3-code-challenge",
      homepage: null,
      size: 283,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 462260956,
      node_id: "R_kgDOG42K3A",
      name: "Nicola",
      full_name: "Izgardon/Nicola",
      private: false,
      owner: {
        login: "Izgardon",
        id: 99081856,
        node_id: "U_kgDOBefegA",
        avatar_url: "https://avatars.githubusercontent.com/u/99081856?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Izgardon",
        html_url: "https://github.com/Izgardon",
        followers_url: "https://api.github.com/users/Izgardon/followers",
        following_url:
          "https://api.github.com/users/Izgardon/following{/other_user}",
        gists_url: "https://api.github.com/users/Izgardon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Izgardon/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Izgardon/subscriptions",
        organizations_url: "https://api.github.com/users/Izgardon/orgs",
        repos_url: "https://api.github.com/users/Izgardon/repos",
        events_url: "https://api.github.com/users/Izgardon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Izgardon/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Izgardon/Nicola",
      description: "Freelance website",
      fork: false,
      url: "https://api.github.com/repos/Izgardon/Nicola",
      forks_url: "https://api.github.com/repos/Izgardon/Nicola/forks",
      keys_url: "https://api.github.com/repos/Izgardon/Nicola/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Izgardon/Nicola/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/Izgardon/Nicola/teams",
      hooks_url: "https://api.github.com/repos/Izgardon/Nicola/hooks",
      issue_events_url:
        "https://api.github.com/repos/Izgardon/Nicola/issues/events{/number}",
      events_url: "https://api.github.com/repos/Izgardon/Nicola/events",
      assignees_url:
        "https://api.github.com/repos/Izgardon/Nicola/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Izgardon/Nicola/branches{/branch}",
      tags_url: "https://api.github.com/repos/Izgardon/Nicola/tags",
      blobs_url: "https://api.github.com/repos/Izgardon/Nicola/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/Izgardon/Nicola/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/Izgardon/Nicola/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/Izgardon/Nicola/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/Izgardon/Nicola/statuses/{sha}",
      languages_url: "https://api.github.com/repos/Izgardon/Nicola/languages",
      stargazers_url: "https://api.github.com/repos/Izgardon/Nicola/stargazers",
      contributors_url:
        "https://api.github.com/repos/Izgardon/Nicola/contributors",
      subscribers_url:
        "https://api.github.com/repos/Izgardon/Nicola/subscribers",
      subscription_url:
        "https://api.github.com/repos/Izgardon/Nicola/subscription",
      commits_url: "https://api.github.com/repos/Izgardon/Nicola/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Izgardon/Nicola/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Izgardon/Nicola/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Izgardon/Nicola/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Izgardon/Nicola/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Izgardon/Nicola/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/Izgardon/Nicola/merges",
      archive_url:
        "https://api.github.com/repos/Izgardon/Nicola/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/Izgardon/Nicola/downloads",
      issues_url:
        "https://api.github.com/repos/Izgardon/Nicola/issues{/number}",
      pulls_url: "https://api.github.com/repos/Izgardon/Nicola/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Izgardon/Nicola/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Izgardon/Nicola/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/Izgardon/Nicola/labels{/name}",
      releases_url:
        "https://api.github.com/repos/Izgardon/Nicola/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/Izgardon/Nicola/deployments",
      created_at: "2022-02-22T11:09:57Z",
      updated_at: "2022-03-03T17:18:57Z",
      pushed_at: "2022-03-04T13:34:18Z",
      git_url: "git://github.com/Izgardon/Nicola.git",
      ssh_url: "git@github.com:Izgardon/Nicola.git",
      clone_url: "https://github.com/Izgardon/Nicola.git",
      svn_url: "https://github.com/Izgardon/Nicola",
      homepage: null,
      size: 2019,
      stargazers_count: 0,
      watchers_count: 0,
      language: "HTML",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 455956635,
      node_id: "R_kgDOGy1Ymw",
      name: "Portfolio-Website",
      full_name: "Izgardon/Portfolio-Website",
      private: false,
      owner: {
        login: "Izgardon",
        id: 99081856,
        node_id: "U_kgDOBefegA",
        avatar_url: "https://avatars.githubusercontent.com/u/99081856?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Izgardon",
        html_url: "https://github.com/Izgardon",
        followers_url: "https://api.github.com/users/Izgardon/followers",
        following_url:
          "https://api.github.com/users/Izgardon/following{/other_user}",
        gists_url: "https://api.github.com/users/Izgardon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Izgardon/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Izgardon/subscriptions",
        organizations_url: "https://api.github.com/users/Izgardon/orgs",
        repos_url: "https://api.github.com/users/Izgardon/repos",
        events_url: "https://api.github.com/users/Izgardon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Izgardon/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Izgardon/Portfolio-Website",
      description: "My website",
      fork: false,
      url: "https://api.github.com/repos/Izgardon/Portfolio-Website",
      forks_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/forks",
      keys_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/teams",
      hooks_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/hooks",
      issue_events_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/events",
      assignees_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/branches{/branch}",
      tags_url: "https://api.github.com/repos/Izgardon/Portfolio-Website/tags",
      blobs_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/languages",
      stargazers_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/stargazers",
      contributors_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/contributors",
      subscribers_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/subscribers",
      subscription_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/subscription",
      commits_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/merges",
      archive_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/downloads",
      issues_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/labels{/name}",
      releases_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/Izgardon/Portfolio-Website/deployments",
      created_at: "2022-02-05T18:48:31Z",
      updated_at: "2022-03-03T17:18:09Z",
      pushed_at: "2022-04-28T12:17:06Z",
      git_url: "git://github.com/Izgardon/Portfolio-Website.git",
      ssh_url: "git@github.com:Izgardon/Portfolio-Website.git",
      clone_url: "https://github.com/Izgardon/Portfolio-Website.git",
      svn_url: "https://github.com/Izgardon/Portfolio-Website",
      homepage: null,
      size: 6417,
      stargazers_count: 0,
      watchers_count: 0,
      language: "SCSS",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 460078890,
      node_id: "R_kgDOG2w_Kg",
      name: "Recipe-Website",
      full_name: "Izgardon/Recipe-Website",
      private: false,
      owner: {
        login: "Izgardon",
        id: 99081856,
        node_id: "U_kgDOBefegA",
        avatar_url: "https://avatars.githubusercontent.com/u/99081856?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Izgardon",
        html_url: "https://github.com/Izgardon",
        followers_url: "https://api.github.com/users/Izgardon/followers",
        following_url:
          "https://api.github.com/users/Izgardon/following{/other_user}",
        gists_url: "https://api.github.com/users/Izgardon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Izgardon/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Izgardon/subscriptions",
        organizations_url: "https://api.github.com/users/Izgardon/orgs",
        repos_url: "https://api.github.com/users/Izgardon/repos",
        events_url: "https://api.github.com/users/Izgardon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Izgardon/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Izgardon/Recipe-Website",
      description: "Website to find a recipe",
      fork: false,
      url: "https://api.github.com/repos/Izgardon/Recipe-Website",
      forks_url: "https://api.github.com/repos/Izgardon/Recipe-Website/forks",
      keys_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/Izgardon/Recipe-Website/teams",
      hooks_url: "https://api.github.com/repos/Izgardon/Recipe-Website/hooks",
      issue_events_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/issues/events{/number}",
      events_url: "https://api.github.com/repos/Izgardon/Recipe-Website/events",
      assignees_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/branches{/branch}",
      tags_url: "https://api.github.com/repos/Izgardon/Recipe-Website/tags",
      blobs_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/languages",
      stargazers_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/stargazers",
      contributors_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/contributors",
      subscribers_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/subscribers",
      subscription_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/subscription",
      commits_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/Izgardon/Recipe-Website/merges",
      archive_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/downloads",
      issues_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/labels{/name}",
      releases_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/Izgardon/Recipe-Website/deployments",
      created_at: "2022-02-16T16:10:52Z",
      updated_at: "2022-03-03T17:21:38Z",
      pushed_at: "2022-02-22T10:18:25Z",
      git_url: "git://github.com/Izgardon/Recipe-Website.git",
      ssh_url: "git@github.com:Izgardon/Recipe-Website.git",
      clone_url: "https://github.com/Izgardon/Recipe-Website.git",
      svn_url: "https://github.com/Izgardon/Recipe-Website",
      homepage: null,
      size: 84058,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 498749878,
      node_id: "R_kgDOHbpRtg",
      name: "server-momentum",
      full_name: "Izgardon/server-momentum",
      private: false,
      owner: {
        login: "Izgardon",
        id: 99081856,
        node_id: "U_kgDOBefegA",
        avatar_url: "https://avatars.githubusercontent.com/u/99081856?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Izgardon",
        html_url: "https://github.com/Izgardon",
        followers_url: "https://api.github.com/users/Izgardon/followers",
        following_url:
          "https://api.github.com/users/Izgardon/following{/other_user}",
        gists_url: "https://api.github.com/users/Izgardon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Izgardon/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Izgardon/subscriptions",
        organizations_url: "https://api.github.com/users/Izgardon/orgs",
        repos_url: "https://api.github.com/users/Izgardon/repos",
        events_url: "https://api.github.com/users/Izgardon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Izgardon/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Izgardon/server-momentum",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/Izgardon/server-momentum",
      forks_url: "https://api.github.com/repos/Izgardon/server-momentum/forks",
      keys_url:
        "https://api.github.com/repos/Izgardon/server-momentum/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Izgardon/server-momentum/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/Izgardon/server-momentum/teams",
      hooks_url: "https://api.github.com/repos/Izgardon/server-momentum/hooks",
      issue_events_url:
        "https://api.github.com/repos/Izgardon/server-momentum/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/Izgardon/server-momentum/events",
      assignees_url:
        "https://api.github.com/repos/Izgardon/server-momentum/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Izgardon/server-momentum/branches{/branch}",
      tags_url: "https://api.github.com/repos/Izgardon/server-momentum/tags",
      blobs_url:
        "https://api.github.com/repos/Izgardon/server-momentum/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/Izgardon/server-momentum/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/Izgardon/server-momentum/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/Izgardon/server-momentum/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/Izgardon/server-momentum/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/Izgardon/server-momentum/languages",
      stargazers_url:
        "https://api.github.com/repos/Izgardon/server-momentum/stargazers",
      contributors_url:
        "https://api.github.com/repos/Izgardon/server-momentum/contributors",
      subscribers_url:
        "https://api.github.com/repos/Izgardon/server-momentum/subscribers",
      subscription_url:
        "https://api.github.com/repos/Izgardon/server-momentum/subscription",
      commits_url:
        "https://api.github.com/repos/Izgardon/server-momentum/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Izgardon/server-momentum/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Izgardon/server-momentum/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Izgardon/server-momentum/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Izgardon/server-momentum/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Izgardon/server-momentum/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/Izgardon/server-momentum/merges",
      archive_url:
        "https://api.github.com/repos/Izgardon/server-momentum/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/Izgardon/server-momentum/downloads",
      issues_url:
        "https://api.github.com/repos/Izgardon/server-momentum/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/Izgardon/server-momentum/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Izgardon/server-momentum/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Izgardon/server-momentum/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/Izgardon/server-momentum/labels{/name}",
      releases_url:
        "https://api.github.com/repos/Izgardon/server-momentum/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/Izgardon/server-momentum/deployments",
      created_at: "2022-06-01T13:34:22Z",
      updated_at: "2022-06-09T17:33:09Z",
      pushed_at: "2022-06-14T15:50:55Z",
      git_url: "git://github.com/Izgardon/server-momentum.git",
      ssh_url: "git@github.com:Izgardon/server-momentum.git",
      clone_url: "https://github.com/Izgardon/server-momentum.git",
      svn_url: "https://github.com/Izgardon/server-momentum",
      homepage: null,
      size: 112,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 497953324,
      node_id: "R_kgDOHa4qLA",
      name: "telegraph-server",
      full_name: "Izgardon/telegraph-server",
      private: false,
      owner: {
        login: "Izgardon",
        id: 99081856,
        node_id: "U_kgDOBefegA",
        avatar_url: "https://avatars.githubusercontent.com/u/99081856?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Izgardon",
        html_url: "https://github.com/Izgardon",
        followers_url: "https://api.github.com/users/Izgardon/followers",
        following_url:
          "https://api.github.com/users/Izgardon/following{/other_user}",
        gists_url: "https://api.github.com/users/Izgardon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Izgardon/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Izgardon/subscriptions",
        organizations_url: "https://api.github.com/users/Izgardon/orgs",
        repos_url: "https://api.github.com/users/Izgardon/repos",
        events_url: "https://api.github.com/users/Izgardon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Izgardon/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Izgardon/telegraph-server",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/Izgardon/telegraph-server",
      forks_url: "https://api.github.com/repos/Izgardon/telegraph-server/forks",
      keys_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/Izgardon/telegraph-server/teams",
      hooks_url: "https://api.github.com/repos/Izgardon/telegraph-server/hooks",
      issue_events_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/events",
      assignees_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/branches{/branch}",
      tags_url: "https://api.github.com/repos/Izgardon/telegraph-server/tags",
      blobs_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/languages",
      stargazers_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/stargazers",
      contributors_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/contributors",
      subscribers_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/subscribers",
      subscription_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/subscription",
      commits_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/merges",
      archive_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/downloads",
      issues_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/labels{/name}",
      releases_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/Izgardon/telegraph-server/deployments",
      created_at: "2022-05-30T13:22:59Z",
      updated_at: "2022-05-30T14:56:42Z",
      pushed_at: "2022-05-30T14:57:59Z",
      git_url: "git://github.com/Izgardon/telegraph-server.git",
      ssh_url: "git@github.com:Izgardon/telegraph-server.git",
      clone_url: "https://github.com/Izgardon/telegraph-server.git",
      svn_url: "https://github.com/Izgardon/telegraph-server",
      homepage: null,
      size: 43,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
  ];
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

  // Fetch request
  // useEffect(() => {
  //   const getGitHub = async (username) => {
  //     try {
  //       const { data } = await axios.get(
  //         `https://api.github.com/users/${username}/repos`
  //       );
  //       // let data = test;
  //       console.log(data);
  //       setData(data);
  //     } catch (err) {
  //       setError(err);
  //     }
  //   };
  //   getGitHub(username);
  // }, [username]);
  console.log(data);
  useEffect(() => {
    setData(test);
  }, []);
  console.log(data);

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
