const https = require("https");

const data = JSON.stringify({
  username: "dokuzstudent",
  password: "2020"
});

const options = {
  hostname: "eagles.miltoneducation.com",
  port: 443,
  path: "/student-username-login",
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Content-Length": data.length,
    "Connection": "keep-alive",
    "Cache-Control": "no-cache",
    "Accept-Encoding":"en-US,en;q=0.9",
    "Origin": "https://eagles.miltoneducation.com",
    "Host": "eagles.miltoneducation.com",
    "Pragma": "no-cache",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "X-Requested-With" : "xmlhttprequest",

  },
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  console.log(`Headers: ${res.rawHeaders}`);
  console.log(`sid:`);
  console.log(res.headers['set-cookie'][0]);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.write(data);
req.end();
