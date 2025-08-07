import express from "express";
import { addComplaint, getComplaints } from "../controller/complaintsController.js";

const complaintRoutes = express.Router();

complaintRoutes.get('/get', getComplaints);
complaintRoutes.post('/submit', addComplaint);

export {
    complaintRoutes
}
