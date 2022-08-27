import {Blockchain} from '../blockchain';
import { BlockModel } from '../models/block.model.js';
describe("Blockchain_UnitTest", () => {

    let chain, height;
    beforeEach(() => {
        chain = [];
        height = -1;
 
    })
    it("TST_0000000_Blockchain_Attributes_UnitTest", () => {
        
            const blockchain = new Blockchain();
            expect(blockchain.height).toEqual(height);
            expect(blockchain.chain.length).toEqual(1);
 
    })
 
    it("TST_0000001_Blockchain_createGenesisBlock_UnitTest", () => {
       const blockchain = new Blockchain();

       const genesisBlock = blockchain.createGenesisBlock();

       chain.push(genesisBlock);

       expect(blockchain.height).toEqual(-1)

    })
 
 
    it("TST_0000002_Blockchain_generateNewHash_UnitTest", () => {
        const newBlock = new BlockModel("Test");
       const blockchain = new Blockchain();

       const currentHash =  blockchain.generateNewHash(newBlock);

       expect(typeof currentHash).toEqual('string');
       expect(currentHash.length <= 64).toBe(true)

    })
 
 
 
    it("TST_0000003_Blockchain_validateChain_UnitTest", async () => {
 
       const blockchain = new Blockchain();
       const errors = await blockchain.validateChain();
       expect(errors.length).toEqual(0)
 
    })
    it("TST_0000004_Blockchain_addNewBlock_UnitTest",  () => {

        const newBlock = new BlockModel("Test2");
       const blockchain = new Blockchain();
       const block =  blockchain.addNewBlock(newBlock);
       expect(block).not.toBe(null);
 
    })

 
 })