import { connectToMongodb } from "../db/connect.js";

const getMaxId = async (collection) => {
  const db = await connectToMongodb();
  return await db.collection(collection).find({}).sort({ id: -1 }).limit(1).toArray();
};

const getComplaintDB = async () => {
    const db = await connectToMongodb();
    return db.collection('complaints').find().toArray();
}

const addComplaintDB = async (data) => {
    const db = await connectToMongodb();
    return db.collection("complaints").insertOne(data);
}

const updateComplaintDB = async (id, data) => {
    const db = await connectToMongodb();
    return db.collection('getID').updateOne(
        { },
        { $set: {id: +1} },
        {}
    )
}

const deleteComplaintDB = async (id) => {
    const db = await connectToMongodb();
    return db.collection('complaints').deleteOne(
        { id: id }
    )
}

export {
    getMaxId,
    getComplaintDB,
    addComplaintDB,
    updateComplaintDB,
    deleteComplaintDB
}