import {BlockModel} from './models/block.model.js';
export class BlockChain {
    constructor() {
      this.chain = [this.createGenesisBlock];
    }
  
    createGenesisBlock = () => new BlockModel('01/01/2022', "Genesis block", "0");
    getLastBlock = () => this.chain[this.chain.length - 1];
  
    addNewBlock(newBlock) {
      newBlock.previousHash = this.getLastBlock().hash;
      newBlock.hash = newBlock.generateHash();
      this.chain.push(newBlock);
    }
  
  }
  