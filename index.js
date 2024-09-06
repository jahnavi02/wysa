const express = require("express");
require("dotenv").config();

const app = express();
const mongoose = require("mongoose");

const connectWithDB = require("./config/dbConfig");
const server = require("http").createServer(app);
const assessmentRoutes = require("./routes/assessmentRoutes")


const PORT = process.env.PORT || 5002;

async function startServer() {
    try {
        await connectWithDB(process.env.MONGO_URI);

        app.use(express.json());

        app.use("/api", assessmentRoutes);

        server.listen(PORT, () => {
            console.log(`App listening at http://localhost:${PORT}`);
        });
    }catch(error){
        console.log("Error - " + error.message);

        await mongoose.connection.close();
        console.log("Database connection closed");
        console.log("Server is shutting down");
        process.exit();
    }
    
}

startServer();

