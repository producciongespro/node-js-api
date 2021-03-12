import mongoose from 'mongoose';
import config from './config';


const start = async () => {
    const db = await mongoose.connect(config.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Conectado a la base de dedtos:", db.connection.name  );
}

start();