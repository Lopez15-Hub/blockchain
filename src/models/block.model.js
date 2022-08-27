import SHA256 from 'crypto-js/sha256';

export class BlockModel {


    constructor(blockData) {
        this.hash = null;
        this.height = 0;
        this.previousHash = '';
        this.timestamp = Date.now();
        this.blockData = Buffer.from(JSON.stringify(blockData).toString("hex"));

    }

    generateHash =()=> SHA256(JSON.stringify({...self,hash:null})).toString();

    validateBlock() {
        const self = this;
        return new Promise( (resolve, _) => {
            let currentHash = self.hash;

            self.hash = self.generateHash(); 

            if (currentHash !== self.hash) return resolve(false);
            return resolve(true);
        })
    }
    getBlockData() {
        const self = this;
        return new Promise(async(resolve, reject) => {
            let encodedData =  self.blockData;
            let decodedData = Buffer.from(encodedData, "hex").toString();
            let dataObject = await JSON.parse(decodedData);
            if (dataObject == "Genesis Block") return reject(new Error("This is the genesis block"));
            resolve(dataObject);
        })
    }
    toString() {
        const {
            hash,
            height,
            blockData,
            timestamp,
            previousHash
        } = this;
        return `Block -        
        timestamp: ${timestamp},
        height: ${height},
        hash: ${hash},
        previousHash: ${previousHash}
        blockData: ${blockData},
        __________________________________________
        
        `;
    }

}

