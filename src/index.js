
import { BlockModel } from './models/block.model.js';
import { PersonModel } from './models/person.model.js';
import { BlockChain } from './blockchain.js';

let blockChain = new BlockChain();
let person = {
  "name": "Diego",
  "rut": "18789897-2",
  "age": 25,
  "country": "CHL"
}



blockChain.addNewBlock(new BlockModel('02/02/2022', person,'1'));
console.log(JSON.stringify(blockChain, null, 4));