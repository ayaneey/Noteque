// Dependencies

const PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const apiRoutes = require("./Develop/routes/apiRoutes")
const htmlRoutes = require("./Develop/routes/htmlRoutes")

// Middleware - parsing incoming requests with JSON (handling data)

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.use(express.json());
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

// Starting server
app.listen(PORT, () => {
    console.log(`API is now listening at ${PORT}`);
})



