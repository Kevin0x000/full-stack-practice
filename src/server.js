import express from "express";
import { MongoClient } from "mongodb";
import path from 'path'


const app = express();

//tell app using our build
app.use(express.static(path.join(__dirname, '/build')))

app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // To parse the incoming requests with JSON payloads


app.get('/api/articles/:name', async (req, res) => {
    try {
        const articleName = req.params.name;
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
        const db = client.db('my-blog')

        const articlesInfo = await db.collection('articles').findOne({ name: articleName })

        res.status(200).json(articlesInfo)

        client.close()
    } catch (error) {
        res.status(500).json({ message: "wrooong!!" })
    }

})

app.post('/api/articles/:name/upvote', async (req, res) => {
    try {
        const articleName = req.params.name;
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
        const db = client.db('my-blog')

        const articlesInfo = await db.collection('articles').findOne({ name: articleName })
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                upvotes: articlesInfo.upvotes + 1,
            },
        })

        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName })

        res.status(200).json(updatedArticleInfo)

        client.close()
    } catch (error) {
        res.status(500).json({ message: "votes wrooong!!" })
    }
})

app.post('/api/articles/:name/add-comment', async (req, res) => {
    try {
        const articleName = req.params.name;
        const { username, text } = req.body;

        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
        const db = client.db('my-blog')

        const articlesInfo = await db.collection('articles').findOne({ name: articleName })
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                comments: articlesInfo.comments.concat({ username, text }),
            },
        })

        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName })

        res.status(200).json(updatedArticleInfo)

        client.close()
    } catch (error) {
        res.status(500).json({ message: "comments wrooong!!" })
    }
})

//all the request by api routes should be passed to our app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(8000, () => console.log('Listening on port 8000'))
