import 'regenerator-runtime/runtime';
import BankData from '../models/bank.model';

const controller = {}

controller.getIfsc = (feed, callback) => {
  let query = {"ifsc": feed.ifsc.toUpperCase()}
  BankData.getByQuery(query, (data)=> {
     callback(data);
  });
}

export default controller;
