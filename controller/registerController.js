import { addEmailsDB, getEmailsDB } from "../DAL/EmailsDAL.js";

const register = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  let response;
  try {
    response = await getEmailsDB();
  } catch (error) {
    return res.status(500).json({ msg: `getEmailsDB: ${error}` });
  }
  const currentEmail = response.find((user) => user.email === email);
  if (currentEmail)
    return res.status(404).json({ msg: "Email is already exists." });
  
  const obj = {
    name: name,
    email: email
  }
  let result;
  try {    
    result = await addEmailsDB(obj);
  } catch (error) {
    return res.send({ err: error });
  }
  if (result.acknowledged === true) {
    res.redirect("register.html");
  } else {
    res.send({ err: "addEmailsDB" });
  }
};

export { register };
