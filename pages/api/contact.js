import { MongoClient } from 'mongodb';

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.passowrd}@${process.env.clustername}.vndt4.mongodb.net/${process.env.database}?retryWrites=true&w=majority`;

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'invalid data' });
    }

    const newMessage = {
      name,
      email,
      text,
    };

    let client;
    try {
      client = await MongoClient.connect(
        'mongodb+srv://alex:andaluzia231178@cluster0.vndt4.mongodb.net/blog?retryWrites=true&w=majority'
      );
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to MongoDB' });
    }

    try {
      const db = client.db();
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: 'Could not send data to MongoDB' });
      client.close();
    }

    res.status(201).json({ message: 'success', return: newMessage });

    client.close();
  }
};

export default handler;
