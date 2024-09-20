import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDb is already connected');
    }

    try{
        await mongoose.connect(ProcessingInstruction.env.MONGODB_URI,{
            dbName: "share prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true,

        console.log('MongoDB connected')
    }catch (error){
        console.log(error);
    }
}