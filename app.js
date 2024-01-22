import "dotenv/config";
import express from "express";
import postsRoute from "./routes/posts.js";

const app = express();

app.set("port", process.env.PORT || 4000);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the machine');
});

app.use("/posts", postsRoute);

app.listen(app.get("port"), () => {
  console.log(`Server ready on port ${app.get("port")}`);
});
