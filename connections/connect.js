import mongoose from 'mongoose';

export default async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test',{ useNewUrlParser: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error.message);
    }
};
