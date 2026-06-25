const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("SKM API Running");
});

app.get("/status", (req, res) => {
    res.json({
        status: "online",
        system: "SKM Service"
    });
});

app.listen(3000, () => {
    console.log("SKM Server Running");
});