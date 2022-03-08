const https = require("https");

function getRepos(username, done) {
  if (!username) return done(new Error("You need to set correct username"));
  const option = {
    hostname: "api.github.com",
    path: `/users/${username}/repos`,
    headers: {
      "User-Agent": "github-app",
    },
  };

  const req = https.get(option, (res) => {
    res.setEncoding("utf-8");
    if (res.statusCode === 200) {
      let body = "";
      res.on("data", (data) => (body += data));
      res.on("end", () => {
        try {
          result = JSON.parse(body);
          done(null, result);
        } catch {
          done(new Error("Not possible to data config"));
        }
      });
    } else {
      done(
        new Error(
          `Error to server connection ${res.statusCode} ${res.statusMessage}`
        )
      );
    }
  });
  req.on("error", (error) => done(new Error("Request not possible to send")));
}

module.exports = { getRepos };
