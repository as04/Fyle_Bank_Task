import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const bankSchema = new Schema({
	"ifsc" : String,
	"bank_id" : Number,
	"branch" : String,
	"address" : String,
	"city" : String,
	"district" : String,
	"state" : String,
	"bank_name" : String
}, {collection: 'bank_branches'});
let BankData = mongoose.model('BankData', bankSchema);

BankData.getByQuery = (query, callback) => {
  BankData.find(query, function(err, docs){
    callback(docs);
  });
};

export default BankData

