
import mongoose from "mongoose";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(process.env.MONGO_URI)

export const connectDB = async () => {
    console.log(process.env.MONGO_URI);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected...${conn}`);
    } catch (e) {
        console.error(`Error : ${e}`);
    }
};

// import { MongoClient } from "mongodb";

// export const connectDB = async () => {
//     // TODO:
//     // Replace the placeholder connection string below with your
//     // Altas cluster specifics. Be sure it includes
//     // a valid username and password! Note that in a production environment,
//     // you do not want to store your password in plain-text here.

//     // The MongoClient is the object that references the connection to our
//     // datastore (Atlas, for example)
//     const client = new MongoClient(process.env.MONGO_URI);

//     // The connect() method does not attempt a connection; instead it instructs
//     // the driver to connect using the settings provided when a connection
//     // is required.
    
//         client.connect();
   
     
// }
