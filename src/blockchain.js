import { BlockModel } from './models/block.model.js';
import SHA256 from 'crypto-js/sha256';
export class Blockchain {


  constructor() {
    this.chain = [];
    this.height = -1;
    this.initializeChain();
  }

  createGenesisBlock = () => new BlockModel({ data: "Genesis Block" });
  generateNewHash=(newBlock)=>SHA256(JSON.stringify(newBlock)).toString();

  async initializeChain() {

    if (this.height == -1) {
      const block = this.createGenesisBlock();
      await this.addNewBlock(block)
    }
  }

  addNewBlock(newBlock) {
    let self = this;

    return new Promise((resolve, reject) => {

      newBlock.height = self.chain.length;
      newBlock.timestamp = Date.now();
      if (self.chain.length > 0) newBlock.previousHash = self.chain[self.chain.length - 1].hash;

      
      const errors = self.validateChain();
      if (errors.length > 0) reject(new Error("The chain is not valid:", errors));



      newBlock.hash = self.generateNewHash(newBlock)
      self.chain.push(newBlock);

      resolve(newBlock);


    })

  }
  validateChain() {
    let self = this;
    const errors = [];

    
    return new Promise(async (resolve, _) => {
      
      self.chain.map(async (block) => {
        
        try {
          
          let blockIsValid = await block.validate();
          
          if (!blockIsValid) errors.push(new Error(`Invalid block: ${block}`));

        } catch (error) {
          errors.push(error);
        }
      })
      resolve(errors);
    });


  }


  async print() {
    let self = this;
    console.log("______________________________________________\n");
    console.log("____________________BLOCKCHAIN DATA__________________\n");
    console.log("______________________________________________\n");
    for (let block of self.chain) {

      console.log(block.toString());
    }
    console.log("______________________________________________\n");
    console.log("____________________DECRYPTED DATA__________________\n");
    console.log("______________________________________________\n");
    for (let block of self.chain) {
      console.log(await block.decryptData(block));
    }

  }


}
