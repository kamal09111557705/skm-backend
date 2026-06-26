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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`SKM Server Running on port ${PORT}`);
});