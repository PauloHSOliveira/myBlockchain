// create block interface
export interface BlockInterface {
  index: number;
  timestamp: Date;
  hash: string;
  previousHash: string | null;
  data: any;
  difficulty: number;
  nonce: number;
}
