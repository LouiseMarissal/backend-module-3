require("dotenv").config();
require("./config/mongo");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors("*"));

app.use("/cocktail", require("./routes/coktails"));

app.listen(process.env.PORT, () => {
  console.log("Server listening on port http://localhost:" + process.env.PORT);
});
