import express from "express";
import { login } from "../controller/loginController.js";

const loginRoutes = express.Router();

loginRoutes.post('/', login);

export {
    loginRoutes
}
