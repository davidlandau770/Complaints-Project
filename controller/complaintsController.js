import {
  addComplaintDB,
  getComplaintDB,
  getMaxId,
} from "../DAL/complaintDAL.js";

const getComplaints = async (req, res) => {
  let response;
  try {
    response = await getComplaintDB();
  } catch (error) {
    return res.json({ err: "getComplaintDB: " + error });
  }
  res.send(JSON.stringify(response));
};

const addComplaint = async (req, res) => {
  const response = req.body;
  console.log(response);
  let resId = await getMaxId("complaints");
  const maxId = resId.length > 0 ? resId[0].id : 0;
  const category = response.category;
  const message = response.message;
  const createAt = new Date();
  const obj = {
    id: maxId + 1,
    category: category,
    message: message,
    createAt: createAt,
  };
  let result;
  try {
    result = await addComplaintDB(obj);
  } catch (error) {
    return res.send({ err: error });
  }
  if (result.acknowledged === true) {
    res.redirect("thanks.html");
  } else {
    res.send({ err: "addComplaintDB" });
  }
};

export { getComplaints, addComplaint };
