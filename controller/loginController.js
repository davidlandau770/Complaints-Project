import { getAdminsDB } from "../DAL/adminDAL.js";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    let response;
    try {
        response = await getAdminsDB();
    } catch (error) {
        return res.status(500).json({ msg: `getAdminsDB: ${error}` });
    }
    const currentAdmin = response.find(admin => admin.name === name);
    if (!currentAdmin) return res.status(404).json({ msg: "Admin is not found." });
    if (currentAdmin.password !== password) {
        return res.status(401).json({ msg: "Unauthorized" });
    }
    let token;
    try {
        token = createToken(currentAdmin);
    } catch (error) {
        console.log(error);
        return res.status(401).json({ getToken: error })
    }
    res.cookie("token", token, { httpOnly: true, sameSite: true })
    // res.header("authorization", token).json({ msg: "Verified" }); // שליחה בהדר
    res.redirect("verified.html")
    // res.json({ msg: "Verified" })
}

const createToken = (admin) => {
    const token = jwt.sign(
        {
            id: admin.id,
            name: admin.name,
            auth: "admin",
        },
        process.env.JWT_SECRET,
        { expiresIn: "20s" }
    );
    return token
}

export {
    login
}