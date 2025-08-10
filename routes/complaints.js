import express from "express";
import { addComplaint, getComplaints } from "../controller/complaintsController.js";
import { checkAuth } from "../middleware/auth.js";

const complaintRoutes = express.Router();

complaintRoutes.get('/get', checkAuth, getComplaints);
complaintRoutes.post('/submit', addComplaint);

export {
    complaintRoutes
}
