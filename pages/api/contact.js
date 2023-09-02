import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (!email || !email.includes("@") || !name.trim() || !message.trim()) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }
    // store it in a Data Base

    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://yunseul:${process.env.NEXT_PUBLIC_MONGODB_PW}@cluster0.nmcmrpa.mongodb.net/?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      console.log(error);
      return;
    }
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }
    client.close();
    res.status(200).json({ message: newMessage });
  }
}
export default handler;
