import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const connToDb = async (callback) => {
  try{
    await mongoose.connect('mongodb://localhost/bank_details', { useNewUrlParser: true });
    console.log('Connected to DB');
   // callback(true);
  }
  catch (err) {
    console.log('DB Connection Failed!')
    //callback(false);
  }
};

export default connToDb;
