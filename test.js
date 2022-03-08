// const { stdin, stdout } = process;
// stdout.write("What is your name?\n");
// stdin.on("data", (data) => {
//   const dataStringified = data.reverse().toString();

//   stdout.write(`Hello, ${dataStringified.toUpperCase()}!\n`);
//   process.exit();
// });
// process.on("exit", () => stdout.write(`Bay Bay!!!`));

// const myBuffer = Buffer.from("Hi Node.js!", "utf-8");
// console.log(myBuffer);

// const { stdin, stdout } = process;
// stdin.on("data", (data) => {
//   const dataStringified = data.toString();
//   stdout.write(dataStringified.toUpperCase());
// });

// console.log(process.argv);

// function getValue(flag) {
//   const flagIndex = process.argv.indexOf(flag);
//   return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
// }
// const message = getValue("-m");
// console.log(message);

// const { stdin, stdout } = process;
// stdout.write("Enter 2 numbers\n");
// stdout.write("> ");

// stdin.on("data", (data) => {

//     stdout.write(`${data[0]} * ${data[0]} = ${data[0]*data[1]}`)
// })

// console.log(__dirname);
// console.log(__filename);

// const { stdout, stdin } = process;
// const flag = process.argv[2];
// // const allowedFlags = ["-d", "-f"];
// // if (!allowedFlags.includes(flag)) {
// //   stdout.write("Try use a correct flags or -d or -f");
// //   exit();
// // }
// // stdout.write("Please, set one of this flags:\n");
// // stdin.on("data", (flag) => {
// if (flag === "-d") {
//   stdout.write(__dirname);
// } else if (flag === "-f") {
//   stdout.write(__filename);
// } else {
//   stdout.write("Try use a correct flags or -d or -f");
// }
// // exit();
// // });

///////modules
//// module fs

// const fs = require("fs");
// const path = require("path");

// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//   if (err) throw err;
//   console.log("Folder was create");
// });

// fs.writeFile(
//   path.join(__dirname, "notes", "mynotes.txt"),
//   "Hello world",
//   (err) => {
//     if (err) throw err;
//     console.log("File was created");
//   }
// );

// fs.appendFile(
//   path.join(__dirname, "notes", "mynotes.txt"),
//   "  From append file",
//   (err) => {
//     if (err) throw err;
//     console.log("File was change");
//   }
// );

// fs.readFile(
//   path.join(__dirname, "notes", "mynotes.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) return err;
//     console.log(data);
//   }
// );

// fs.rename(
//   path.join(__dirname, "notes", "mynotes.txt"),
//   path.join(__dirname, "notes", "notes.txt"),
//   (err) => {
//     if (err) return err;
//     console.log("File renamed");
//   }
// );

// fs.writeFile(path.join(__dirname, "notes", "notes.js"), "NOTES", (err) => {
//   if (err) throw err;
//   console.log("File was created");
// });

// const os = require("os");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.uptime());
// console.log(os.EOL);

const http = require("http");

const PORT = 3000;

const requestHandler = (request, response) => {
  const { method, url } = request;
  const heading = `<h1 style="color: red">${url} page</h1>`;
  const content = `<div style="background-color: green; width: 100px; height: 100px">Green block 100px x 100px</div>`;
  console.log(`Received ${method} - request on ${url}`);
  response.write(heading);
  response.end(content);
};
const server = http.createServer(requestHandler);

server.listen(PORT, "localhost", () => {
  console.log("Server is run with port ${PORT}");
});
