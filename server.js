const express = require("express");
const cors = require("cors");
const postRoute = require("./routes/postRoutes");
const error = require("./middleware/error");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", postRoute);
app.use(error);
app.listen(process.env.PORT || 5000, () => {
  console.log("server is running at 5000");
});
