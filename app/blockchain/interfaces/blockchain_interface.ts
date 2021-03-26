import Block from '../../block/';

// create blockchain interface
export interface BlockchainInterface {
  blocks: Block[];
  index: number;
  difficulty: number;
}
