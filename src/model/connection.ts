import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;


const connectMongo = () => mongoose.connect(MONGO_URI as string)

export default connectMongo;