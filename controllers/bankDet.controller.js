import 'regenerator-runtime/runtime';
import BankData from '../models/bank.model';

const controller = {}

controller.getBankDetails = (feed, callback) => {
	let query = {$and: [{"bank_name": feed.name.toUpperCase()}, {"city": feed.city.toUpperCase()}]}
	console.log(query);
	BankData.getByQuery(query, (data) => {
		callback(data);
	});
}

export default controller;
