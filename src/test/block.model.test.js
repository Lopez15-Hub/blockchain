import { BlockModel } from '../models/block.model';

describe("BlockModel_UnitTest", () => {

   let previousHash, height, hash, blockData, testData;
   beforeEach(() => {

      hash = null;
      height = 0;
      previousHash = '';
      blockData = "Test";
      testData = Buffer.from(JSON.stringify(blockData)).toString("hex");

   })
   it("TST_0000000_BlockModel_Attributes_UnitTest", async () => {

      const block = new BlockModel(blockData);
      expect(block.height).toEqual(height);
      expect(block.hash).toEqual(hash);
      expect(block.blockData).toEqual(testData);
      expect(block.previousHash).toEqual(previousHash);

   })

   it("TST_0000001_BlockModel_GenerateHash_UnitTest", () => {

      const block = new BlockModel(blockData);
      const currentHash = block.generateHash(block);
      expect(typeof currentHash).toEqual('string');
      expect(currentHash.length <= 64).toBe(true)
   })


   it("TST_0000002_BlockModel_ValidateBlockFails_UnitTest", async () => {

      const block = new BlockModel(blockData);
      const isValid = await block.validate();
      expect(isValid).toEqual(false);
   })



   it("TST_0000003_BlockModel_getData_UnitTest", async () => {

      const block = new BlockModel(blockData);
      const data = await block.getData();
      expect(typeof data).toBe("string");

   })

})