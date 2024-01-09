export interface IBlock {
  width: number;
  height: number;
  rotated: boolean;
}

export interface IBlockPlacement {
  block: IBlock;
  x: number;
  y: number;
}

export interface IContainer {
  width: number;
  height: number;
}
