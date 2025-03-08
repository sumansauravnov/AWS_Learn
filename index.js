const express = require("express");
const cors=require("cors");
const { userRoute } = require("./routes/user.route");
const { connection } = require("./config/db");
const { productRoute } = require("./routes/product.route");
require("dotenv").config();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", userRoute);
app.use("/api", productRoute);


app.listen(process.env.PORT, () => {
    connection();
  console.log(`Server running on port ${process.env.PORT}`);
});
