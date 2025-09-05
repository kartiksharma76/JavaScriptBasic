const mongoose = require('mongoose');

async function connectToMongoDB() {
    
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase') 
    } catch (err) {
        console.error('MongoDB connection error:', err);  
    }
}

// Example usage:
connectToMongoDB().then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB:', err);
});

module.exports = mongoose;