import { connectToMongodb } from "../db/connect.js";

const getEmailsDB = async () => {
    const db = await connectToMongodb();
    return db.collection('emails').find().toArray();
}

const addEmailsDB = async (data) => {
    const db = await connectToMongodb();
    return db.collection("emails").insertOne(data);
}

export {
    getEmailsDB,
    addEmailsDB
}