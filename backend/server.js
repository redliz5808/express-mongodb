// Set up Express
// ES6 with Babel lets us import as opposed to require.
import express from "express";

// Set the port on which the application will listen
const PORT = process.env.APPLICATION_PORT || 8080;

const app = express();

// Route data through Express prior to process data
app.use(express.json());

// Tell the app to do something
// In this case, when the path "/ping" is called,
// it will log the message and then send the
// desired response as written below
app.get("/ping", (req, res) => {
    console.log(`Received a ping...`);
    res.send(`And this is the response`);
});

// Tell the app to listen on the designated port
// Then tell the app what to do once it's listening
app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`);
});
