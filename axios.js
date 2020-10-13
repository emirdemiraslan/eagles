const axios = require("axios");

axios
  .post("https://eagles.miltoneducation.com/student-username-login", {
    username: "dokuzstudent",
    password: "2020",
  })
  .then((res) => {
    console.log(`statusCode: ${res.statusCode}`);
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
