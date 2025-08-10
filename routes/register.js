import express from "express";
import { register } from "../controller/registerController.js";

const registerRoutes = express.Router();

registerRoutes.post('/', register);

export {
    registerRoutes
}
