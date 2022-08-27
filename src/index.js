import { BlockModel } from './';
import { PersonModel } from 'models/person.model.js';
import { BlockChain } from 'blockchain.js';


let blockChain = new BlockChain();
let person = new PersonModel.createPerson({
  "name": "Diego",
  "rut": "18789897-2",
  "age": 25,
  "country": "CHL"
});


blockChain.addNewBlock(new BlockModel('02/02/2022', person));
console.log(JSON.stringify(blockChain, null, 4));