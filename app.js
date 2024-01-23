import "dotenv/config";
import express from "express";

const app = express();

app.set("port", process.env.PORT || 4000);



app.listen(app.get("port"), () => {
  console.log(`Server ready on port ${app.get("port")}`);
});
