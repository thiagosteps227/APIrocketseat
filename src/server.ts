import express, { response } from 'express';

const app = express();

app.get("/users",(request,response) => {
    return response.json({message: "Hello World!"})
});

app.post("/", (request, response) => {
    return response.json({message: "os dados foram salvos com sucesso"})
});

app.listen(3333, ()=> console.log("The server is running"));