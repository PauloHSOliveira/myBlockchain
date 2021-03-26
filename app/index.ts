import Blockchain from './blockchain';

const blockchain = new Blockchain(3);
blockchain.addBlock({ amount: 4 });
blockchain.addBlock({ amount: 0.00041 });

console.log(blockchain.isValid());

blockchain.blocks[1].data.amount = 30000;
console.log(blockchain.isValid());
