import express from "express";
import { configRoutes } from "./routes/configRoutes.js";
import { config } from "dotenv";
import { notFound } from "./middleware/notFound.js";
import cookieParser from "cookie-parser";
config();

const PORT = process.env.PORT;
const ROOT = process.env.ROOT;

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("./public"));
app.use(cookieParser());

configRoutes(app)

app.use('/', notFound)
app.listen(PORT, () => {
    console.log(`Express server running on http://${ROOT}:${PORT}`);
})