import mongoose from "mongoose";


const conncectDB = (url)=>{
mongoose.set('strictQuery', true);

mongoose.connect(url)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));
} 

export default conncectDB;