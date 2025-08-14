import { getAdminsDB } from "../DAL/adminDAL.js";

// adminDAL.js
const checkGetAdminsDB = () => {
  let response;
  try {
    response = getAdminsDB();
  } catch (error) {
    return console.log("getAdminsDB: ", error);
  }
  if (!response) {
    return console.log("getAdminsDB: response is undefind");
  }
  if (typeof response !== "object") {
    return console.log("getAdminsDB: response not object");
  }
  console.log("good!: getAdminsDB");
};

checkGetAdminsDB();
