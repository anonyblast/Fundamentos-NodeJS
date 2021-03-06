const { request } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

// localhost:3333

app.get("/courses", (request, response) => {
    // return response.send("Hello World!");
    const query = request.query;
    console.log(query);
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
    // return response.send("Hello World!");
    const body = request.body;
    console.log(body);
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
    // return response.send("Hello World!");
    const { id } = request.params;
    console.log(id);
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
    // return response.send("Hello World!");
    return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
    // return response.send("Hello World!");
    return response.json(["Curso 6", "Curso 2", "Curso 4"]);
});



app.listen(3333);