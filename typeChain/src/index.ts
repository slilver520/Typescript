import * as crypto from "crypto";

//DefinitelyTyped github : npm에 존재하는 패키지들의 TypeScript type 정의를 위한 리포지토리

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}
class Block implements BlockShape{
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number, 
        public data: string
    ){
        //hash변수 초기화
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash:string, height:number, data:string){
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha256").update(toHash).digest('hex')
    }
}

class Blockchain {
    private blocks: Block[];
    constructor(
    //parameter is empty
    ) {
        this.blocks = [];
       }
    private getPrevHash() {
        if(this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length - 1].hash;
    }
    public addBlock(data:string){
        const newBlock = new Block(
            this.getPrevHash(), 
            this.blocks.length + 1, 
            data
        );
        this.blocks.push(newBlock);
    }
    public getBlocks(){
        return [...this.blocks];
    }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

console.log(blockchain.getBlocks());


// localStorage
//npm i -D ts-node : 빌드 없이 ts실행
//npm i nodemon: 자동으로 커맨드 재실행