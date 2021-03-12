import mongoose from 'mongoose';


const start = async () => {
    const db = await mongoose.connect('mongodb://localhost/valle-fresco', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Conectado a la base de dedtos:", db.connection.name  );
}

start();