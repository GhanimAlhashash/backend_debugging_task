const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require ("morgan");

dotenv.config();
require("./db");

const app = express();
app.use(express.json());

const todoRouter = require("./routers/routes/todos");

app.use(todoRouter);

app.use(cors);

app.use(morgan("dev"));


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
