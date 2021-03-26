import Block from '../block';
import { BlockchainInterface } from './interfaces/blockchain_interface';

// aqui definimos o objeto blockchain e seus métodos

class Blockchain implements BlockchainInterface {
  blocks: Block[];
  index: number;
  difficulty: number;
  constructor(difficulty: number) {
    this.blocks = [new Block(0, null, 'First Block', 1)];
    this.index = 1;
    this.difficulty = difficulty;
  }
  // pega o último bloco gerado
  getLastBlock(): Block {
    return this.blocks[this.blocks.length - 1];
  }

  // adiciona um novo bloco
  addBlock(data: any) {
    let index = this.index;
    const difficulty = this.difficulty;
    const previousHash = this.getLastBlock().hash;

    const block = new Block(index, previousHash, data, difficulty);
    console.log(block);

    this.index++;
    this.blocks.push(block);
  }

  // verifica a integridade dos blocos
  isValid() {
    for (let i = 1; i < this.blocks.length; i++) {
      const currentBlock = this.blocks[i];
      const previousBlock = this.blocks[i - 1];

      if (currentBlock.hash !== currentBlock.generateHash()) {
        return false;
      }

      if (currentBlock.index !== previousBlock.index + 1) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

export default Blockchain;
