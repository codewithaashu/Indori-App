import mongoose from 'mongoose';
const url =
  'mongodb+srv://codewithaashu1:Indore123@indori.quio9tq.mongodb.net/?retryWrites=true&w=majority';
const connectDB = async () => {
  try {
    const {connection} = await mongoose.connect(url);
    console.log(`Connection to DB successfully at port ${connection.port}`);
  } catch (err) {
    console.log('MongoDB connection error: ', err);
  }
};
export default connectDB;
