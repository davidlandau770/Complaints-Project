import jwt from "jsonwebtoken";

const checkAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ msg: "אין לך הרשאה" });
  }
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.json({ msg: "עבר זמן ממושך, התחבר מחדש" })
  }
  if (!decoded.auth) {
    return res.json({ msg: "Unauthorized" });
  }
  next();
};

export { checkAuth };
