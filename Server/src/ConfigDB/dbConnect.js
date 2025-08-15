import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = process.env.MONGO_URL;

export const dbConnect = async () => {
    if (!db) {
        console.error('MONGO_URL is not defined in environment variables.');
        process.exit(1);
    }

    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('✅ MongoDB connected successfully');
    } catch (err) {
        console.error('❌ MongoDB connection failed:', err.message);
        console.error(err.stack);
        process.exit(1); // Exit the app on DB connection failure
    }
};
