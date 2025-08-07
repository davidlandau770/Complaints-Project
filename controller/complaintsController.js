import { addComplaintDB, getMaxId } from "../DAL/complaintDAL.js";

const getComplaints = async (req, res) => {
  res.send("get all");
};

const addComplaint = async (req, res) => {
  const response = req.body;
  console.log(response);
  let resId = await getMaxId("complaints");
  const maxId = resId.length > 0 ? resId[0].id : 0;
  const carrier = response.carrier;
  const complaint = response.complaint;
  const createAt = new Date();
  const obj = {
    id: maxId + 1,
    carrier: carrier,
    complaint: complaint,
    createAt: createAt,
  };
  let result;
  try {
    result = await addComplaintDB(obj);
  } catch (error) {
    return res.send({ err: error });
  }
  if (result.acknowledged === true) {
    res.send(result);
  } else {
    res.send({ err: "addComplaintDB" });
  }
};

export { getComplaints, addComplaint };
