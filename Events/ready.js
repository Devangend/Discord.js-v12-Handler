const express = require("express");
const app = express();

module.exports = async (client) => {
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.send('AyakaBot Webpage Online :3')
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
  console.log(`${client.user.tag} is ready`);
}