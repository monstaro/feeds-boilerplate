const stream = require("getstream");


const userClient = stream.connect(YOUR_API_KEY, USER_TOKEN);

const feed = userClient.feed("user", "NewFeed")

const getFeed = async () => {
   return await feed.get()
}

// getFeed().then(r => console.log(r))

const followFeed = async () => {
   return await feed.followFeed("user", "NewFeed2")
}

const addActivity = async () => {
   return await feed.addActivity({
      text: "Hello!",
      verb: "activity",
      object: "activity:1",
      foreign_id: "activity:1",
      time: new Date().toISOString()
   })
}

addActivity().then(r => console.log(r))