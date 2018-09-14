import 'dotenv/config';
//const { Messages } = require('./services/Messages');
import  Messages  from './services/Messages';
const feathers = require("@feathersjs/feathers");
const app = feathers();
var knex = require("knex")({
    client: "pg",
    version: "7.2",
    connection: {
        host: "127.0.0.1",
        user: process.env.DB_USER,
        password: "process.env.DB_PASS",
        database: "process.env.DB_NAME"
    }
});

// Initialize the messages service by creating
// a new instance of our class
app.use("messages", new Messages());

async function processMessages() {
    await app.service("messages").create({
        text: "First message"
    });

    await app.service("messages").create({
        text: "Second message"
    });

    const messageList = await app.service("messages").find();

    console.log("Available messages", messageList);
}

processMessages();
// Register a simple todo service that returns the name and some text
// app.use("todos", {
//     async get(name) {
//         // Return an object in the form of { name, text }
//         return {
//             name,
//             text: `You have to do ${name}`
//         };
//     }
// });

/**
 * gets a list of todo items
 *
 * @param {*} name - name of todo item
 */
// async function getTodo(name) {
//     // Get the service we registered above
//     const service = app.service("todos");
//     // Call the `get` method with a name
//     const todo = await service.get(name);

//     // Log the todo we got back
//     console.log(todo);
// }

// getTodo("dishes");
