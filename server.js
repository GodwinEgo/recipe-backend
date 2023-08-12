const express = require("express");
const dotenv = require("dotenv");
const port = process.env.PORT || 5001;
const app = express();
const axios = require("axios");
dotenv.config();

app.set("view engine", "ejs");
//app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/search", async (req, res) => {
  const searchQuery = req.query.q;
  try {
    const response = await axios.get(
      `https://api.spoonacular/recipes/findByIngredients`,
      {
        params: {
          apiKey: "7a6a69c5873b4b78bfd53bcef5102cea",
          ingredients: searchQuery,
          number: 10,
        },
      }
    );
    const recipes = response.data;
    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes: ", error);
    res.status(500).json({ Error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
