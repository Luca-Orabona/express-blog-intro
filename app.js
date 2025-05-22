import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {

  const arrayFoodJson = fs.readFileSync("foodData.json");
  const foodPosts = JSON.parse(arrayFoodJson)

  const dataJason = {
    data: foodPosts,
    counter: foodPosts.length
  };

  res.json(dataJason);
});



app.listen(port, () => {

})