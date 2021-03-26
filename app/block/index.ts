import { SHA256 } from 'crypto-js';
import { BlockInterface } from './interfaces/block_interface';

/* 
  Aqui definimos o objeto Bloco e seus métodos
  como o gerar hash e o de minerar bloco
*/

class Block implements BlockInterface {
  index!: number;
  previousHash!: string | null;
  data: any;
  timestamp: Date;
  hash: string;
  difficulty: number;
  nonce: number;
  constructor(
    index: number,
    previousHash: string | null,
    data: any,
    difficulty: number
  ) {
    this.index = index;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = new Date();
    this.hash = this.generateHash();
    this.difficulty = difficulty;
    this.nonce = 0;

    this.mine();
  }
  // método que gera o hash do bloco
  generateHash() {
    return SHA256(
      this.index.toString() +
        this.previousHash +
        JSON.stringify(this.data) +
        this.timestamp +
        this.nonce
    ).toString();
  }

  // método que minera o bloco
  // verifica se respoeita a regra que é a quantidade de zeros no início do hash
  // a quantidade de zeros é definida através da dificuldade geral
  // difficulty = 1 então 1 zero, difficulty = 5 então 5 zeros
  mine() {
    this.hash = this.generateHash();
    while (!/^0*$/.test(this.hash.substring(0, this.difficulty))) {
      this.nonce++;
      this.hash = this.generateHash();
    }
  }
}
// *** Exemplo da regra com dificuldade 1 *** //

// Inválido
// a5036427617139d3ad9bf650d74ae43710e36d4f63829b92b807da37c5d38e8d

// Válido
// 07da8bff6cfea68a3f0a5bafc9b24d07f503e2282db36ffb58d43f9f4857c54b

export default Block;
