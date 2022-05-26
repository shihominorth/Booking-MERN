import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";



const app = express();
dotenv.config();

const connect = async () => {
    try {

        await mongoose.connect(process.env.MONGODB);
        console.log("connected to mongo db")

    } catch (error) {

        throw error

    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongo db is disconnected.")
})

// mongoose.connection.on("connected", () => {
//     console.log("mongo db is connected.")
// })

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


app.get("/users", (req, res) => {
    res.send("HELLO World!");
})

app.listen(8000, () => {
    connect()
    console.log("Connect to backend!");
})