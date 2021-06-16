import { MongoClient } from 'mongodb'

async function handler (req, res) {
  if (req.method === 'POST') {
    const data = req.body
    const client = await MongoClient.connect('mongodb+srv://admin:passwordpassword@cluster0.1o2ym.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const result = meetupsCollection.insertOne(data)
    client.close()
    res.status()
    console.log(result)
  }
}

export default handler
