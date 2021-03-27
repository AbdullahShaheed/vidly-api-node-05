const genres = require("./routes/genres");
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");
const express = require("express");
const app = express();


app.use(express.json());
app.use(logger);
app.use(auth);
app.use("/api/genres", genres);

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
