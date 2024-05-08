const stream = require("getstream");


const userClient = stream.connect("2yxg5ueum4b7", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQ29keSJ9.tBSPfQOfCGNhAs9kypLgoTdecUifZ792CiyX6_YtTfM", "1116600");

const getFeed = async () => {
   const feed = userClient.feed("user", "Cody")
   return await feed.get()
}

getFeed().then(r => console.log(r))