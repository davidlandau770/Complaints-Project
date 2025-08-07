import { connectToMongodb } from "../db/connect.js";

const getAdminsDB = async () => {
    const db = await connectToMongodb();
    return db.collection('admins').find().toArray();
}

export {
    getAdminsDB
}