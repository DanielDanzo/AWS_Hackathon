const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const uri = "mongodb+srv://TD-KMS:Starco05@cluster0.f46xymx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

app.post('/submit-student', async (req, res) => {
    const studentData = req.body;

    try {
        await client.connect();
        const result = await createStudent(client, studentData);
        res.status(201).send(`New student created with the following id: ${result.insertedId}`);
    } catch (error) {
        res.status(500).send(error.message);
    } finally {
        await client.close();
    }
});

app.get('/courses', async (req, res) => {
    try {
        await client.connect();
        const courses = await getCourses(client);
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).send(error.message);
    } finally {
        await client.close();
    }
});

app.get('/events', async (req, res) => {
    try {
        await client.connect();
        const events = await getEvents(client);
        res.status(200).json(events);
    } catch (error) {
        res.status(500).send(error.message);
    } finally {
        await client.close();
    }
});

app.get('/bursaries', async (req, res) => {
    try {
        await client.connect();
        const bursaries = await getBursaries(client);
        res.status(200).json(bursaries);
    } catch (error) {
        res.status(500).send(error.message);
    } finally {
        await client.close();
    }
});

async function createStudent(client, newStudent) {
    const result = await client.db("test").collection("students").insertOne(newStudent);
    return result;
}

async function getCourses(client) {
    const cursor = await client.db("test").collection("courses").find({});
    const courses = await cursor.toArray();
    return courses;
}

async function getEvents(client) {
    const cursor = await client.db("test").collection("events").find({});
    const events = await cursor.toArray();
    return events;
}

async function getBursaries(client) {
    const cursor = await client.db("test").collection("bursaries").find({});
    const bursaries = await cursor.toArray();
    return bursaries;
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
