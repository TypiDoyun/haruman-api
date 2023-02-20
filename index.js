import bodyParser from "body-parser";
import express from "express";
import { createAPI } from "./apis/create";
import { readAPI } from "./apis/read";
import { config } from "dotenv"
import { updateAPI } from "./apis/update";
import { deleteAPI } from "./apis/delete";

config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.WAS_PORT, () => {
    console.log(`The server is running on port ${process.env.WAS_PORT}`);
});

app.post("/create", createAPI);
app.post("/read", readAPI);
app.post("/update", updateAPI);
app.post("/delete", deleteAPI);