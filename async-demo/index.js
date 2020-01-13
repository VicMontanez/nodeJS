console.log("Before");
getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log("Commits", commits));

console.log("After");

function getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
}
function displayCommits(commits) {
  console.log(commits);
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    //Kick off some async work
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting repo...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}
