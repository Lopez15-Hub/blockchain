
import { BlockModel } from './models/block.model.js';
import { PersonModel } from './models/person.model.js';
import { Blockchain } from './blockchain.js';


const createPerson = (personData) => new PersonModel(personData.name, personData.rut, personData.age, personData.country);


const person = createPerson(

  {
    "name": "Diego",
    "rut": "18779897-2",
    "age": 22,
    "country": "CHL"
  }

);
const b1 = new BlockModel(person)
async function run(){


  const blockChain =  new Blockchain();
  await blockChain.addNewBlock(b1);
  blockChain.print();

}
run();

