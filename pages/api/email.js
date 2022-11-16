var http = require("https");

var options = {
  method: "POST",
  hostname: "mekambio.ipzmarketing.com",
  port: null,
  path: "/api/v1/subscribers",
  headers: {
    "content-type": "application/json",
    "x-auth-token": "ukRNKGy1FZxNajq6NKAVMqsh1URk5xg85LDsfHac",
  },
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(
  JSON.stringify({
    status: "inactive",
    email: "testingAgain@gmail.com",
  })
);
req.end();
