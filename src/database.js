import mongoose from 'mongoose';


const start = async () => {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Conectado a la base de dedtos:", db.connection.name  );
}

start();