const stream = require("getstream");

const serverClient = stream.connect(
  "2yxg5ueum4b7",
  "dce8dnkyrn6ejuy4gf2g7r5fwgdb7kgqfwmqx6fche7rbjm8y2ua8cb3vg873w8v"
);

const userId = "Cody";
const userToken = serverClient.createUserToken(userId, 1116600);



const clientClient = stream.connect(app_key, userToken, "1116600");
