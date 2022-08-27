import SHA256 from 'crypto-js/sha256';

export class BlockModel {


    constructor(timestamp, blockData, previousHash = '') {
        this.timestamp = timestamp;
        this.blockData = blockData;
        this.previousHash = previousHash;
    }

    generateHash = () => SHA256(this.timestamp + this.previousHash, JSON.stringify(this.data)).toString();


}


